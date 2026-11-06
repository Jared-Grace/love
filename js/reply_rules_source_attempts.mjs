import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { text_combine } from "./text_combine.mjs";
import { property_get } from "./property_get.mjs";
import { function_import_relative } from "./function_import_relative.mjs";
import { text_includes } from "./text_includes.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_add } from "./list_add.mjs";
export async function reply_rules_source_attempts(f_name, source, cases) {
  arguments_assert(arguments, 3);
  ("What the reply rules would answer to each of some messages if one of their functions were the source handed in instead of the file on disk, set beside the answer each message says it wants.");
  ("★ IT MUST BE ASKED IN A PROCESS THAT HAS NOT LOADED THE REPLY RULES YET. The source is handed out in place of the file at the moment the file is first loaded, and a process that loaded it earlier goes on holding the file. So it checks that the function it got really is the one handed in, and refuses if not - otherwise it would answer about the rules as they are and call that the change.");
  ("★ THE FILE IS REPLACED WHERE IT IS LOADED, NOT COPIED SOMEWHERE ELSE. Every other function keeps its own place on disk, so the changed one reaches its helpers by the same paths it always does, and every road into it - imported, or fetched by name while running - meets the replaced text.");
  ("The rule set and the reading of a message are both fetched by name after the replacement is in place, because importing them at the top would load the whole rule set before there was anything to replace.");
  let folder = folder_repo_love();
  let combined = text_combine(f_name, ".mjs");
  let f_path = path_join([folder, "js", combined]);
  let f_url = text_combine("file://", f_path);
  let node_module = await import("node:module");
  let register_hooks = property_get(node_module, "registerHooks");
  function load(url, context, next_load) {
    if (equal(url, f_url)) {
      let served = {
        format: "module",
        source,
        shortCircuit: true,
      };
      return served;
    }
    let r = next_load(url, context);
    return r;
  }
  register_hooks({
    load,
  });
  let changed = await function_import_relative(f_name);
  let changed_text = String(changed);
  let served_is = text_includes(source, changed_text);
  true_is_assert_json(served_is, {
    f_name,
    hint: "the function loaded is not the source handed in - this process loaded the reply rules before the replacement was in place, so ask again from a fresh process",
  });
  let rules_make = await function_import_relative(
    fn_name("app_shared_message_reply_choices"),
  );
  let attempt_make = await function_import_relative(fn_name("reply_attempt"));
  let rules = rules_make();
  let results = [];
  for (let one of cases) {
    let message = property_get(one, "message");
    let attempt = await attempt_make(message, rules);
    let answered = property_get(attempt, "answered");
    let outputs = property_get(attempt, "outputs");
    let answered_wanted = property_get(one, "answered");
    let outputs_wanted = property_get(one, "outputs");
    let ok =
      equal(answered, answered_wanted) && json_equal(outputs, outputs_wanted);
    let result = {
      message,
      ok,
      broke: property_get(attempt, "broke"),
      answered,
      answered_wanted,
      outputs,
      outputs_wanted,
    };
    list_add(results, result);
  }
  return results;
}
