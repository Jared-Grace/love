import { app_code_hash_fields } from "./app_code_hash_fields.mjs";
import { app_shared_bible_hash_field_verse } from "./app_shared_bible_hash_field_verse.mjs";
import { app_supper_hash_fields } from "./app_supper_hash_fields.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { app_shared_bible_hash_fields } from "./app_shared_bible_hash_fields.mjs";
export function hash_fields_all() {
  "Every part of a page address the repo knows how to check, gathered from wherever the fields are described.";
  "Here rather than at the checking, because the question this answers is not what one page checks but what any page could - which words a reader could be helped with at all. A word no field here describes cannot be caught by anybody, however carefully the page asks.";
  "A list written down, like the list of gates is, and for the same reason: a set of fields belongs to the surfaces that share it, and there is nothing in the shape of a field that says which set it is in. Adding a set here is the whole of making it count.";
  "The verse field is built here with no verses in hand, and that is honest rather than a shortcut: what is wanted from it here is the word it answers for, and the verses of some particular chapter would say nothing about that. It is the pages that build it for real, each around the chapter it just fetched. Nothing checks a link against what is gathered here - the pages check against their own sets - so a description standing here for its name alone cannot reach a reader.";
  let bible = app_shared_bible_hash_fields();
  let supper = app_supper_hash_fields();
  let code = app_code_hash_fields();
  let verse = app_shared_bible_hash_field_verse([]);
  let sets = [bible, supper, code, [verse]];
  let fields = lists_combine(sets);
  return fields;
}
