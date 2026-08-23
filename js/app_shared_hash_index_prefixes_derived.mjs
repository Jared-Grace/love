import { fn_name } from "./fn_name.mjs";
import { names_first_word_groups } from "./names_first_word_groups.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_hash_index_prefixes_derived(names) {
  "the #index folders the NAMES already say, in place of an app typing them out again in a list of its own: a route called day_hours is asking to sit under day, and every name that carries its own folder is one nobody has to remember to file";
  "no app is named here on purpose - not even in the prose. Shared code that reaches one app's name hands that app to every other app importing it, so the two callers are described by what they are rather than pointed at: a game's dev routes and a sandbox's previews both arrive as a plain list of hash names.";
  ("the grouping itself belongs to nobody (",
    fn_name("names_first_word_groups"),
    ") - it is a question about names, not about this game - and two is the number that makes a folder, because one route under a heading of its own first word is a heading saying nothing and a tap to open it. that is also what stops gospel_share inventing a lonely `gospel` for itself");
  ("all this adds is the SPELLING: the ': ' the index nests by. how a heading is written is the index's business, which is why the counting is not told about it");
  ("the DEFAULT, not the whole answer. names that do not carry their own path still need one given - a conversation about believing is not called conversation_anything - so an app that has such names keeps a typed list of its own and lays it over the top of this one. an app whose names all file themselves needs no list at all and can hand this answer straight on");
  let minimum = 2;
  let groups = names_first_word_groups(names, minimum);
  let prefixes = {};
  for (let name of object_property_names(groups)) {
    let first = property_get(groups, name);
    let path = text_combine(first, ": ");
    property_set(prefixes, name, path);
  }
  return prefixes;
}
