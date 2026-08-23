import { fn_name } from "./fn_name.mjs";
import { functions_name_word_repeated_baseline_path } from "./functions_name_word_repeated_baseline_path.mjs";
import { functions_name_word_repeated_named } from "./functions_name_word_repeated_named.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_name_word_repeated_gate_run() {
  "QA gate for the naming rule: a name is its parts joined and every part is meant to narrow, so no name says one word twice running. The cut already refuses to write such a name, and until now nothing asked it of the names already standing - twenty five were found the first time anybody looked, one of them saying its word three times. Measured against the baseline file rather than against zero, so the rule binds new names today; a name the baseline does not list fails, and a name it lists that no longer doubles fails too, so the list can only shrink.";
  let told = await functions_name_word_repeated_named();
  let offenders = property_get(told, "offenders");
  let path = functions_name_word_repeated_baseline_path();
  let name_write = fn_name("functions_name_word_repeated_baseline_write");
  let result = await baseline_names_gate_generic(
    offenders,
    path,
    "these names say one word twice running - the second telling narrows nothing, so drop it and rename with the full function name",
    name_write,
  );
  return result;
}
