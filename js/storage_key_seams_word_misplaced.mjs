import { arguments_assert } from "./arguments_assert.mjs";
import { storage_key_seams_durable } from "./storage_key_seams_durable.mjs";
import { storage_key_seams_all } from "./storage_key_seams_all.mjs";
import { list_includes } from "./list_includes.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_storage_key_word_forwarded_name_try } from "./js_storage_key_word_forwarded_name_try.mjs";
import { null_is } from "./null_is.mjs";
import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function storage_key_seams_word_misplaced() {
  "The front doors where the key word is not the second thing the door is given, so the reading looks at the wrong argument and never sees the word. Read-only.";
  "Every reading of published keys asks each call for its second argument, because that is where the storing itself takes the key. A door is read at its callers the same way, and nothing has ever checked that the door takes its key there too - so a door that takes it third has its callers read at whatever stands second, and the word somebody typed is collected from nowhere and watched by nothing.";
  "A door that hands on a word it worked out itself is named here as well. There is no key slot at its callers at all, so the second thing they are given is some other argument entirely, and reading it can only be wrong - quietly finding nothing, or quietly finding a word that was never a key.";
  arguments_assert(arguments, 0);
  let durable = storage_key_seams_durable();
  let all = await storage_key_seams_all();
  let misplaced = [];
  for (let seam of all) {
    let storing = list_includes(durable, seam);
    if (storing) {
      continue;
    }
    let tree = await function_ast(seam);
    let variable = js_storage_key_word_forwarded_name_try(tree, durable);
    let written_here = null_is(variable);
    if (written_here) {
      continue;
    }
    let params = js_flo_params_get(tree);
    let names = list_map_property(params, "name");
    let given = list_includes(names, variable);
    if (not(given)) {
      let worked_out = text_combine_multiple([
        seam,
        " -> ",
        variable,
        " is worked out here rather than given, so its callers have no key slot",
      ]);
      list_add(misplaced, worked_out);
      continue;
    }
    let place = list_index_of(names, variable);
    let second = equal(place, 1);
    if (second) {
      continue;
    }
    let elsewhere = text_combine_multiple([
      seam,
      " -> ",
      variable,
      " is not the second thing this door is given",
    ]);
    list_add(misplaced, elsewhere);
  }
  misplaced.sort();
  return misplaced;
}
