import { js_list_calls_named } from "./js_list_calls_named.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function js_marker_call_words(ast, marker_name) {
  "Every word written as the argument of one marker call in a tree, read off the tree rather than off the text.";
  "A marker says what a word is - that it is a reference to a function, or that it only looks like one - and both markers are ordinary calls holding a written word. Searching the text for one would count a mention inside a docstring or inside a longer string that happens to contain the marker's spelling; a tree only offers a call where a call really stands.";
  "One reader serves both markers because they differ in nothing but the name called, and the whole reason to ask about either is to compare the two answers.";
  "A call whose argument is not a written word is passed over rather than refused. This is a reading, and a reading that threw on a shape it did not expect would stop the whole sweep on one file.";
  let nodes = js_list_calls_named(ast, marker_name);
  let words = [];
  for (let node of nodes) {
    let args = property_get(node, "args");
    let first = list_first(args);
    let literal = js_literal_is(first);
    if (not(literal)) {
      continue;
    }
    let word = js_literal_value_get(first);
    list_add(words, word);
  }
  return words;
}
