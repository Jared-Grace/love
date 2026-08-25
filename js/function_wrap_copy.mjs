import { function_auto_checked } from "./function_auto_checked.mjs";
import { list_single_item } from "./list_single_item.mjs";
import { js_return_name } from "./js_return_name.mjs";
import { js_find_call_name_includes } from "./js_find_call_name_includes.mjs";
import { js_call_argument_named_identifier_set } from "./js_call_argument_named_identifier_set.mjs";
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
  ("CANONICALISED BEFORE IT IS HANDED BACK, because the call this writes is the twin's only mention of the copier and a written call brings no import with it. Left as it stood, the file parsed, showed the right lines, and threw the moment anybody ran it - a name nothing imported.");
  await function_transform(name_copy, lambda);
  let checked = await function_auto_checked(name_copy);
  return checked;
  async function lambda(ast) {
    "The one line of code this adds is the copying call, given the answer the wrapper is already holding. Both halves of that - writing the call and pointing its argument at the returned value - are one named verb next door, because a call added before a return is unfinished until its arguments say something true about where it landed, and that is not particular to copying.";
    let copier = fn_name("clipboard_copy_value");
    await js_call_add_before_return_argument_returned(ast, copier, "value");
  }
}
