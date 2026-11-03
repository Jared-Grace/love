import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { error_json } from "./error_json.mjs";
import { function_new_declaration_from } from "./function_new_declaration_from.mjs";
export async function function_new_from_temp_write(
  declaration,
  base,
  import_lines,
  extras,
) {
  "Writes a new function's draft down, with nothing asked about what the draft does.";
  "The name the file will take is handed over and not looked at, because refusing a name that is already taken is what the writer does with it.";
  "A new function's draft holding anything beside its imports and its function is refused, because this writer carries the function alone and the rest would vanish without a word; a new unit has no state to keep that cannot live inside it.";
  arguments_assert(arguments, 4);
  let held = list_empty_not_is(extras);
  if (held) {
    function lambda(item) {
      let code = js_unparse(item);
      return code;
    }
    error_json({
      hint: "the draft holds more than its imports and its one function, and only the function would be carried; move the rest inside the function",
      base,
      extras: extras.map(lambda),
    });
  }
  await function_new_declaration_from(declaration);
}
