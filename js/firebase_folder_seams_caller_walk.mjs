import { equal } from "./equal.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_list_calls_named } from "./js_list_calls_named.mjs";
import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_node_name_text_try } from "./js_node_name_text_try.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { json_to } from "./json_to.mjs";
import { list_add } from "./list_add.mjs";
export async function firebase_folder_seams_caller_walk(
  callers,
  builder,
  index,
  known,
  seams,
) {
  for (let caller of callers) {
    let itself = equal(caller, builder);
    if (itself) {
      continue;
    }
    let tree = await function_ast(caller);
    let calls = js_list_calls_named(tree, builder);
    let params = js_flo_params_get(tree);
    let params_names = list_map_property(params, "name");
    for (let call of calls) {
      let args = property_get(call, "args");
      let folder = list_get_or_null(args, index);
      let unwritten = null_is(folder);
      if (unwritten) {
        continue;
      }
      let passed_on = js_node_name_text_try(folder);
      ("Asked whether the word is one of this function's own parameters before asking where it sits, because the reader that answers where refuses a word that is not there at all. Almost nothing reaching these slots is a parameter, so the ordinary case would be the refusing one.");
      let own = list_includes(params_names, passed_on);
      if (not(own)) {
        continue;
      }
      let position = list_index_of(params_names, passed_on);
      let found = {
        builder: caller,
        index: position,
      };
      let word = json_to(found);
      let already = list_includes(known, word);
      if (already) {
        continue;
      }
      list_add(known, word);
      list_add(seams, found);
    }
  }
}
