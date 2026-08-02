import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_gate_run_unwired } from "./functions_gate_run_unwired.mjs";
import { function_import } from "./function_import.mjs";
import { qa_gate_result } from "./qa_gate_result.mjs";
import { property_get } from "./property_get.mjs";
import { text_and_empty_not_is } from "./text_and_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_select_apply_args_auto } from "./function_select_apply_args_auto.mjs";
export async function functions_gate_run_unwired_wire() {
  "Adds to the whole-repo gate's list every gate that was written and never listed, in exactly the ones that are missing.";
  "The gap it closes is a small edit made often. A gate is written in one file and listed in another, seconds apart, and the second half is the one that gets forgotten - three times in one afternoon, twice by different hands. Its neighbour finds them; until now the answer to what it found was a hand edit to a hundred-name list, which is the shape this repo reads as a missing command.";
  "Only a gate that passes right now is listed. That is what makes this safe to run without being asked: adding a gate that is already quiet leaves the whole-repo gate exactly as green as it was, and only holds the repo to what somebody already wrote. Listing a red one would turn the build red for everybody working here, out of a command nobody asked for - so a red gate is handed back by name with its complaint, for whoever wrote it to finish.";
  "Each one is listed and committed on its own, because a run over several lasts long enough that somebody else's sweep takes the file first, and what that leaves behind says nothing about which command wrote it.";
  "Asking the same question again at the end is the only honest way to say it worked, since a run that listed nothing looks the same as one that succeeded.";
  await ai_git_noted();
  let unwired = await functions_gate_run_unwired();
  let wired = [];
  let refused = [];
  for (let f_name of unwired) {
    let gate = await function_import(f_name);
    let result = await qa_gate_result(gate);
    let error_message = property_get(result, "error_message");
    let complained = text_and_empty_not_is(error_message);
    if (complained) {
      let row = {
        name: f_name,
        error_message,
      };
      list_add(refused, row);
      continue;
    }
    let f_name2 = fn_name("qa_gates");
    let f_name3 = fn_name("js_find_declaration_named");
    let f_name4 = fn_name("js_array_identifier_add");
    let args = [f_name2, f_name3, "gates", f_name4, f_name];
    await function_call_commit(function_select_apply_args_auto, args);
    list_add(wired, f_name);
  }
  let remaining = await functions_gate_run_unwired();
  let r = {
    wired,
    refused,
    remaining,
  };
  return r;
}
