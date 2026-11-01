import { json_from } from "./json_from.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function orthodoxwiki_titles_download() {
  "Fetches the title of every article on OrthodoxWiki, and every other name that leads to one, onto this machine under the local records folder, and answers where it was put and how many of each it holds.";
  "THE SITE AND THE QUESTION ARE FIXED HERE AND NOTHING IS ASKED FOR, so it can reach one site only, ask it one thing only, and write one file only.";
  "A NAME THAT LEADS TO AN ARTICLE IS KEPT WITH WHERE IT LEADS - John the Baptist leads to John the Forerunner - because a verse prints the name a reader knows, and the wiki often titles the article by the name the Church gives.";
  let base =
    "https://orthodoxwiki.org/api.php?action=query&format=json&generator=allpages&gapnamespace=0&gaplimit=500";
  async function all(filter, take) {
    let found = [];
    let more = "";
    while (true) {
      let url = base + "&gapfilterredir=" + filter + more;
      let text = await http_text_or_null(url);
      if (equal(text, null)) {
        throw new Error("OrthodoxWiki did not answer for " + url);
      }
      let answer = json_from(text);
      take(answer.query ?? {}, found);
      if (equal(answer.continue, undefined)) {
        return found;
      }
      more = "";
      for (let [key, value] of Object.entries(answer.continue)) {
        more += "&" + key + "=" + encodeURIComponent(value);
      }
    }
  }
  function titles(query, found) {
    for (let page of Object.values(query.pages ?? {})) {
      found.push(page.title);
    }
  }
  function leads(query, found) {
    for (let lead of query.redirects ?? []) {
      found.push([lead.from, lead.to]);
    }
  }
  let pages = await all("nonredirects", titles);
  base = base + "&redirects=1";
  let redirects = await all("redirects", leads);
  pages.sort();
  function lambda(a, b) {
    let r2 = less_than(a[0], b[0]) ? -1 : greater_than(a[0], b[0]) ? 1 : 0;
    return r2;
  }
  redirects.sort(lambda);
  let folder = folder_gitignore_join("orthodoxwiki");
  let path = path_join([folder, "titles.json"]);
  let contents = JSON.stringify(
    {
      pages,
      redirects,
    },
    null,
    1,
  );
  await file_overwrite(path, contents);
  let r = {
    path,
    pages: pages.length,
    redirects: redirects.length,
  };
  return r;
}
