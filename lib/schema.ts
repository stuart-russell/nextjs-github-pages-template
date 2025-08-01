import { z } from 'zod';

export const zGitHubUser = z.object({
    name: z.string(),
    login: z.string(),
    followers: z.number(),
    following: z.number(),
    company: z.string().nullable(),
    location: z.string().nullable(),
    bio: z.string().nullable(),
    html_url: z.string().url(),
    email: z.string().email().nullable(),
    avatar_url: z.string().url(),
});

const zGitHubRepo = z.object({
    name: z.string(),
    created_at: z.coerce.date(),
    html_url: z.string().url(),
    description: z.string().nullable(),
    forks_count: z.number(),
    stargazers_count: z.number(),
});

export const zGitHubRepos = z.array(zGitHubRepo);

export type GitHubUser = z.infer<typeof zGitHubUser>;
export type GitHubRepo = z.infer<typeof zGitHubRepo>;
export type GitHubRepos = z.infer<typeof zGitHubRepos>;
