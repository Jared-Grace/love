import { property_get } from "./property_get.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_find } from "./list_find.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { g_sermon_generate_chapter_passages_get } from "./g_sermon_generate_chapter_passages_get.mjs";
import { g_sermon_write } from "./g_sermon_write.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { g_sermon_coverage } from "./g_sermon_coverage.mjs";
export async function g_sermon_write_coverage(chapter_code, verse_numbers) {
  let key = list_join_comma(verse_numbers);
  function matches(passage) {
    return g_sermon_passage_verses_key(passage) === key;
  }
  let generated_passages =
    await g_sermon_generate_chapter_passages_get(chapter_code);
  let verse_passage = list_find(generated_passages, matches);
  let verse_text = property_get(verse_passage, "text");
  let write_path = local_function_path_json(chapter_code, g_sermon_write);
  let write_chapter = await file_read_json(write_path);
  let write_passages = property_get(write_chapter, "passages");
  let write_passage = list_find(write_passages, matches);
  let lines = property_get(write_passage, "lines");
  return g_sermon_coverage(verse_text, lines);
}
