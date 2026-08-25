import { fn_name } from "./fn_name.mjs";
import { js_call_add_before_return } from "./js_call_add_before_return.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { function_wrap_suffix_add } from "./function_wrap_suffix_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_wrap_copy(f_name) {
  arguments_assert(arguments, 1);
  ("Writes the twin of a function that answers exactly as it does and also leaves the answer on the clipboard, named after it with copy on the end.");
  ("EVERY ANSWER WORTH LOOKING AT IS WORTH PASTING SOMEWHERE, and until now that was a person selecting a run of printed JSON out of a terminal and cleaning it. The twin makes the same question a command that ends with the answer already in hand.");
  ("A WRAPPER RATHER THAN ONE COMMAND THAT TAKES A FUNCTION'S NAME, and that difference is about what may be granted rather than about taste. A command handed a name to run is code chosen by whoever wrote the argument, so it can never be approved once and left alone. A twin's behaviour is fixed whatever its arguments say, so it can be.");
  ("The wrapping itself is the existing one, not a second copy of it - so the arguments, the awaiting and the naming all stay decided in one place, and this adds the single call that is the whole of what it is for.");
  ("The answer is still returned as well as copied. A twin that swallowed it would not be usable anywhere the original was, and the point is that it is the same question.");
  let suffix = "copy";
  await function_wrap_suffix_add(f_name, suffix);
  let name_copy = function_name_combine(f_name, suffix);
  let output = await function_transform(name_copy, lambda);
  return output;
  async function lambda(ast) {
    let copier = fn_name("clipboard_copy_value");
    await js_call_add_before_return(ast, copier);
  }
}
