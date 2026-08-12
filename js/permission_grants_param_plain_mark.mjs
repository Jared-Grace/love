import { ai_git_noted } from "./ai_git_noted.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_param_plain_mark } from "./function_param_plain_mark.mjs";
import { function_params_get } from "./function_params_get.mjs";
import { function_params_plain } from "./function_params_plain.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { not } from "./not.mjs";
import { permission_run_names } from "./permission_run_names.mjs";
export async function permission_grants_param_plain_mark(param) {
  arguments_assert(arguments, 1);
  ("Declares one parameter name to carry ordinary data everywhere an automatic allow rule already covers a function that takes it.");
  ("The judgment is the argument: somebody who knows the repo says that a parameter spelled this way holds a Bible chapter identifier rather than source text, and says it once. What lands is still one written declaration inside each function, so the claim can be read and argued with at the place it applies - the difference from letting the check read the shape of a name is that nothing is decided for a function nobody chose.");
  ("The set is found here rather than listed by the caller, so it cannot drift from which functions actually declare the parameter, and asking again afterwards is what proves the writing worked rather than assuming it.");
  ("Anything already noted is committed before the first step, so the first mark cannot file somebody else's unfinished work under its own name.");
  ("do NOT grant. The check passes this cleanly - the parameter is honestly named, nothing downstream runs a command - because what it reads is the shape of a name, and the harm here is in what the argument becomes. A word handed in at the command line is declared ordinary data across every function already granted that spells a parameter that way, which is the one pass that looks at standing grants a second time going quiet for a whole class of names at once, with nobody having weighed any of them. Its singular twin is the shape the marker was made for: one function, one parameter, one decision, readable in the file it lands in. This one is that decision taken in bulk, and taking it in bulk is exactly what makes it a decision nobody made.");
  await ai_git_noted();
  let names = await permission_run_names();
  let marked = [];
  for (let name of names) {
    let params = await function_params_get(name);
    let p_names = list_map_property(params, "name");
    let declares = list_includes(p_names, param);
    if (declares) {
      let already = await function_params_plain(name);
      let done = list_includes(already, param);
      if (not(done)) {
        await function_call_commit(function_param_plain_mark, [name, param]);
        list_add(marked, name);
      }
    }
  }
  let left = [];
  for (let name of marked) {
    let plain = await function_params_plain(name);
    let has = list_includes(plain, param);
    if (not(has)) {
      list_add(left, name);
    }
  }
  let answer = {
    param,
    marked,
    left,
  };
  return answer;
}
