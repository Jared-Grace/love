import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_take } from "./list_take.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
export function app_ceb_bible_gloss_new_testament_prep_counted(
  placed,
  words,
  absent,
) {
  arguments_assert(arguments, 3);
  ("The four places a word can stand, counted, with a sample of the ones still owed a lookup.");
  ("Counting is separated from placing because the two cost nothing alike. Placing a word may have to ask a website and wait; counting what came back is arithmetic over a list already in hand, and reading it should not mean reading past the asking.");
  let named = list_filter_property(placed, "place", "named");
  let asked = list_filter_property(placed, "place", "asked");
  let printed = list_filter_property(placed, "place", "printed");
  let owed = list_filter_property(placed, "place", "owed");
  function word_read(item) {
    let word = property_get(item, "word");
    return word;
  }
  let sample = list_take(owed, 40);
  let owed_words = list_map(sample, word_read);
  let held = list_size(asked);
  let asking = list_size_subtract(words, held);
  let r = {
    chapters: property_get(absent, "absent"),
    words: list_size(words),
    named: list_size(named),
    asked: held,
    printed: list_size(printed),
    owed: list_size(owed),
    asking,
    owed_words,
  };
  return r;
}
