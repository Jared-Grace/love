export async function puppeteer_matches(page, tag_name, text) {
  const elements = await page.$$(tag_name);
  const matches = [];
  for (const el of elements) {
    function lambda(n) {
      let v2 = n.textContent;
      return v2;
    }
    const txt = await el.evaluate(lambda);
    if (txt === text) {
      matches.push(el);
    }
  }
  return matches;
}
