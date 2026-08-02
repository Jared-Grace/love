export async function puppeteer_matches(page, tag_name, text) {
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let elements = await page.$$(tag_name);
  let matches = [];
  for (let el of elements) {
    function lambda(n) {
      let v = n.textContent;
      return v;
    }
    let txt = await el.evaluate(lambda);
    if (txt === text) {
      matches.push(el);
    }
  }
  return matches;
}
