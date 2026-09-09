import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_run_answered_or_null } from "./js_function_declaration_run_answered_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_function_declaration_personal_names } from "./js_function_declaration_personal_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { js_node_copy } from "./js_node_copy.mjs";
import { js_statements_shape } from "./js_statements_shape.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_size } from "./list_size.mjs";
export function js_function_declaration_shared_run_read_or_null(declaration) {
  arguments_assert(arguments, 1);
  ("Everything needed to go looking for copies of a function's body written inside other functions: the run itself, the name it hands back, where that name is made, the names it was handed, and the text the run lands on once the private names are taken away.");
  ("The names the function was handed are deliberately left standing in that text, and this is the whole of what makes the search a safe one rather than a wide one. A shape reader blanks every private name, so two functions that read a different thing at the same place land on the same text and look like copies of each other. Left standing, a copy has to spell the handed-in names exactly as the shared function spells them, which is the same as saying the call written in its place would read the very things it was already reading.");
  ("What that turns away is a real case and not a made-up one. Two functions may open with the same run of work and read a different one of their own arguments at the top of it. A search that blanked the arguments would offer both and the swap would quietly hand over the wrong one; here the second is turned away with a reason, and turning away a good one costs nothing but a line in the refused list.");
  ("Where the answer is made is kept as a place in the list of names the run brings into being rather than as the name itself, because the copy calls it something else. The two lists stand side by side once the shapes agree, so the place is what carries across and the name is what is read off the other end.");
  ("It copies before it blanks, since the blanking is done in place and the run handed back is the caller's own parse.");
  let answered = js_function_declaration_run_answered_or_null(declaration);
  let unshaped_is = null_is(answered);
  if (unshaped_is) {
    let nothing = null;
    return nothing;
  }
  let doing_run = property_get(answered, "run");
  let answer_name = property_get(answered, "answer_name");
  let params = js_function_declaration_params_names(declaration);
  let personal = js_function_declaration_personal_names(declaration);
  let private_names = list_difference(personal, params);
  let copied = js_node_copy(doing_run);
  let shape = js_statements_shape(copied, private_names);
  let made_names = js_statements_declared_names_direct(doing_run);
  let answer_place = list_index_of(made_names, answer_name);
  let size = list_size(doing_run);
  let shared = {
    run: doing_run,
    answer_name: answer_name,
    answer_place: answer_place,
    params: params,
    shape: shape,
    size: size,
  };
  return shared;
}
