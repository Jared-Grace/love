import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_includes } from "./text_includes.mjs";
import { or } from "./or.mjs";
export function app_code_lesson_family_telling_bank_itself(
  family,
  counted,
  root,
  source,
) {
  arguments_assert(arguments, 4);
  for (let name of family) {
    let aside = text_ends_with_any(name, ["_title_name_id", "_gate_run"]);
    let keep = not(aside);
    if (keep) {
      list_add(counted, name);
    }
  }
  let telling = [];
  for (let name of counted) {
    let itself = equal(name, root);
    let named = text_ends_with_any(name, ["_above", "_intro"]);
    let part = text_combine("above: ", name);
    let handed = text_includes(source, part);
    let right = or(named, handed);
    let tells = or(itself, right);
    if (tells) {
      list_add(telling, name);
    }
  }
  return telling;
}
