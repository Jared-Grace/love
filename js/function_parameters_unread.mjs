import { js_special_arguments } from "./js_special_arguments.mjs";
import { list_includes } from "./list_includes.mjs";
import { ternary } from "./ternary.mjs";
import { js_function_declaration_params_names_plain } from "./js_function_declaration_params_names_plain.mjs";
import { js_params_names_protocol } from "./js_params_names_protocol.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { list_difference } from "./list_difference.mjs";
export async function function_parameters_unread(f_name) {
  "which of one function's parameters its own body never reads";
  "a parameter nothing reads is worse than dead weight - every call site is written as though handing that value over does something, so the code reads as having a behaviour it does not have. one such pair sat in front of a search app for weeks looking like an english fallback that was never there";
  "the names are asked of the body alone rather than of the whole declaration, because a parameter is itself an identifier in the parameter list - asking the declaration would find every parameter reading itself";
  "only the parameters that are a plain name are asked about. a name unpacked out of an object parameter is not something a call site hands over on its own - the caller passes one object - so a piece the body never reads makes no call site say anything untrue, and taking it off would be an edit inside the body rather than at the seam";
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let params_names = js_function_declaration_params_names_plain(declaration);
  let body = property_get(declaration, "body");
  let read = js_identifiers_referenced_names(body);
  ("a body reaching for arguments reads every parameter at once without naming any of them, so nothing there is unread. saying otherwise would be worse than a wrong count - the repair arm believes this answer, and it would have stripped a live argument off every call site of the one function here that does it");
  let protocol = js_params_names_protocol(params_names);
  let kept = list_difference(params_names, protocol);
  let unread_named = list_difference(kept, read);
  let arguments_name = js_special_arguments();
  let arguments_read = list_includes(read, arguments_name);
  let unread = ternary(arguments_read, [], unread_named);
  let finding = {
    name: f_name,
    unread,
  };
  return finding;
}
