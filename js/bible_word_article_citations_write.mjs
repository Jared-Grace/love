import { object_property_names } from "./object_property_names.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { bible_word_article_bodies_folder } from "./bible_word_article_bodies_folder.mjs";
import { bible_word_article_sites } from "./bible_word_article_sites.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read } from "./file_read.mjs";
import { bible_word_article_text_own } from "./bible_word_article_text_own.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { bible_word_article_citations_chapters } from "./bible_word_article_citations_chapters.mjs";
import { bible_word_article_citations_path } from "./bible_word_article_citations_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function bible_word_article_citations_write() {
  "Works out which article to offer for which word of which verse from every article fetched so far, writes one file per chapter under the assets folder, and says how much it read and what was missing.";
  "THE LIST OF ARTICLES IS FOUND, NOT GIVEN: every article of every site, read from where the fetching left it. One not fetched yet is counted and named by site rather than treated as citing nothing.";
  "THREE ENGLISH BIBLES ARE ASKED, because a reader's word is spelled by the reader's Bible: the Berean Standard says Gerasenes where the King James says Gadarenes.";
  "ONLY THE ADDRESSES ARE WRITTEN, never the articles' words, because this repo and these files are public and the articles are other people's writing.";
  let folder = bible_word_article_bodies_folder();
  let sites = bible_word_article_sites();
  let articles = [];
  let absent = {};
  for (let site of sites) {
    let table = await site.table();
    let seen = new Set();
    for (let row of table) {
      let file = row[2];
      let left = seen.has(file);
      if (equal(left, false)) {
        seen.add(file);
        let name = encodeURIComponent(file) + ".txt";
        let file_path = path_join([folder, site.name, name]);
        let exists = await file_exists(file_path);
        if (exists) {
          let page = await file_read(file_path);
          let text = bible_word_article_text_own(page);
          articles.push({
            site: site.name,
            file,
            text,
          });
        } else {
          absent[site.name] = (absent[site.name] ?? 0) + 1;
        }
      }
    }
  }
  let bibles = [];
  for (let version of ["engbsb", "eng-kjv2006", "engwebp"]) {
    let chapters = await ebible_version_chapters_cache(version);
    bibles.push(chapters);
  }
  let worked = bible_word_article_citations_chapters(articles, bibles);
  let chapter_codes = object_property_names(worked.index);
  let bytes = 0;
  for (let chapter_code of chapter_codes) {
    let asset_path = bible_word_article_citations_path(chapter_code);
    let file_path = web_assets_folder_join(asset_path);
    let contents = json_to(worked.index[chapter_code]);
    bytes = bytes + contents.length;
    await file_overwrite_uncached(file_path, contents);
  }
  let report = {
    articles: articles.length,
    absent,
    citations: worked.citations,
    nowhere: worked.nowhere,
    chapters: chapter_codes.length,
    bytes,
  };
  return report;
}
