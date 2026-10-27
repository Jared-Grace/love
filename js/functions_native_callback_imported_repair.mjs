import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_native_callback_imported } from "./functions_native_callback_imported.mjs";
import { property_get } from "./property_get.mjs";
import { function_parameters_count } from "./function_parameters_count.mjs";
import { list_add } from "./list_add.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_native_callback_wrap } from "./function_native_callback_wrap.mjs";
import { list_map } from "./list_map.mjs";
export async function functions_native_callback_imported_repair() {
  "wraps the callback in a lambda of one argument in exactly the functions the native callback gate names, each committed as it lands, then asks the gate's question again";
  "a callback that declares one parameter reads nothing the index or the list could have changed, so wrapping it changes nothing a run can see; a function handing on any callback that declares more is left alone and named, because there the index may be read on purpose and the call is a judgement";
  "asking again afterwards is the only honest way to say it worked, since a repair that changed nothing looks identical to one that did";
  await ai_git_noted();
  let offenders = await functions_native_callback_imported();
  let repaired = [];
  let refused = [];
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let sites = property_get(offender, "sites");
    let single = true;
    for (let site of sites) {
      let passed = property_get(site, "passed");
      let count = await function_parameters_count(passed);
      if (not_equal(count, 1)) {
        single = false;
      }
    }
    if (not(single)) {
      list_add(refused, f_name);
      continue;
    }
    await function_call_commit(function_native_callback_wrap, [f_name]);
    list_add(repaired, f_name);
  }
  let left = await functions_native_callback_imported();
  function f_name_get(o) {
    let name = property_get(o, "f_name");
    return name;
  }
  let remaining = list_map(left, f_name_get);
  let r = {
    repaired,
    refused,
    remaining,
  };
  return r;
}
