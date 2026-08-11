import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_new_code } from "./function_new_code.mjs";
export async function functions_new_baseline_ratchet_growth_new(
  name_path,
  hint,
  name_growth,
) {
  arguments_assert(arguments, 3);
  let left = json_to(
    "Refuse to record an offender the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.",
  );
  let combined2 = text_combine(left, ";");
  let left3 = json_to(
    "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.",
  );
  let combined3 = text_combine(left3, ";");
  let abc = text_combine_3("let path = ", name_path, "();");
  let object = text_combine(
    "recording these as known would bless a new offence rather than repair it - ",
    hint,
  );
  let json = json_to(object);
  let f_name = fn_name("baseline_known_growth_assert");
  let combined = text_combine_multiple(["await ", f_name, "(known, path, "]);
  let combined4 = text_combine_multiple([combined, json, ");"]);
  await function_new_code(name_growth, ["known"], true, [
    combined2,
    combined3,
    abc,
    combined4,
  ]);
}
