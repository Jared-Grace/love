import { equal } from "./equal.mjs";
import { g_sermon_generate_chapter_passages_get } from "./g_sermon_generate_chapter_passages_get.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { g_sermon_write_publish } from "./g_sermon_write_publish.mjs";
import { property_get } from "./property_get.mjs";
export async function g_sermon_write_lines(chapter_code, key, lines) {
  "A per-verse save in one call: look up the passage by its verses-key, take its verse numbers and source English from the generate data, then write, upload and clear. A save script supplies only the one thing it authors - the lines.";
  let passages = await g_sermon_generate_chapter_passages_get(chapter_code);
  function lambda(p) {
    let left = g_sermon_passage_verses_key(p);
    let eq = equal(left, key);
    return eq;
  }
  let passage = passages.find(lambda);
  let verse_numbers = property_get(passage, "verse_numbers");
  let scripture = property_get(passage, "text");
  let r = await g_sermon_write_publish(
    chapter_code,
    verse_numbers,
    scripture,
    lines,
  );
  return r;
}
