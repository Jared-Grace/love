import { js_operator_target_names } from "./js_operator_target_names.mjs";
import { function_imports } from "./function_imports.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export async function js_operator_targets_not_leaf() {
  "Every function an operator is turned into that brings something else in. Today there are none, and that is what keeps the fold safe.";
  "The fold refuses to turn an operator into the very function it is editing, which is the whole of its guard. That is enough only while no target reaches another one: a ring needs two of them to reach each other, and a leaf reaches nothing. Let one target start calling another and the fold will write a ring the guard cannot see, because the guard only ever compares one name.";
  "So the guard is not really what makes the fold safe - this is, and until now nobody had written it down.";
  let names = js_operator_target_names();
  let offenders = [];
  for (let name of names) {
    let imports = await function_imports(name);
    let any = greater_than(imports.length, 0);
    if (any) {
      list_add(offenders, {
        name,
        imports,
      });
    }
  }
  return offenders;
}
