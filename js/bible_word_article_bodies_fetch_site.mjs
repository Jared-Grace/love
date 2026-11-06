import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { bible_word_article_bodies_folder } from "./bible_word_article_bodies_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { bible_word_article_page_body } from "./bible_word_article_page_body.mjs";
import { sleep } from "./sleep.mjs";
export async function bible_word_article_bodies_fetch_site(site, files, limit) {
  "Fetches the words of each of these articles of one site that has not been fetched yet, and says how many came and which did not.";
  "the site is an entry of the article sites list - its name and the function giving an article's whole address; the files are that site's own files of the articles; the limit is how many to fetch in this run.";
  "AN ARTICLE WITH A FILE ON DISK IS SKIPPED, so a run that died picks up where it stopped.";
  "ONE ARTICLE FAILING DOES NOT STOP THE REST, and it is named in the answer.";
  "ONE PAGE A SECOND, because these are other people's servers and nothing here is in a hurry. OrthodoxWiki's robots.txt asks for ten seconds between pages, so it gets ten.";
  let waits = {
    OrthodoxWiki: 10000,
  };
  let folder = bible_word_article_bodies_folder();
  let fetched = 0;
  let already = 0;
  let missed = [];
  for (let file of files) {
    let name = encodeURIComponent(file) + ".txt";
    let file_path = path_join([folder, site.name, name]);
    let exists = await file_exists(file_path);
    if (exists) {
      already = already + 1;
    } else if (less_than(fetched + missed.length, limit)) {
      let html = null;
      try {
        let url2 = site.url(file);
        html = await http_text_or_null(url2);
      } catch (error) {
        html = null;
      }
      if (equal(html, null)) {
        missed.push(file);
      } else {
        let contents = bible_word_article_page_body(html);
        await file_overwrite_uncached(file_path, contents);
        fetched = fetched + 1;
      }
      await sleep(waits[site.name] ?? 1000);
    }
  }
  let r = {
    site: site.name,
    articles: files.length,
    already,
    fetched,
    missed,
  };
  return r;
}
