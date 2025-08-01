import * as fs from "fs";
import puppeteer from "puppeteer";

export async function createResumePdf() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const html = fs.readFileSync("/out/resume.html", "utf8");
    await page.setContent(html, { waitUntil: "networkidle0" });

    await page.pdf({
        path: "output.pdf",
        format: "A4",
        printBackground: true,
    });

    await browser.close();
    console.log("PDF generated successfully");
}

