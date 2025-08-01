import { GITHUB_TOKEN } from "@/lib/env";
import { getGithubUserAndRepos } from "@/lib/utils";
import fs from "fs";
import path from "path";

async function generateConfigFile() {
    const userData = await getGithubUserAndRepos(GITHUB_TOKEN);
    const { repos } = userData;
    const newRepos = repos.map(repo => ({
        ...repo,
        created_at: new Date(repo.created_at).toLocaleDateString(),
        technologies: []
    }));
    const configContent = `export const config = ${JSON.stringify({ ...userData, repos: newRepos }, null, 2)};\n`;
    const configPath = path.join(__dirname, "../lib/config.ts");
    fs.writeFileSync(configPath, configContent, "utf8");
    console.log(`Config file created at ${configPath}`);
}

async function main() {
    try {
        await generateConfigFile();
        console.log("Configuration file generated successfully.");
    } catch (error) {
        console.error("Error generating configuration file:", error);
    }
}

main();
