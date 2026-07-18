import { g_sermon_generate_chapter_passages_get } from "./g_sermon_generate_chapter_passages_get.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { g_sermon_write_publish } from "./g_sermon_write_publish.mjs";
import { property_get } from "./property_get.mjs";
// A per-verse save in one call: look up the passage by its verses-key, take its
// verse_numbers + source English from the generate data, then write+upload+clear.
// A save script now supplies only the one thing it authors — the lines.
export async function g_sermon_write_lines(chapter_code, key, lines) {
  let passages = await g_sermon_generate_chapter_passages_get(chapter_code);
  let passage = passages.find(function (p) {
    return g_sermon_passage_verses_key(p) === key;
  });
  let verse_numbers = property_get(passage, "verse_numbers");
  let english = property_get(passage, "text");
  return g_sermon_write_publish(chapter_code, verse_numbers, english, lines);
}
