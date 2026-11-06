import { arguments_assert } from "./arguments_assert.mjs";
import { function_dependencies } from "./function_dependencies.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { file_read } from "./file_read.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_join } from "./list_join.mjs";
import { text_hash } from "./text_hash.mjs";
export async function functions_closure_source_hash(f_names) {
  arguments_assert(arguments, 1);
  ("One short word standing for the source of these functions and of every function they reach through their imports, so an answer worked out by them can be kept and handed back for as long as none of that source has changed.");
  ("The names are sorted before joining, so the word depends on what the code says and never on the order the walk happened to visit it in. Each source is joined after its own name, so moving a body from one function to another changes the word too.");
  ("A function reached only by asking for it by name while running, rather than by an import, is not followed - the walk sees imports and nothing else. Whatever such a function does is outside the word, so an answer kept under it is only as good as that part staying the same.");
  let reached = await function_dependencies(f_names);
  let names = list_sort_text(reached);
  async function source_named(name) {
    let path = function_name_to_path_absolute(name);
    let source = await file_read(path);
    let named = name + "\n" + source;
    return named;
  }
  let sources = await list_map_async(names, source_named);
  let joined = list_join(sources, "\n");
  let hash = text_hash(joined);
  return hash;
}
