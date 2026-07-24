import puppeteer from "puppeteer";
const browser = await puppeteer.launch({ executablePath: "/usr/bin/google-chrome", headless: "new", args: ["--no-sandbox"] });
const page = await browser.newPage();
const errs = [];
page.on("pageerror", e => errs.push(String(e)));
await page.goto("http://localhost:8080/love/public/dev/verses.html", { waitUntil: "networkidle0" });
await page.evaluate(() => localStorage.clear());
await page.reload({ waitUntil: "networkidle0" });
await new Promise(r => setTimeout(r, 1500));
async function draw(n) {
  await page.evaluate((n) => { const b=[...document.querySelectorAll("button")].find(x=>x.textContent.trim()===String(n)); b.click(); }, n);
  await new Promise(r => setTimeout(r, 2500));
  const refs = await page.evaluate(() => {
    const t = document.body.innerText;
    return (t.match(/\b[1-3]?\s?[A-Z][a-z]+\s+\d+:\d+(?:-\d+)?\b/g) || []);
  });
  return refs;
}
const three = await draw(3);
const one = await draw(1);
const threeB = await draw(3);
console.log(JSON.stringify({
  three_count: three.length, three_sample: three.slice(0,3),
  one_count: one.length, one_sample: one,
  three_again_distinct_from_first: JSON.stringify(three) !== JSON.stringify(threeB),
  pageerrors: errs,
}, null, 2));
await browser.close();
