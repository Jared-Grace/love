import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_duplicate_keys } from "./js_duplicate_keys.mjs";
import { list_empty_is_not } from "./list_empty_is_not.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_duplicate_keys() {
  ("Every function in this repo whose file gives one name twice inside a set of");
  ("settings. The later entry silently wins and the earlier is thrown away, so a");
  ("register can hold two things under one key and quietly keep only one — which");
  ("is how a note written for one example came to be discarded by a note written");
  ("for another.");
  ("One parse per file, the same shape as the sweep for hidden names next door.");
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let keys = js_duplicate_keys(ast);
    let any = list_empty_is_not(keys);
    if (any) {
      list_add(offenders, {
        name,
        keys,
      });
    }
  }
  return offenders;
}
