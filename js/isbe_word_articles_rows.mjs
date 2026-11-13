import { bible_word_article_bodies_folder } from "./bible_word_article_bodies_folder.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read } from "./folder_read.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { bible_words_ordinary } from "./bible_words_ordinary.mjs";
import { file_read } from "./file_read.mjs";
import { bible_word_article_title } from "./bible_word_article_title.mjs";
import { equal } from "./equal.mjs";
import { isbe_title_words } from "./isbe_title_words.mjs";
import { not } from "./not.mjs";
import { isbe_page_pointer_is } from "./isbe_page_pointer_is.mjs";
export async function isbe_word_articles_rows() {
  "The International Standard Bible Encyclopedia's table of names: for every article fetched, a row for each word a verse would spell for its title, then the title itself, then the article's file - so a tapped Nazirite opens the article on the Nazirite in every verse that prints it, not only in the verses the article cites.";
  "READ OFF THE ARTICLES ALREADY FETCHED, each naming itself the way its page does, because the site's index lists files and not names.";
  "A NAME OF ONE WORD IS WRITTEN IN LOWER CASE WHEN THE BIBLES TREAT IT AS AN ORDINARY WORD, so faith opens wherever a verse uses it; any other keeps its capital, so lot never opens the article on Lot. The same three bibles are asked as for citations, because a reader's word is spelled by the reader's bible.";
  let site_name = "the International Standard Bible Encyclopedia";
  let folder2 = bible_word_article_bodies_folder();
  let folder = path_join([folder2, site_name]);
  let names = await folder_read(folder);
  let bibles = [];
  for (let version of ["engbsb", "eng-kjv2006", "engwebp"]) {
    let v = await ebible_version_chapters_cache(version);
    bibles.push(v);
  }
  let ordinary = bible_words_ordinary(bibles);
  let r = [];
  let pointers = new Set();
  for (let name of names) {
    let v2 = name.replace(/\.txt$/, "");
    let file = decodeURIComponent(v2);
    let file_path = path_join([folder, name]);
    let page = await file_read(file_path);
    let title = bible_word_article_title(site_name, page);
    if (equal(title, null)) {
      continue;
    }
    for (let key of isbe_title_words(title)) {
      let b = key.includes(" ");
      let one = not(b);
      let lower = key.toLowerCase();
      let word = one && ordinary.has(lower) ? lower : key;
      let row = [word, title, file];
      r.push(row);
      if (isbe_page_pointer_is(page)) {
        pointers.add(row);
      }
    }
  }
  ("A PAGE THAT ONLY POINTS ELSEWHERE IS LEFT OUT WHERE A REAL ARTICLE ALREADY ANSWERS TO ITS NAME - Ghost, Holy points at the Holy Spirit, and the Holy Ghost has an article of its own, so two buttons both saying Holy Ghost would offer one that says nothing. A pointer that is the only article under its name stays, because it still leads somewhere.");
  let answered = new Set();
  for (let row of r) {
    let left = pointers.has(row);
    if (equal(left, false)) {
      answered.add(row[0]);
    }
  }
  function kept(row) {
    let left2 = pointers.has(row);
    let k = equal(left2, false) || equal(answered.has(row[0]), false);
    return k;
  }
  r = r.filter(kept);
  return r;
}
