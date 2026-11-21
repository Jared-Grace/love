import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { data_folder } from "./data_folder.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { commons_pictures_search } from "./commons_pictures_search.mjs";
import { commons_pictures_best } from "./commons_pictures_best.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
export async function bible_record_pictures_chapter_search(chapter) {
  arguments_assert(arguments, 1);
  ("$plain chapter");
  ("For one chapter's passages, asks Wikimedia Commons for the painting each row names in its query and writes down the best one free to use, so every passage has one picture chosen before anybody records it.");
  ("The file is data/bible_record_pictures/<chapter>.json: a list of rows, one per preaching passage, each {ref, query}. ref is the comma-joined verse numbers, the same key the g game's sermon passages answer to. The query is written by whoever chose the painting - painter and exact title, because Commons search matches the words inside scanned books and a description of the scene finds books, not paintings.");
  ("★ ONLY ROWS WITH NO title KEY ARE SEARCHED. A row that found nothing gets title null, so a run over the same file does nothing twice; to try again, rewrite the query and remove the title.");
  ("★ THE FILE IS WRITTEN AFTER EVERY ROW, AND THERE IS A WAIT BETWEEN SEARCHES. Commons starts refusing after about twenty quick asks, and a refusal answers null exactly like an empty shelf, so going slowly is what keeps a miss meaning a miss; writing as it goes keeps the rows already found when a run is stopped.");
  let path = data_folder() + "/bible_record_pictures/" + chapter + ".json";
  let rows = await file_read_json(path);
  let lines = [];
  for (let row of rows) {
    if (equal(row.title, undefined)) {
      let found = await commons_pictures_search(row.query, 20);
      let chosen = commons_pictures_best(found, row.query);
      if (equal(chosen, null)) {
        row.title = null;
      } else {
        row.title = chosen.title;
        row.artist = chosen.artist;
        row.licence = chosen.licence;
        row.width = chosen.width;
        row.height = chosen.height;
        row.page = chosen.page;
      }
      await file_overwrite_json(path, rows);
      await sleep_seconds(5);
    }
    lines.push(
      row.ref + "  " + row.width + "x" + row.height + "  " + row.title,
    );
  }
  return lines;
}
