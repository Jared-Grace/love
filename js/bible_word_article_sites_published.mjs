import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { bible_word_article_sites } from "./bible_word_article_sites.mjs";
import { web_assets_url } from "./web_assets_url.mjs";
import { bible_word_article_sites_path } from "./bible_word_article_sites_path.mjs";
import { http_json_browser_quiet } from "./http_json_browser_quiet.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function bible_word_article_sites_published() {
  "The sites a tapped bible word can be opened on, as the published list names them, each with its name, its table of names and the whole address of one of its articles given the file.";
  "THE LIST IS FETCHED, NOT BUILT IN, so a site added later reaches readers when the list is uploaded, without the app being rebuilt and deployed. A site this app was built knowing keeps its table of names; a site it does not know has an empty table, and its articles still come through the list of citations, which carries each one's title.";
  "NOT REACHING THE LIST MUST NOT COST THE READER THE CARD: the sites this app was built with stand in for it. It asks once and quietly, for the same reason the list of citations does.";
  let known = bible_word_article_sites();
  let path = bible_word_article_sites_path();
  let url = web_assets_url(path);
  async function list_fetch() {
    let fetched = await http_json_browser_quiet(url);
    return fetched;
  }
  let rows = await catch_null_async(list_fetch);
  let b = Array.isArray(rows);
  if (not(b)) {
    return known;
  }
  async function none() {
    let r2 = [];
    return r2;
  }
  let r = [];
  for (let row of rows) {
    function lambda(site) {
      let eq = equal(site.name, row.name);
      return eq;
    }
    let same = known.find(lambda);
    let table = equal(same, undefined) ? none : same.table;
    let prefix = row.prefix;
    function article_url(file) {
      let whole = prefix + file;
      return whole;
    }
    r.push({
      name: row.name,
      table,
      url: article_url,
    });
  }
  return r;
}
