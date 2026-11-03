import { arguments_assert } from "./arguments_assert.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function page_links_answered(url) {
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  arguments_assert(arguments, 1);
  ("Opens one page in a real browser and reports each link on it to another page of the same site: what is written on the link, where the browser takes that to mean, and what the server answers there.");
  ("A link is read off the drawn page because that is the only place its meaning can be seen: the same words lead somewhere different depending on the address of the page they stand on.");
  ("Links leading off the site are only counted, since a stranger's server answering says nothing about this one.");
  let links = [];
  let away = 0;
  async function on_page(page) {
    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });
    await page.waitForSelector("a");
    function read(anchors) {
      function one(a) {
        let r = {
          written: a.getAttribute("href"),
          href: a.href,
          inside: a.origin === a.ownerDocument.location.origin,
        };
        return r;
      }
      let r2 = anchors.map(one);
      return r2;
    }
    let found = await page.$$eval("a", read);
    for (let link of found) {
      if (!link.inside) {
        away = away + 1;
        continue;
      }
      let response = await page.request.get(link.href);
      links.push({
        written: link.written,
        href: link.href,
        status: response.status(),
      });
    }
  }
  await playwright_test_blank(on_page);
  let r = {
    url,
    away,
    links,
  };
  return r;
}
