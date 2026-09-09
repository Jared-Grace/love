import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { property_set } from "./property_set.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
export function app_ceb_bible_gloss_root_omitted_wordings_word_read(
  by_word,
  rows,
) {
  arguments_assert(arguments, 2);
  function word_read(word) {
    let held = property_get(by_word, word);
    let rooted_wordings = property_get(held, "rooted_wordings");
    let bare_wordings = property_get(held, "bare_wordings");
    let rooted_ways = list_size(rooted_wordings);
    property_set(held, "rooted_ways", rooted_ways);
    let bare_ways = list_size(bare_wordings);
    property_set(held, "bare_ways", bare_ways);
    let rooted_any = greater_than_equal(rooted_ways, 1);
    let rooted_shown = rooted_any ? list_get(rooted_wordings, 0) : "";
    let bare_any = greater_than_equal(bare_ways, 1);
    let bare_shown = bare_any ? list_get(bare_wordings, 0) : "";
    property_set(held, "rooted_shown", rooted_shown);
    property_set(held, "bare_shown", bare_shown);
    property_set(held, "rooted_wordings", []);
    property_set(held, "bare_wordings", []);
    list_add(rows, held);
  }
  return word_read;
}
