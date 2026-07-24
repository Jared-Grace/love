import puppeteer from "puppeteer";
const apps = ["autopray","a"];
const browser = await puppeteer.launch({ executablePath: "/usr/bin/google-chrome", headless: "new", args: ["--no-sandbox"] });
const out = [];
for (const app of apps) {
  const page = await browser.newPage();
  const errs = [];
  page.on("pageerror", e => errs.push(String(e)));
  await page.goto(`http://localhost:8080/love/public/dev/${app}.html`, { waitUntil: "networkidle0" });
  await new Promise(r=>setTimeout(r,3500));
  const count = await page.evaluate(() => [...document.querySelectorAll("button")].filter(b=>/Contact the developer/.test(b.textContent)).length);
  out.push({ app, contact_buttons: count, errs: errs.slice(0,2) });
  await page.close();
}
console.log(JSON.stringify(out,null,2));
await browser.close();
