import { fn_name } from "./fn_name.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_transform_single_auto } from "./function_transform_single_auto.mjs";
import { functions_text_combine_number } from "./functions_text_combine_number.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_f_name } from "./property_get_f_name.mjs";
export async function functions_text_combine_number_add_repair() {
  "Renames every joining of text to a plain number into the addition it already is, in exactly the functions that hold one.";
  "The set is found rather than received, so it cannot drift from what is actually there, and asking the same question again at the end is the only honest way to say the run worked - a repair that changed nothing looks exactly like one that succeeded.";
  "Each function is committed as it is corrected rather than all of them together, because a run over twenty files lasts long enough for somebody else's sweep to take them first, and what that sweep leaves behind says nothing about how they were changed.";
  "Nothing here alters what any of these functions does. The two names hold the very same line, so this is a change of what the code says it is doing and nothing else.";
  await ai_git_noted();
  let offenders = await functions_text_combine_number();
  let repaired = [];
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let args = [fn_name("js_text_combine_number_add"), f_name];
    await function_call_commit(function_transform_single_auto, args);
    list_add(repaired, f_name);
  }
  let left = await functions_text_combine_number();
  let names = list_map(left, property_get_f_name);
  let r = {
    repaired,
    remaining: names,
  };
  return r;
}
