import { fn_name } from "./fn_name.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { app_shared_prefixes_invalid } from "./app_shared_prefixes_invalid.mjs";
import { app_shared_screen_name_prefix } from "./app_shared_screen_name_prefix.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_name_prefix } from "./app_shared_name_prefix.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_rename } from "./function_rename.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_prefixes_invalid_repair() {
  "Moves every function squatting an app_<part>_ prefix under app_shared_, in exactly the functions the gate names";
  ("Each rename is committed the moment it lands, so a peer's sweep cannot file it under a bare word, and each entry is a real ",
    fn_name("function_rename"),
    " that can be run again by itself");
  ("Asking the gate's question again afterwards is the only honest way to say it worked");
  await ai_git_noted();
  let groups = await app_shared_prefixes_invalid();
  let renamed = [];
  let shared = app_shared_screen_name_prefix("shared");
  for (let g of groups) {
    let functions = property_get(g, "functions");
    for (let f_name_before of functions) {
      let rest = app_shared_name_prefix_without(f_name_before);
      let p = app_shared_name_prefix();
      let separator = function_name_separator();
      let f_name_after = text_combine_multiple([p, separator, shared, rest]);
      await function_call_commit(function_rename, [
        f_name_before,
        f_name_after,
      ]);
      list_add(renamed, f_name_after);
    }
  }
  let remaining = await app_shared_prefixes_invalid();
  let r = {
    renamed,
    remaining,
  };
  return r;
}
