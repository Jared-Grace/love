import { function_read } from "./function_read.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_module_extras_codes } from "./js_module_extras_codes.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { json_equal } from "./json_equal.mjs";
import { not } from "./not.mjs";
import { function_edit_safe_refusals } from "./function_edit_safe_refusals.mjs";
import { greater_than } from "./greater_than.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { function_declaration_extras_overwrite } from "./function_declaration_extras_overwrite.mjs";
import { function_from_temp_generic } from "./function_from_temp_generic.mjs";
export async function function_overwrite_from_temp_edit_safe(f_name) {
  "Puts a function drafted in the throwaway folder over the existing function of that name, but only when the flow check says neither the function as it stands nor the draft can change anything dangerous. Otherwise it writes nothing and says why.";
  "This is the overwrite that can be granted. The plain one takes whatever the throwaway folder holds, so a standing allow on it would let any granted function be rewritten into anything and then run unasked. This one only writes an edit the check proves cannot steer a path, a command, code, a permission or a dispatch, so most development - a lesson, a screen, a helper - goes through without a prompt, and anything that matters still reaches the human.";
  "The check runs inside the writer, on the very declaration the shared opening read, so nothing can change the draft between the check and the write.";
  async function function_overwrite_from_temp_edit_safe_write(
    declaration,
    base,
    import_lines,
    extras,
  ) {
    "★ WHAT THE FILE KEEPS OUTSIDE ITS FUNCTION MAY BE CARRIED BUT NEVER CHANGED HERE. The flow check reads the function and nothing beside it, and a statement on a module's top line runs the moment the file loads - so a changed one would be written on a proof that never looked at it. Carried unchanged it is exactly what was already there; any change to it goes to the human.";
    let source_existing = await function_read(base);
    let ast_existing = js_parse(source_existing);
    let codes_existing = js_module_extras_codes(ast_existing);
    let codes_draft = extras.map(js_unparse);
    let same = json_equal(codes_draft, codes_existing);
    if (not(same)) {
      throw new Error(
        "not written, because the draft changes what the file keeps outside its function, which the check does not read",
      );
    }
    let refusals = await function_edit_safe_refusals(
      base,
      declaration,
      import_lines,
    );
    if (greater_than(refusals.length, 0)) {
      throw new Error(
        "not written, because the edit could change something dangerous:\n" +
          refusals.join("\n"),
      );
    }
    await function_exists_assert(base);
    await function_declaration_extras_overwrite(declaration, extras, base);
  }
  let output = await function_from_temp_generic(
    f_name,
    function_overwrite_from_temp_edit_safe_write,
  );
  return output;
}
