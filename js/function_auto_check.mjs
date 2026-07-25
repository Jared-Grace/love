import { error } from "./error.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
import { property_get } from "./property_get.mjs";
import { js_auto } from "./js_auto.mjs";
export async function function_auto_check(f_name) {
  "Ask whether the normalize pipeline can process a function, and answer without touching the file. The pipeline itself only ever rewrites the tree it was handed and an index held in memory; the single step that reaches the disk is the unparse that writes the file back, and this skips it. So the question becomes askable: until now the only way to learn whether the pipeline could handle a file was to run it for real and let it rewrite the file, which also strips any slash comments the file still carries - the measurement destroyed part of what it measured.";
  "A refusal is reported rather than thrown, because the caller sweeping a list wants the whole list, not the first failure. The message is carried out with it: a name alone says something is wrong, and the message says which step gave up, which is the difference between a list to fix and a list to stare at.";
  let unaliased = await function_name_unalias_only(f_name);
  let parsed = await function_parse_unaliased(unaliased);
  let ast = property_get(parsed, "ast");
  let ok = true;
  let error = "";
  try {
    await js_auto(ast);
  } catch (e) {
    ok = false;
    error = e.message;
  }
  let r = {
    name: unaliased,
    ok,
    error,
  };
  return r;
}
