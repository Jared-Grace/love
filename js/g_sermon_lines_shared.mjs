import { g_sermon_stores_passages } from "./g_sermon_stores_passages.mjs";
import { g_sermon_line_words_shared } from "./g_sermon_line_words_shared.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_lines_shared() {
  "How much of the passage's own words every written sermon line is made of, one reading per line, each still saying which chapter and verses it came from.";
  "Every line already written is read rather than a sample of them, because the question this answers is what a GOOD number looks like - and the only lines known to be good are the ones already approved. A measure calibrated on invented lines would be calibrated on nothing.";
  "The verses stay attached so a line that reads oddly can be looked at, rather than only counted. A number with no way back to the line it came from can say something is wrong and never say what.";
  let passages = await g_sermon_stores_passages();
  let readings = [];
  for (let passage of passages) {
    let scripture = property_get_or(passage, "scripture", "");
    let lines = property_get_or(passage, "lines", []);
    for (let line of lines) {
      let said = property_get_or(line, "text", "");
      let shared = g_sermon_line_words_shared(scripture, said);
      object_merge(shared, {
        chapter_code: passage.chapter_code,
        verse_numbers: passage.verse_numbers,
      });
      list_add(readings, shared);
    }
  }
  return readings;
}
