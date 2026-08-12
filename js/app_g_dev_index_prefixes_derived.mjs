import { fn_name } from "./fn_name.mjs";
import { text_split } from "./text_split.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_first } from "./list_first.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
export function app_g_dev_index_prefixes_derived(names) {
  ("the #index folders the route NAMES already say, read off the names instead of typed out again in ",
    fn_name("app_g_dev_index_prefixes"),
    ": a route called day_hours is asking to sit under day, and every one of them that names its own folder is one nobody has to remember to file");
  ("A FOLDER NEEDS TWO. one route alone under a heading is a heading that says nothing the route did not already say, and it costs a tap to open. so a first word is only a folder once two names share it - which is also what stops gospel_share inventing a lonely `gospel` for itself");
  ("a name with no separator at all proposes nothing and is counted toward nothing. it is a leaf, and asking it for a first word would answer with the whole name");
  ("this is the DEFAULT, not the whole answer: names that do not carry their own path still need one given (a conversation about believing is not called conversation_anything), so the typed list stays as the override and ",
    fn_name("app_g_dev_index_prefixes_all"),
    " lays it over the top");
  let counts = {};
  let firsts = {};
  for (let name of names) {
    let words = text_split(name, "_");
    let more = greater_than(words.length, 1);
    if (not(more)) {
      continue;
    }
    let first = list_first(words);
    property_set(firsts, name, first);
    let counted = 0;
    let seen = property_exists(counts, first);
    if (seen) {
      counted = property_get(counts, first);
    }
    property_set(counts, first, add(counted, 1));
  }
  let prefixes = {};
  for (let name of object_property_names(firsts)) {
    let first = property_get(firsts, name);
    let count = property_get(counts, first);
    let folder = greater_than_equal(count, 2);
    if (not(folder)) {
      continue;
    }
    let path = text_combine(first, ": ");
    property_set(prefixes, name, path);
  }
  return prefixes;
}
