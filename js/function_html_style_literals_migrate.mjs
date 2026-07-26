import { function_auto } from "./function_auto.mjs";
import { not } from "./not.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_read } from "./file_read.mjs";
import { js_html_style_set_to_helpers } from "./js_html_style_set_to_helpers.mjs";
import { function_transform } from "./function_transform.mjs";
import { equal } from "./equal.mjs";
export async function function_html_style_literals_migrate(f_name, helpers) {
  "Rewrite one function's style properties set by name into the named helpers, and say whether anything moved.";
  "A failure is reported rather than thrown, and finding the file is inside the attempt along with the rewrite. A sweep wants the whole list, and one name that names nothing would otherwise throw past it and discard every answer already paid for. That is not a guess about what might happen - this function was written without it, and the first run over the codebase died on a file a peer had created and deleted while the sweep was reading, losing all of the work that came before it.";
  "the local is not named error, because that is the name of a function in this repo and the import-repair pass would bind it and add an import for it";
  let changed = false;
  let error_message = "";
  try {
    let f_path = await function_name_to_path(f_name);
    let code_before = await file_read(f_path);
    function lambda(ast) {
      js_html_style_set_to_helpers(ast, helpers);
    }
    await function_transform(f_name, lambda);
    let code_after = await file_read(f_path);
    let same = equal(code_before, code_after);
    changed = not(same);
    ("the normalize pass has to run here, in the same breath as the rewrite. Swapping a call for another one leaves the file naming a function it never imported, and transforming does not repair imports - it writes the file and reports success, and the file no longer loads. That is not a worry, it is a thing that happened: a sweep of eighty-three files did exactly this earlier the same day and broke the shared branch for everyone. A codemod that emits a call owes the file its import");
    ("only for the files that moved. Normalizing the rest would rewrite whitespace in seventy files this changed nothing in, and every one of those is a file some peer may have open");
    if (changed) {
      await function_auto(f_name);
    }
  } catch (e) {
    error_message = e.message;
  }
  let result = {
    name: f_name,
    changed,
    error_message,
  };
  return result;
}
