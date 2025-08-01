import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { GitHubRepos, GitHubUser, zGitHubRepos, zGitHubUser } from "./schema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getGithubUserAndRepos(token: string): Promise<{ user: GitHubUser, repos: GitHubRepos }> {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
  };

  // Get user info
  const userRes = await fetch("https://api.github.com/user", { headers });
  if (!userRes.ok) {
    throw new Error(userRes.statusText || "Failed to fetch user info");
  }
  const user = await userRes.json();

  // Get user repos
  let repos: any[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const reposRes = await fetch(`https://api.github.com/user/repos?per_page=100&page=${page}`, { headers });
    if (!reposRes.ok) {
      throw new Error("Failed to fetch repositories");
    }
    const pageRepos = await reposRes.json();
    repos = repos.concat(pageRepos);
    hasMore = pageRepos.length === 100;
    page++;
  }

  // Validate response data
  const validatedUser = zGitHubUser.safeParse(user);
  if (!validatedUser.success) {
    throw new Error("Invalid user data");
  }

  const validatedRepos = zGitHubRepos.safeParse(repos);
  if (!validatedRepos.success) {
    throw new Error(validatedRepos.error.message);
  }

  return { user: validatedUser.data, repos: validatedRepos.data };
}
