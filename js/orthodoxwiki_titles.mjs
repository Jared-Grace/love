import { json_from } from "./json_from.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
export async function orthodoxwiki_titles() {
  "The title of every article on OrthodoxWiki, and every other name that leads to one paired with the article it leads to, as the wiki answers them now.";
  "THE SITE AND THE QUESTION ARE FIXED HERE AND NOTHING IS ASKED FOR, so it can reach one site only and ask it one thing only; it writes nothing.";
  "A NAME THAT LEADS TO AN ARTICLE IS KEPT WITH WHERE IT LEADS - John the Baptist leads to John the Forerunner - because a verse prints the name a reader knows, and the wiki often titles the article by the name the Church gives.";
  "THE WIKI ANSWERS WHICH NAMES LEAD TO EACH ARTICLE, not where each leading name goes - asked the second way it answered none at all, measured 2026-11-01.";
  let base =
    "https://orthodoxwiki.org/api.php?action=query&format=json&generator=allpages&gapnamespace=0&gaplimit=500&gapfilterredir=nonredirects";
  let pages = [];
  let redirects = [];
  let more = "";
  while (true) {
    let url = base + "&prop=redirects&rdnamespace=0&rdlimit=500" + more;
    let text = await http_text_or_null(url);
    if (equal(text, null)) {
      throw new Error("OrthodoxWiki did not answer for " + url);
    }
    let answer = json_from(text);
    for (let page of Object.values(answer.query?.pages ?? {})) {
      let b2 = pages.includes(page.title);
      if (not(b2)) {
        pages.push(page.title);
      }
      for (let lead of page.redirects ?? []) {
        redirects.push([lead.title, page.title]);
      }
    }
    if (equal(answer.continue, undefined)) {
      break;
    }
    more = "";
    for (let [key, value] of Object.entries(answer.continue)) {
      more += "&" + key + "=" + encodeURIComponent(value);
    }
  }
  pages.sort();
  function lambda(a, b) {
    let r2 = less_than(a[0], b[0]) ? -1 : greater_than(a[0], b[0]) ? 1 : 0;
    return r2;
  }
  redirects.sort(lambda);
  let r = {
    pages,
    redirects,
  };
  return r;
}
