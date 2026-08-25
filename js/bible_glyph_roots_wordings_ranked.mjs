import { arguments_assert } from "./arguments_assert.mjs";
import { text_words_content } from "./text_words_content.mjs";
import { list_unique } from "./list_unique.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { bible_glyph_roots_wording_count } from "./bible_glyph_roots_wording_count.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function bible_glyph_roots_wordings_ranked(wordings) {
  "$plain wordings";
  "The single words carrying a meaning of their own across every English wording one original word is given, each credited with the places of every wording it appears in, commonest first.";
  "THE WORDINGS ARE NOT COUNTED WHOLE, AND COUNTING THEM WHOLE WAS TRIED AND WAS WRONG. The interlinear glosses one word for seeing as see, as you see, and as See to it, so its commonest wording covers six places in a hundred and thirty one and the seat reads as the worst in the table when it is one of the plainest. Those are one word in three sets of clothes. So each wording is cut down to the words that carry a meaning of their own and every one of them is credited with that wording's count, which puts see back together at a hundred and eighteen and leaves a word that really is split still split.";
  "A WORD SAID TWICE IN ONE WORDING IS CREDITED ONCE, because the count belongs to the wording and not to the letters in it, and a wording that happened to repeat itself would otherwise outweigh the same word said plainly.";
  arguments_assert(arguments, 1);
  let tally = {};
  for (let wording of wordings) {
    let content = text_words_content(wording.value);
    let said_once = list_unique(content);
    for (let said of said_once) {
      let before = property_get_or_null(tally, said);
      let fresh = null_is(before);
      if (fresh) {
        before = 0;
      }
      let after = add(before, wording.count);
      property_set(tally, said, after);
    }
  }
  let words = [];
  for (let said of object_property_names(tally)) {
    let count = property_get(tally, said);
    let counted_word = {
      value: said,
      count,
    };
    list_add(words, counted_word);
  }
  let ranked_words = list_sort_number_mapper_reverse(
    words,
    bible_glyph_roots_wording_count,
  );
  return ranked_words;
}
