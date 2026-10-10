import { greater_than } from "./greater_than.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_keys_unproven } from "./js_keys_unproven.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_keys_unproven() {
  "every love function that reaches a record by brackets with a key its own code does not prove safe, and those keys, written as code. The list a ratchet holds, so new code proves its keys and the old list can only shrink.";
  let love = await repo_love_functions_names();
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let keys = js_keys_unproven(ast);
    if (greater_than(keys.length, 0)) {
      list_add(offenders, {
        name,
        keys,
      });
    }
  }
  return offenders;
}
