import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { properties_get } from "./properties_get.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export async function bible_interlinear_parsing_parts_counts(testament_name) {
  arguments_assert(arguments, 1);
  ("$plain testament_name");
  ("the name is a testament's own name. It is data to read and it does not run.");
  ("How often each part of a parsing occurs across one testament of the interlinear, commonest first, with the English of one word it was seen in.");
  ("A PARSING IS SEVERAL PARTS WHEN ONE WRITTEN WORD IS SEVERAL WORDS. A Hebrew word carrying a joined and, in or the is parsed as its parts with a bar between them - Conj-w | N-ms is and plus a noun - while the word carries only one Strong's number, the noun's. So the parts are the only place those small words are named, and this is how many of each there are to draw.");
  let chapters = await bible_interlinear_chapters_words_cache();
  let counts = {};
  for (let chapter_code of properties_get(chapters)) {
    let testament = bible_chapter_testament_name(chapter_code);
    let b = equal(testament, testament_name);
    if (not(b)) {
      continue;
    }
    for (let verse of property_get(chapters, chapter_code)) {
      for (let word of verse.words) {
        let parts = text_split(word.parsing, "|");
        for (let part of parts) {
          let code = text_trim(part);
          if (not(code in counts)) {
            counts[code] = {
              code,
              count: 0,
              example: word.gloss,
            };
          }
          counts[code].count = counts[code].count + 1;
        }
      }
    }
  }
  let list = Object.values(counts);
  function count_negative(item) {
    let r = -item.count;
    return r;
  }
  list_sort_number_mapper(list, count_negative);
  return list;
}
