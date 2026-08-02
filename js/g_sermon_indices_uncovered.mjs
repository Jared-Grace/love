import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { not } from "./not.mjs";
import { g_sermon_write } from "./g_sermon_write.mjs";
import { g_sermon_passage_words } from "./g_sermon_passage_words.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
export async function g_sermon_indices_uncovered(chapter_code) {
  "$plain chapter_code";
  ("a token the g_verify page draws with a dashed warning underline is one no line claims",
    "so this reports, per passage, every token position no line's indices cover",
    "and it words the passage the same way the page does, so the two cannot disagree");
  let write_path = local_function_path_json(chapter_code, g_sermon_write);
  let write_chapter = await file_read_json(write_path);
  let passages = property_get(write_chapter, "passages");
  let reports = [];
  function passage_check(passage) {
    if (not("lines" in passage)) {
      return;
    }
    let english = property_get(passage, "english");
    let tokens = g_sermon_passage_words(english);
    let covered = {};
    let out_of_range = [];
    function line_check(line) {
      function index_check(index) {
        covered[index] = true;
        let b = less_than(index, tokens.length);
        if (not(b)) {
          out_of_range.push(index);
        }
      }
      property_get(line, "indices").forEach(index_check);
    }
    property_get(passage, "lines").forEach(line_check);
    let uncovered = [];
    function token_check(token, index) {
      if (not(covered[index])) {
        uncovered.push({
          index,
          word: token,
        });
      }
    }
    tokens.forEach(token_check);
    let b2 = equal(uncovered.length + out_of_range.length, 0);
    if (not(b2)) {
      let key = g_sermon_passage_verses_key(passage);
      reports.push({
        key,
        uncovered,
        out_of_range,
      });
    }
  }
  passages.forEach(passage_check);
  return reports;
}
