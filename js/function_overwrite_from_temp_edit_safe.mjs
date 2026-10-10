import { greater_than } from "./greater_than.mjs";
import { function_edit_safe_refusals } from "./function_edit_safe_refusals.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { function_declaration_overwrite } from "./function_declaration_overwrite.mjs";
import { function_from_temp_generic } from "./function_from_temp_generic.mjs";
export async function function_overwrite_from_temp_edit_safe(f_name) {
  "Puts a function drafted in the throwaway folder over the existing function of that name, but only when the flow check says neither the function as it stands nor the draft can change anything dangerous. Otherwise it writes nothing and says why.";
  "This is the overwrite that can be granted. The plain one takes whatever the throwaway folder holds, so a standing allow on it would let any granted function be rewritten into anything and then run unasked. This one only writes an edit the check proves cannot steer a path, a command, code, a permission or a dispatch, so most development - a lesson, a screen, a helper - goes through without a prompt, and anything that matters still reaches the human.";
  "The check runs inside the writer, on the very declaration the shared opening read, so nothing can change the draft between the check and the write.";
  async function function_overwrite_from_temp_edit_safe_write(
    declaration,
    base,
    import_lines,
  ) {
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
    await function_declaration_overwrite(declaration, base);
  }
  let output = await function_from_temp_generic(
    f_name,
    function_overwrite_from_temp_edit_safe_write,
  );
  return output;
}
