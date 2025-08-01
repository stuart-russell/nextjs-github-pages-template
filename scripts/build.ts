import { execSync } from 'child_process';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { createResumePdf } from './createResumePdf';

function runBuild() {
    execSync('npm run build', { stdio: 'inherit' });
}

function fixHtmlFiles(outDir: string) {
    const files = readdirSync(outDir);
    for (const file of files) {
        if (file.endsWith('.html')) {
            const filePath = join(outDir, file);
            let content = readFileSync(filePath, 'utf8');
            content = content.replace(/\/dev\//g, './');
            content = content.replace("/dev", 'index.html');
            content = content.replace("./projects", 'projects.html');
            content = content.replace("./blog", 'blog.html');
            content = content.replace("./resume", 'resume.html');
            writeFileSync(filePath, content, 'utf8');
        }
    }
}

async function main() {
    console.log('Building the project...');
    runBuild();
    console.log('Fixing static file paths...');
    fixHtmlFiles('out');
    console.log('Build and path fix completed successfully.');
    console.log('Generating PDF from resume...')
    createResumePdf();
    console.log('PDF generation completed successfully.');
}

main();