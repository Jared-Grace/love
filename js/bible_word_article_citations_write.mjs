import { bible_word_article_bodies_folder } from "./bible_word_article_bodies_folder.mjs";
import { bible_word_article_sites } from "./bible_word_article_sites.mjs";
import { equal } from "./equal.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read } from "./file_read.mjs";
import { bible_word_article_text_own } from "./bible_word_article_text_own.mjs";
import { folder_read } from "./folder_read.mjs";
import { bible_word_article_title } from "./bible_word_article_title.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { bible_word_article_citations_chapters } from "./bible_word_article_citations_chapters.mjs";
import { bible_word_article_citations_whole_chapters_add } from "./bible_word_article_citations_whole_chapters_add.mjs";
import { bible_word_article_sites_published_rows } from "./bible_word_article_sites_published_rows.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { bible_word_article_sites_path } from "./bible_word_article_sites_path.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { json_to } from "./json_to.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_word_article_citations_path } from "./bible_word_article_citations_path.mjs";
export async function bible_word_article_citations_write() {
  "Works out which article to offer for which word of which verse from every article fetched so far, writes one file per chapter under the assets folder, and says how much it read and what was missing.";
  "THE LIST OF ARTICLES IS FOUND, NOT GIVEN: every article of every site, read from where the fetching left it. One a site's table names but not fetched yet is counted and named by site rather than treated as citing nothing.";
  "AN ARTICLE NO TABLE NAMES IS READ TOO - the fetching of a whole site leaves thousands - and carries the title it gives itself, so the reader has a name to put on its button. One whose title cannot be read is left out and counted as untitled, because a button with no name says nothing.";
  "THREE ENGLISH BIBLES ARE ASKED, because a reader's word is spelled by the reader's Bible: the Berean Standard says Gerasenes where the King James says Gadarenes.";
  "ONLY THE ADDRESSES ARE WRITTEN, never the articles' words, because this repo and these files are public and the articles are other people's writing.";
  let folder = bible_word_article_bodies_folder();
  let sites = bible_word_article_sites();
  let articles = [];
  let absent = {};
  let untitled = {};
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
            title: null,
          });
        } else {
          absent[site.name] = (absent[site.name] ?? 0) + 1;
        }
      }
    }
    let site_folder = path_join([folder, site.name]);
    ("A SITE WITH NOTHING DOWNLOADED HAS NO FOLDER - the Catena Aurea is offered by chapter, never read - and reads as no pages.");
    let downloaded = await file_exists(site_folder);
    let fetched = downloaded ? await folder_read(site_folder) : [];
    for (let name of fetched) {
      let v = name.replace(/\.txt$/, "");
      let file = decodeURIComponent(v);
      let left = seen.has(file);
      if (equal(left, false)) {
        seen.add(file);
        let file_path2 = path_join([site_folder, name]);
        let page = await file_read(file_path2);
        let title = bible_word_article_title(site.name, page);
        if (equal(title, null)) {
          untitled[site.name] = (untitled[site.name] ?? 0) + 1;
        } else {
          let text = bible_word_article_text_own(page);
          articles.push({
            site: site.name,
            file,
            text,
            title,
          });
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
  function code_of(chapter) {
    let code = chapter.chapter_code;
    return code;
  }
  let all_codes = bibles[0].map(code_of);
  bible_word_article_citations_whole_chapters_add(
    worked.index,
    sites,
    all_codes,
  );
  ("THE LIST OF SITES IS WRITTEN BESIDE THE CITATIONS, so a site added here reaches readers' apps by the same upload, without a rebuild.");
  let sites_rows = bible_word_article_sites_published_rows();
  let path = bible_word_article_sites_path();
  let sites_file = web_assets_folder_join(path);
  let contents2 = json_to(sites_rows);
  await file_overwrite_uncached(sites_file, contents2);
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
    untitled,
    citations: worked.citations,
    nowhere: worked.nowhere,
    chapters: chapter_codes.length,
    bytes,
  };
  return report;
}
