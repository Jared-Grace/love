import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_includes } from "./list_includes.mjs";
export function qa_gate_population_key_try(property, words) {
  "The name of this part of a gate's answer when the name is one of the words that promise how much was looked at, and nothing when it is not.";
  "Three separate things have to hold before a key is one of these, and none of them is a fault: a part spread in from somewhere else has no key to read, a key written as a piece of text rather than a word is not something a reader could follow, and a key nobody promised anything by is simply an ordinary part of an answer. Read together they are one question - is there a promising word here - and asking it in one place keeps the three ways of answering no from reading like three findings.";
  arguments_assert(arguments, 2);
  let plain_is = js_node_type_is(property, "Property");
  if (not(plain_is)) {
    return null;
  }
  let key_node = property_get(property, "key");
  let key = js_identifier_name_try(key_node);
  let key_named_is = null_not_is(key);
  if (not(key_named_is)) {
    return null;
  }
  let promised_is = list_includes(words, key);
  if (not(promised_is)) {
    return null;
  }
  return key;
}
