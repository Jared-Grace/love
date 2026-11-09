import { equal } from "./equal.mjs";
import { list_find } from "./list_find.mjs";
import { bible_word_article_sites } from "./bible_word_article_sites.mjs";
import { bible_word_article_bodies_fetch_site } from "./bible_word_article_bodies_fetch_site.mjs";
export async function bible_word_article_bodies_fetch_files(site_name, files) {
  "Fetches the words of just these articles of one site, by their own files on that site, when the rest are already down and asking the site for its whole list again would cost a page per letter.";
  "$plain site_name";
  "$plain files";
  "the site name is one of the article sites' names; the files are that site's own files of the articles, comma-joined. Both only pick which addresses are read, and nothing in them runs.";
  "AN ARTICLE ALREADY ON DISK IS SKIPPED, the same as every other fetch of article words.";
  function lambda(s) {
    let eq = equal(s.name, site_name);
    return eq;
  }
  let list2 = bible_word_article_sites();
  let site = list_find(list2, lambda);
  let list = files.split(",");
  let r = await bible_word_article_bodies_fetch_site(site, list, list.length);
  return r;
}
