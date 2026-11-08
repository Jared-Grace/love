import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { path_join } from "./path_join.mjs";
import { bible_word_article_bodies_folder } from "./bible_word_article_bodies_folder.mjs";
import { folder_read } from "./folder_read.mjs";
import { file_read } from "./file_read.mjs";
import { bible_word_article_text_own } from "./bible_word_article_text_own.mjs";
import { bible_word_article_pointer_spelled } from "./bible_word_article_pointer_spelled.mjs";
import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function smith_word_articles_pointers_follow() {
  "Points every row of the Smith's table whose entry only sends the reader elsewhere at the entry it sends them to, and takes out the rows whose entry sends them to one the site does not have, then says how many of each.";
  "A POINTER IS A PAGE THAT SAYS NOTHING - Abila. [ ABILENE ] - so a button opening it costs the reader a tap and a page load for one word. Asked for 2026-11-08, when Smith's entries were seen to be very small: of 4,597, some 260 were pointers.";
  "A POINTER TO AN ENTRY THE SITE LACKS IS TAKEN OUT rather than kept, because that page tells the reader only another name, and the site has no page for that name either - BibleStudyTools' Smith's has no Edom.";
  "THE ENTRY POINTED TO IS FOUND BY FILE: the name with dashes, then run together, then its first word alone, which is how ASHER ASHER and ALGUM TREES find asher and algum. Rejected: looking the name up in the table's words, which finds the same files and misses none of these.";
  "Running it again changes nothing, because a followed row now names an entry that is not a pointer, and a removed row is gone.";
  let site = "Smith's Bible Dictionary";
  let folder = bible_word_article_bodies_folder();
  let site_folder = path_join([folder, site]);
  let fetched = await folder_read(site_folder);
  let files = new Set();
  for (let name of fetched) {
    let v = name.replace(/\.txt$/, "");
    let v2 = decodeURIComponent(v);
    files.add(v2);
  }
  let followed = new Map();
  let lacking = new Set();
  for (let name of fetched) {
    let v3 = name.replace(/\.txt$/, "");
    let file = decodeURIComponent(v3);
    let file_path = path_join([site_folder, name]);
    let page = await file_read(file_path);
    let text = bible_word_article_text_own(page);
    let spelled = bible_word_article_pointer_spelled(text);
    if (equal(spelled, null)) {
      continue;
    }
    let first = spelled.split(" ")[0];
    let v4 = spelled.replace(/ /g, "-");
    let v5 = spelled.replace(/ /g, "");
    let candidates = [v4, v5, first];
    let target = null;
    for (let candidate of candidates) {
      let candidate_file = candidate + ".html";
      if (
        equal(target, null) &&
        files.has(candidate_file) &&
        not_equal(candidate_file, file)
      ) {
        target = candidate_file;
      }
    }
    if (equal(target, null)) {
      lacking.add(file);
    } else {
      followed.set(file, target);
    }
  }
  let table_path = function_name_to_path_absolute(
    fn_name("smith_word_articles"),
  );
  let source = await file_read(table_path);
  let lines = source.split("\n");
  let kept = [];
  let rows_followed = 0;
  let rows_removed = 0;
  for (let line of lines) {
    let row = line.match(/^(\s*\[".*", ".*", ")([^"]+)("\],?)$/);
    if (equal(row, null)) {
      kept.push(line);
      continue;
    }
    let file = row[2];
    if (lacking.has(file)) {
      rows_removed = rows_removed + 1;
      continue;
    }
    let target = followed.get(file);
    if (equal(target, undefined)) {
      kept.push(line);
      continue;
    }
    rows_followed = rows_followed + 1;
    kept.push(row[1] + target + row[3]);
  }
  let after = kept.join("\n");
  if (not_equal(after, source)) {
    await file_overwrite_uncached(table_path, after);
  }
  let report = {
    pointers: followed.size + lacking.size,
    rows_followed,
    rows_removed,
  };
  return report;
}
