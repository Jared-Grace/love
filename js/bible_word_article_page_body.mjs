import { greater_than_equal } from "./greater_than_equal.mjs";
import { equal } from "./equal.mjs";
export function bible_word_article_page_body(html) {
  "The readable words of one article on a site's page, without the page's menus, scripts or footers.";
  "$plain html";
  "the html is one page fetched from an article site; its tags are removed and nothing in it runs.";
  "ONLY THE ARTICLE IS KEPT, because a verse named in a menu or a sidebar is not a verse the article speaks of. Each pair marks where one site's article begins and ends; a page matching no pair is kept whole.";
  let marks = [
    ["<article>", "</article>"],
    ['id="mw-content-text"', 'class="printfooter"'],
    ["<h1>", "Return to:"],
  ];
  let body = html;
  for (let [start_mark, end_mark] of marks) {
    let start = html.indexOf(start_mark);
    let end = html.indexOf(end_mark, start);
    if (greater_than_equal(start, 0) && greater_than_equal(end, 0)) {
      body = html.slice(start, end);
      break;
    }
  }
  let named = {
    ndash: "–",
    mdash: "—",
    nbsp: " ",
    amp: "&",
    quot: '"',
    apos: "'",
    lt: "<",
    gt: ">",
    rsquo: "’",
    lsquo: "‘",
    ldquo: "“",
    rdquo: "”",
  };
  function entity(whole, name) {
    let code = name.match(/^#(x?)([0-9a-fA-F]+)$/);
    if (code) {
      let base = equal(code[1], "x") ? 16 : 10;
      let v = parseInt(code[2], base);
      let character = String.fromCodePoint(v);
      return character;
    }
    let found = named[name] ?? whole;
    return found;
  }
  let text = body
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&(#?\w+);/g, entity)
    .replace(/\s+/g, " ")
    .trim();
  return text;
}
