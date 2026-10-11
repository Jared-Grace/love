import { fn_name } from "./fn_name.mjs";
import { function_temp_declaration_read } from "./function_temp_declaration_read.mjs";
import { function_edit_safe_refusals } from "./function_edit_safe_refusals.mjs";
import { property_get } from "./property_get.mjs";
export async function function_temp_edit_safe_refusals(f_name) {
  ("Every reason the draft of this function in the throwaway folder would be turned down by the safe overwrite, without writing anything. Empty means ",
    fn_name("function_overwrite_from_temp_edit_safe"),
    " would write it.");
  ("Asking first tells an agent whether its edit can land unasked, or must go to the human, before it spends the human's attention on a prompt.");
  let r = await function_temp_declaration_read(f_name);
  let f_name2 = property_get(r, "base");
  let declaration = property_get(r, "declaration");
  let import_lines = property_get(r, "import_lines");
  let refusals = await function_edit_safe_refusals(
    f_name2,
    declaration,
    import_lines,
  );
  return refusals;
}
