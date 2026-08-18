import { fn_name } from "./fn_name.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map } from "./list_map.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_code_join_comma_space } from "./js_code_join_comma_space.mjs";
import { js_code_wrap_brackets } from "./js_code_wrap_brackets.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_await } from "./js_code_await.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
export function js_calls_run_to_each_statement(run) {
  "The one statement that walks a list of arguments and says what this whole run of calls said.";
  "Every call in the run names the same function and is given one argument. So the arguments gathered into a list, and the name handed over to be called against each of them in turn, come to the same thing written once.";
  "The statement is built as text and read back, because the arguments are already pieces of a tree and writing them out is the one way to put them inside a larger piece written here.";
  let first = list_first(run);
  let name = property_get(first, "name");
  let waited_is = property_get(first, "waited_is");
  let argument_nodes = list_map_property(run, "argument");
  let argument_codes = list_map(argument_nodes, js_unparse);
  let joined = js_code_join_comma_space(argument_codes);
  let list_code = js_code_wrap_brackets(joined);
  let walk_name = fn_name("each");
  if (waited_is) {
    walk_name = fn_name("each_async");
  }
  let call = js_code_call_args(walk_name, [list_code, name]);
  if (waited_is) {
    call = js_code_await(call);
  }
  let code = js_code_statement(call);
  let statement = js_parse_statement(code);
  return statement;
}
