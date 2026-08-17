import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_text_includes } from "./property_text_includes.mjs";
import { not } from "./not.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_marker_call_words } from "./js_marker_call_words.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
export async function literals_marked_both_ways_word(r, conflicts) {
  arguments_assert(arguments, 2);
  let frozen_sites = property_get(r, "frozen_sites");
  let reference_prefix = property_get(r, "reference_prefix");
  let reference_marker = property_get(r, "reference_marker");
  let entries = property_get(r, "entries");
  let words_frozen = property_get(r, "words_frozen");
  for (let word of words_frozen) {
    let needle = text_combine_multiple([reference_prefix, word, '")']);
    let referenced_in = [];
    for (let entry of entries) {
      let candidate = property_get(entry, "name");
      let mentions = property_text_includes(entry, "code", needle);
      if (not(mentions)) {
        continue;
      }
      let tree = await function_ast(candidate);
      let words_referenced = js_marker_call_words(tree, reference_marker);
      let refers = list_includes(words_referenced, word);
      if (not(refers)) {
        continue;
      }
      list_add(referenced_in, candidate);
    }
    let clean = list_empty_is(referenced_in);
    if (clean) {
      continue;
    }
    let same_word = list_filter_property(frozen_sites, "word", word);
    let frozen_in = list_map_property_unique(same_word, "f_name");
    let conflict = {
      word,
      frozen_in,
      referenced_in,
    };
    list_add(conflicts, conflict);
  }
}
