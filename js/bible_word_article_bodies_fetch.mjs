import { bible_word_article_bodies_folder } from "./bible_word_article_bodies_folder.mjs";
import { bible_word_article_sites } from "./bible_word_article_sites.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { bible_word_article_page_body } from "./bible_word_article_page_body.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { sleep } from "./sleep.mjs";
export async function bible_word_article_bodies_fetch(limit_per_site) {
  "Fetches the words of every article of every site that has not been fetched yet, one page a second, and says how many came and which did not.";
  "$plain limit_per_site";
  "the limit is how many articles of each site to fetch in this run, written as a number; it only counts, and nothing in it runs.";
  "THE LIST IS FOUND, NOT GIVEN: every site in the article sites list, every article in its table. An article with a file on disk is skipped, so a run that died picks up where it stopped.";
  "ONE ARTICLE FAILING DOES NOT STOP THE REST, and it is named in the answer: a missing article looks the same as an article that cites nothing unless the miss is reported.";
  "ONE PAGE A SECOND, because these are other people's servers and nothing here is in a hurry.";
  let limit = Number(limit_per_site);
  let folder = bible_word_article_bodies_folder();
  let sites = bible_word_article_sites();
  let report = [];
  for (let site of sites) {
    let table = await site.table();
    let files = [];
    for (let row of table) {
      let file = row[2];
      if (files.includes(file) === false) {
        files.push(file);
      }
    }
    let fetched = 0;
    let already = 0;
    let missed = [];
    for (let file of files) {
      let name = encodeURIComponent(file) + ".txt";
      let file_path = path_join([folder, site.name, name]);
      let exists = await file_exists(file_path);
      if (exists) {
        already = already + 1;
      } else if (fetched + missed.length < limit) {
        let html = null;
        try {
          html = await http_text_or_null(site.url(file));
        } catch (error) {
          html = null;
        }
        if (html === null) {
          missed.push(file);
        } else {
          let body = bible_word_article_page_body(html);
          await file_overwrite_uncached(file_path, body);
          fetched = fetched + 1;
        }
        await sleep(1000);
      }
    }
    report.push({
      site: site.name,
      articles: files.length,
      already,
      fetched,
      missed,
    });
  }
  return report;
}
