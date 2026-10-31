import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { bible_glyph_chapter_literal } from "./bible_glyph_chapter_literal.mjs";
export async function bible_glyph_testament_literal_gaps(testament_name) {
  arguments_assert(arguments, 1);
  ("$plain testament_name");
  ("the testament names which half of the Bible to draw and which root table to draw it with. It is data and nothing runs.");
  ("Every word of one testament that the word-for-word drawing still leaves in letters, each with its chapter, its verse, its place in the verse, and the interlinear word it was drawn from.");
  ("WHERE, NOT HOW MANY, because the coverage count says a gap exists but a gap left as an empty string cannot be searched for by its text, so the only way to reach it is by its address.");
  let chapters_words = await bible_interlinear_chapters_words_cache();
  let chapter_codes = object_property_names(chapters_words);
  function lambda(chapter_code) {
    let name = bible_chapter_testament_name(chapter_code);
    let match = equal(name, testament_name);
    return match;
  }
  let of_testament = list_filter(chapter_codes, lambda);
  let gaps = [];
  for (let chapter_code of of_testament) {
    let chapter = await bible_glyph_chapter_literal(
      chapter_code,
      testament_name,
    );
    let verse_index = 0;
    for (let verse of chapter.verses) {
      let source = chapters_words[chapter_code][verse_index];
      verse_index = verse_index + 1;
      let word_index = 0;
      for (let word of verse.words) {
        word_index = word_index + 1;
        if (word.startsWith("$")) {
          continue;
        }
        gaps.push({
          chapter_code,
          verse_number: verse.verse_number,
          word_index,
          text: word,
          source: source.words,
        });
      }
    }
  }
  return gaps;
}
