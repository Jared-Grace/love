import { object_property_names } from "./object_property_names.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_interlinear_parsing_parts } from "./bible_interlinear_parsing_parts.mjs";
export async function bible_interlinear_parsing_parts_main_survey(
  testament_name,
  affix_pattern,
) {
  arguments_assert(arguments, 2);
  ("$plain testament_name");
  ("the name is a testament's own name. It is data to read and it does not run.");
  ("$plain affix_pattern");
  ("the pattern is a regular expression source naming the parts that are joined letters rather than the word itself. It is only matched against parsing codes and never runs as code.");
  ("How many written words have no part, one part, or several parts left once the joined letters are set aside, with the commonest parsings of each count that is not one.");
  ("A word carries ONE Strong's number, so exactly one of its parts should be the word that number names. This asks whether a proposed list of joined letters leaves exactly one behind, and shows the words where it does not.");
  let affix = new RegExp(affix_pattern);
  let chapters = await bible_interlinear_chapters_words_cache();
  let counts = {};
  for (let chapter_code of object_property_names(chapters)) {
    let left = bible_chapter_testament_name(chapter_code);
    if (not_equal(left, testament_name)) {
      continue;
    }
    for (let verse of chapters[chapter_code]) {
      for (let word of verse.words) {
        let parts = bible_interlinear_parsing_parts(word.parsing);
        function lambda(part) {
          let b2 = affix.test(part);
          let n = not(b2);
          return n;
        }
        let main = parts.filter(lambda);
        let key = String(main.length);
        counts[key] ??= {
          count: 0,
          shapes: {},
        };
        counts[key].count++;
        if (not_equal(main.length, 1)) {
          counts[key].shapes[word.parsing] ??= {
            count: 0,
            strong: word.strong,
            gloss: word.gloss,
            original: word.original,
            chapter_code,
          };
          counts[key].shapes[word.parsing].count++;
        }
      }
    }
  }
  for (let key of object_property_names(counts)) {
    function lambda2(a, b) {
      let difference = subtract(b[1].count, a[1].count);
      return difference;
    }
    let shapes = Object.entries(counts[key].shapes).sort(lambda2).slice(0, 30);
    counts[key].shapes = Object.fromEntries(shapes);
  }
  return counts;
}
