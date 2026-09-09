import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
export function gloss_store_urdu_is(fn) {
  "Whether this gloss store's explanations are written in Urdu.";
  "Asked in one place because more than one reader has to know it. An explanation is recognised in the language it is written in, so every reader that judges a wording by its words needs the same question answered first, and each of them writing out its own answer would let the answers disagree.";
  "The store is compared by the name of the function that writes it, because that is the one thing about a store that cannot be spelt wrong - a name that does not exist is a name nothing exports.";
  let store = property_get(fn, "name");
  let urdu = fn_name("app_en_learn_bible_gloss_urdu_generate");
  let matched = equal(store, urdu);
  return matched;
}
