import { arguments_assert } from "./arguments_assert.mjs";
import { functions_imports_sources_reached } from "./functions_imports_sources_reached.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_join } from "./list_join.mjs";
import { text_hash } from "./text_hash.mjs";
export async function functions_closure_source_hash(f_names) {
  arguments_assert(arguments, 1);
  ("One short word standing for the source of these functions and of every function they reach through their imports, so an answer worked out by them can be kept and handed back for as long as none of that source has changed.");
  ("The names are sorted before joining, so the word depends on what the code says and never on the order the walk happened to visit it in. Each source is joined after its own name, so moving a body from one function to another changes the word too.");
  ("A function reached only by asking for it by name while running, rather than by an import, is not followed - the walk sees imports and nothing else. Whatever such a function does is outside the word, so an answer kept under it is only as good as that part staying the same.");
  let reached = await functions_imports_sources_reached(f_names);
  let list = properties_get(reached);
  let names = list_sort_text(list);
  function source_named(name) {
    let named = name + "\n" + property_get(reached, name);
    return named;
  }
  let sources = list_map(names, source_named);
  let joined = list_join(sources, "\n");
  let hash = text_hash(joined);
  return hash;
}
