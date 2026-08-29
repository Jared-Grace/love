import { fn_name } from "./fn_name.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_names_plain } from "./js_function_declaration_params_names_plain.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { js_special_arguments } from "./js_special_arguments.mjs";
import { js_identifiers_referenced_named_count } from "./js_identifiers_referenced_named_count.mjs";
import { js_list_calls_named_nodes } from "./js_list_calls_named_nodes.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_params_names_protocol } from "./js_params_names_protocol.mjs";
import { list_difference } from "./list_difference.mjs";
import { ternary } from "./ternary.mjs";
export async function function_parameters_unread(f_name) {
  "which of one function's parameters its own body never reads";
  "a parameter nothing reads is worse than dead weight - every call site is written as though handing that value over does something, so the code reads as having a behaviour it does not have. one such pair sat in front of a search app for weeks looking like an english fallback that was never there";
  "the names are asked of the body alone rather than of the whole declaration, because a parameter is itself an identifier in the parameter list - asking the declaration would find every parameter reading itself";
  "only the parameters that are a plain name are asked about. a destructured one, or one with a default, is a written-out shape rather than a name, and taking it off would move every argument after it";
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let params_names = js_function_declaration_params_names_plain(declaration);
  let body = property_get(declaration, "body");
  let read = js_identifiers_referenced_names(body);
  ("a body reaching for arguments reads every parameter at once without naming any of them, so nothing there can be called unread. saying otherwise would be worse than a wrong count - the repair arm believes this answer, and it would strip a live argument off every call site");
  ("but the commonest reach for arguments in this repo is not a read of any of them. ",
    fn_name("arguments_assert"),
    "(arguments, n) asks the object how many things are in it and nothing else - it never asks which. so a mention of arguments standing inside one of those calls is set against the total rather than ending the reading, and only a mention somewhere else stops it. that is not a shortcut taken to reach more functions: it is where the line actually falls. ",
    fn_name("arguments_assert_each"),
    " is deliberately not exempt, because it does reach for the values one at a time");
  ("the difference matters far more than it sounds. the assert is written at the head of about four thousand of the fourteen thousand functions here, and before this every one of them was invisible to the reading - the answers it gave were only ever about the minority that happens not to assert");
  let arguments_name = js_special_arguments();
  let arguments_count = js_identifiers_referenced_named_count(
    body,
    arguments_name,
  );
  let assert_calls = js_list_calls_named_nodes(
    body,
    fn_name("arguments_assert"),
  );
  function assert_arguments_count(call) {
    let counted = js_identifiers_referenced_named_count(call, arguments_name);
    return counted;
  }
  let asserted_count = list_map_sum(assert_calls, assert_arguments_count);
  let arguments_read = greater_than(arguments_count, asserted_count);
  let protocol = js_params_names_protocol(params_names);
  let kept = list_difference(params_names, protocol);
  let unread_named = list_difference(kept, read);
  let unread = ternary(arguments_read, [], unread_named);
  let finding = {
    name: f_name,
    unread,
  };
  return finding;
}
