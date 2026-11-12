import { equal } from "./equal.mjs";
import { list_find } from "./list_find.mjs";
import { bible_word_article_sites } from "./bible_word_article_sites.mjs";
import { isbe_article_files_all } from "./isbe_article_files_all.mjs";
import { bible_word_article_bodies_fetch_site } from "./bible_word_article_bodies_fetch_site.mjs";
export async function isbe_article_bodies_fetch(limit) {
  "Fetches the words of every article of the International Standard Bible Encyclopedia not fetched yet, up to a limit, so each can be offered on the verses it cites.";
  "$plain limit";
  "the limit is how many articles to fetch in this run, written as a number; it only counts, and nothing in it runs.";
  "ONE SITE ALONE, because asking every site for its whole list again would read about a thousand Church Fathers index pages to fetch nothing new.";
  function lambda(s) {
    let eq = equal(s.name, "the International Standard Bible Encyclopedia");
    return eq;
  }
  let list = bible_word_article_sites();
  let site = list_find(list, lambda);
  let files = await isbe_article_files_all();
  let limit2 = Number(limit);
  let r = await bible_word_article_bodies_fetch_site(site, files, limit2);
  return r;
}
