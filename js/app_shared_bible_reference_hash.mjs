import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_reference_hash_key } from "./app_shared_bible_reference_hash_key.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_bible_reference_hash(reference) {
  "$plain reference";
  "The words after the hash that make the bible reader open at the passage a written reference names - one place, so a page that opens the reader and a page that links to it cannot come to spell it differently.";
  "The spaces become plusses because everything after the hash is one word to a browser, and a space in it is not carried the same way by everything that might pass the address on.";
  arguments_assert(arguments, 1);
  let key = app_shared_bible_reference_hash_key();
  let spelled = text_replace_space_to(reference, "+");
  let hash = {};
  property_set(hash, key, spelled);
  return hash;
}
