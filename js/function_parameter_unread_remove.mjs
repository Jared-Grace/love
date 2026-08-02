import { js_function_declaration_param_name_index } from "./js_function_declaration_param_name_index.mjs";
import { js_declaration_unused_to_expression } from "./js_declaration_unused_to_expression.mjs";
import { function_parameters_unread } from "./function_parameters_unread.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { functions_call_argument_at_undroppable } from "./functions_call_argument_at_undroppable.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { js_call_named_argument_at_remove_curried_right_2 } from "./js_call_named_argument_at_remove_curried_right_2.mjs";
import { functions_transform_list } from "./functions_transform_list.mjs";
import { js_function_declaration_param_at_remove_curried_right } from "./js_function_declaration_param_at_remove_curried_right.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { function_auto_multiple } from "./function_auto_multiple.mjs";
export async function function_parameter_unread_remove(f_name, parameter_name) {
  "take a parameter its own body never reads off a function and off every call site in one move";
  "the repair arm of the unread-parameter gate. a parameter nothing reads makes every call site read as though handing that value over does something - one such pair sat in front of the search app looking like an english fallback that was never there. the declaration and every call are one edit because either half alone leaves calls and declaration disagreeing about how many arguments there are";
  "two refusals stand in front of the write and both are the caller's answer rather than a guess. the parameter has to be one the body genuinely never reads, so a live parameter cannot be taken out by naming it; and every call site has to hand it a plain name or a written-out value, because anything else - a call, a spread - may be the whole reason its line was written";
  let finding = await function_parameters_unread(f_name);
  let unread = property_get(finding, "unread");
  let listed = list_includes(unread, parameter_name);
  true_is_assert_json(listed, {
    f_name,
    parameter_name,
    unread,
    hint: "this parameter is read somewhere in the body - taking it out would change what the function does",
  });
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let index = js_function_declaration_param_name_index(
    declaration,
    parameter_name,
  );
  let f_names = await data_identifiers_search_names(f_name);
  let unsafe = await functions_call_argument_at_undroppable(
    f_names,
    f_name,
    index,
  );
  list_empty_is_assert_json(unsafe, {
    f_name,
    parameter_name,
    hint: "these call sites pass something that does work of its own at that place - give each one a name of its own first, then this parameter can come off",
  });
  let arguments_remove = js_call_named_argument_at_remove_curried_right_2(
    f_name,
    index,
  );
  await functions_transform_list(f_names, arguments_remove);
  let param_remove =
    js_function_declaration_param_at_remove_curried_right(index);
  await function_transform(f_name, param_remove);
  ("the argument that was being handed over was often a name computed one line earlier and read nowhere else, so taking the argument out leaves that line standing with nothing to read it. the existing pass drops it when the value was only a read, and keeps it as a bare line when computing it did work of its own");
  await functions_transform_list(f_names, js_declaration_unused_to_expression);
  let names_comma = list_join_comma(f_names);
  await function_auto_multiple(names_comma);
  let r = {
    f_name,
    parameter_name,
    index,
    files: f_names,
  };
  return r;
}
