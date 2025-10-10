export async function puppeteer_hrefs(page) {
  function lambda3(links) {
    function lambda(link) {
      let v2 = link.href;
      return v2;
    }
    function lambda2(href) {
      return href;
    }
    let v3 = links.map(lambda).filter(lambda2);
    return v3;
  }
  const hrefs = await page.$$eval("a", lambda3);
  return hrefs;
}
