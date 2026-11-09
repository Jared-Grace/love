import { bible_word_article_bodies_folder } from "./bible_word_article_bodies_folder.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read } from "./folder_read.mjs";
import { file_read } from "./file_read.mjs";
import { bible_word_article_text_own } from "./bible_word_article_text_own.mjs";
import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { fn_name } from "./fn_name.mjs";
import { not_equal } from "./not_equal.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function smith_word_articles_stubs_remove(words) {
  "The table of Smith's Bible Dictionary entries with every row taken out whose entry says fewer words than you name, and how many rows went.";
  "A short Smith's entry is a stub: the name, what the name means, one line saying who or where, and the verse the reader is already standing on. Offered as a link it promises an article and teaches nothing the verse did not, so the human asked on 2026-11-09 for those to stop being offered. Read across the table, entries under thirty words were stubs all the way up, and from thirty to forty they begin to add a second name or where a place lay.";
  "Words are counted in the entry's own text, with the closing note saying which other dictionaries also hold the name left out, because that note is the same on every entry and says nothing about this one. An entry whose text was never fetched is kept, because nothing is known about it.";
  "$plain words";
  "the count is a number written out, the fewest words an entry must say to stay. It is a size and nothing that runs.";
  let fewest = Number(words);
  let site = "Smith's Bible Dictionary";
  let folder = bible_word_article_bodies_folder();
  let site_folder = path_join([folder, site]);
  let fetched = await folder_read(site_folder);
  let stubs = new Set();
  for (let name of fetched) {
    let v = name.replace(/\.txt$/, "");
    let file = decodeURIComponent(v);
    let file_path = path_join([site_folder, name]);
    let page = await file_read(file_path);
    let text = bible_word_article_text_own(page);
    let own = text.replace(/\[[NEH]\] indicates.*$/, "");
    let count = own.split(/\s+/).filter(Boolean).length;
    if (count < fewest) {
      stubs.add(file);
    }
  }
  let table_path = function_name_to_path_absolute(
    fn_name("smith_word_articles"),
  );
  let source = await file_read(table_path);
  let lines = source.split("\n");
  let kept = [];
  let rows_removed = 0;
  for (let line of lines) {
    let row = line.match(/^(\s*\[".*", ".*", ")([^"]+)("\],?)$/);
    if (not_equal(row, null) && stubs.has(row[2])) {
      rows_removed = rows_removed + 1;
      continue;
    }
    kept.push(line);
  }
  let after = kept.join("\n");
  if (not_equal(after, source)) {
    await file_overwrite_uncached(table_path, after);
  }
  let report = {
    stubs: stubs.size,
    rows_removed,
    rows_kept: kept.length,
  };
  return report;
}
