import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_duplicate_elements } from "./js_duplicate_elements.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_duplicate_elements(size) {
  "Every function in this repo whose file holds one name twice inside an ordered register.";
  "Whatever reads such a register does that one thing twice and says nothing about having done so, which is why nothing else would ever show it: the repeated entry is as green the second time as the first, and the only cost - the second doing - looks exactly like the whole run being a little slow.";
  "It began as a check on the one register the whole-repo gate keeps of its own members, written the day two of us listed the same gate seconds apart. Every register in this repo is written the same way and gets added to the same way, so asking it of one of them and not the rest was only ever an accident of where it was noticed.";
  "One parse per file, the same shape as the sweep for repeated settings next door.";
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let names = js_duplicate_elements(ast, size);
    let any = list_empty_not_is(names);
    if (any) {
      let row = {
        name,
        names,
      };
      list_add(offenders, row);
    }
  }
  return offenders;
}
