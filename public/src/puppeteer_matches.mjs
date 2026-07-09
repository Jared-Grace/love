export async function puppeteer_matches(page, tag_name, text) {
  const elements = await page.$$(tag_name);
  const matches = [];
  for (const el of elements) {
    function lambda(n) {
      let v = n.textContent;
      return v;
    }
    const txt = await el.evaluate(lambda);
    if (txt === text) {
      matches.push(el);
    }
  }
  return matches;
}
