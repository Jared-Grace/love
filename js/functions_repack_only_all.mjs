import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_size } from "./list_size.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_repack_only_is } from "./js_repack_only_is.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function functions_repack_only_all() {
  "Every function in this repo whose whole product is a record it took apart and put back together, and how many functions were read to find them. Read-only.";
  "The count of what was walked travels out with the answer because the answer is empty on a clean run, and an empty answer is what a reading that has quietly stopped reaching anything says too. The two are told apart by the number beside them and by nothing else.";
  "Every tree in the repo is opened, with no cheap test on the text first. The siblings that sweep for a written word can narrow the walk to the files that say it; this asks about a shape, and a shape has no word in it to look for.";
  arguments_assert(arguments, 0);
  let f_names = await functions_names();
  let walked = list_size(f_names);
  async function repack_only_name_try(f_name) {
    let parsed = await function_parse_declaration(f_name);
    let declaration = property_get(parsed, "declaration");
    let repack_is = js_repack_only_is(declaration);
    if (repack_is) {
      return f_name;
    }
    return null;
  }
  let answers = await list_map_unordered_async(f_names, repack_only_name_try);
  let named = list_filter(answers, null_not_is);
  named.sort();
  let r = {
    walked,
    names: named,
  };
  return r;
}
