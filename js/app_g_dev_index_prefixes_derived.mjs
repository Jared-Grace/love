import { fn_name } from "./fn_name.mjs";
import { names_first_word_groups } from "./names_first_word_groups.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_dev_index_prefixes_derived(names) {
  ("the #index folders the route NAMES already say, in place of typing them out again in ",
    fn_name("app_g_dev_index_prefixes"),
    ": a route called day_hours is asking to sit under day, and every route that names its own folder is one nobody has to remember to file");
  ("the grouping itself belongs to nobody (",
    fn_name("names_first_word_groups"),
    ") - it is a question about names, not about this game - and two is the number that makes a folder, because one route under a heading of its own first word is a heading saying nothing and a tap to open it. that is also what stops gospel_share inventing a lonely `gospel` for itself");
  ("all this adds is the SPELLING: the ': ' the index nests by. how a heading is written is the index's business, which is why the counting is not told about it");
  ("the DEFAULT, not the whole answer. names that do not carry their own path still need one given - a conversation about believing is not called conversation_anything - so the typed list stays as the override, and ",
    fn_name("app_g_dev_index_prefixes_all"),
    " lays it over the top");
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
