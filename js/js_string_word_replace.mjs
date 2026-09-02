import { arguments_assert } from "./arguments_assert.mjs";
import { js_literals_used } from "./js_literals_used.mjs";
import { equal } from "./equal.mjs";
import { js_literal_text_is } from "./js_literal_text_is.mjs";
import { not } from "./not.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { text_quote_double } from "./text_quote_double.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export function js_string_word_replace(ast, word_before, word_after) {
  arguments_assert(arguments, 3);
  ("Swaps one underscore-separated word for another inside every written-out string in a file, leaving the rest of each string exactly as it was.");
  ("The word is matched WHOLE, between underscores, so renaming household to family reaches household_first as well and leaves an English sentence about a household alone. That is the whole reason this is not a search for a run of letters: the same eight letters are a rung word in one place and a word in a paragraph in another, and only one of them is a name.");
  ("Explanations are not offered to it at all, because the walk asks for the values a function WRITES rather than for every string in the file. Prose is where the English word lives, and prose is exactly what must not move.");
  ("Both the value and the text it was written as are set. The unparser prints the written text whenever a node has one, so setting only the value is a change that reports success and leaves the file byte-identical.");
  let literals = js_literals_used(ast);
  let changed = false;
  function word_swap(word) {
    let match = equal(word, word_before);
    if (match) {
      return word_after;
    }
    return word;
  }
  function literal_replace(node) {
    let text = js_literal_text_is(node);
    if (not(text)) {
      return;
    }
    let value = js_literal_value_get(node);
    let words = text_split(value, "_");
    let held = list_includes(words, word_before);
    if (not(held)) {
      return;
    }
    let words_after = list_map(words, word_swap);
    let value_after = list_join_underscore(words_after);
    let written = text_quote_double(value_after);
    property_set(node, "value", value_after);
    property_set(node, "raw", written);
    changed = true;
  }
  each(literals, literal_replace);
  return changed;
}
