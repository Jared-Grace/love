import { app_code_hash_fields } from "./app_code_hash_fields.mjs";
import { app_supper_hash_fields } from "./app_supper_hash_fields.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { app_shared_bible_hash_fields } from "./app_shared_bible_hash_fields.mjs";
export function hash_fields_all() {
  "Every part of a page address the repo knows how to check before anything is fetched, gathered from wherever the fields are described.";
  "Here rather than at the checking, because the question this answers is not what one page checks but what any page could - which words a reader could be helped with at all. A word no field here describes cannot be caught by anybody, however carefully the page asks.";
  "A list written down, like the list of gates is, and for the same reason: a set of fields belongs to the surfaces that share it, and there is nothing in the shape of a field that says which set it is in. Adding a set here is the whole of making it count.";
  let bible = app_shared_bible_hash_fields();
  let supper = app_supper_hash_fields();
  let code = app_code_hash_fields();
  let sets = [bible, supper, code];
  let fields = lists_combine(sets);
  return fields;
}
