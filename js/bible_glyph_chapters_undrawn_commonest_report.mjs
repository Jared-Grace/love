import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapters_undrawn_wording_commonest } from "./bible_glyph_chapters_undrawn_wording_commonest.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_take } from "./list_take.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { divide_round } from "./divide_round.mjs";
export function bible_glyph_chapters_undrawn_commonest_report(
  occurrences,
  glosses,
  ranked,
  strongs,
  testaments,
  originals,
  chapters_seen,
  count,
  words_total,
  filler_total,
  drawn_total,
  chapters,
) {
  arguments_assert(arguments, 12);
  for (let key of object_property_names(occurrences)) {
    let wordings = property_get(glosses, key);
    let gloss = bible_glyph_chapters_undrawn_wording_commonest(wordings);
    list_add(ranked, {
      strong: property_get(strongs, key),
      testament: property_get(testaments, key),
      original: property_get(originals, key),
      gloss,
      wordings: object_property_names(wordings).length,
      occurrences: property_get(occurrences, key),
      chapters: property_get(chapters_seen, key),
    });
  }
  function lambda(row) {
    let n = property_get(row, "occurrences");
    return n;
  }
  list_sort_number_mapper_reverse(ranked, lambda);
  let many = Number(count);
  let commonest = list_take(ranked, many);
  let words_real = subtract(words_total, filler_total);
  let number = multiply(drawn_total, 100);
  let share = divide_round(number, words_total);
  let number2 = multiply(drawn_total, 100);
  let share_of_words = divide_round(number2, words_real);
  let report = {
    chapters: chapters.length,
    words: words_total,
    filler: filler_total,
    words_real,
    drawn: drawn_total,
    share,
    share_of_words,
    undrawn_words_distinct: ranked.length,
    commonest,
  };
  return report;
}
