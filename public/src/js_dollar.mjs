import { js_dollar_rf } from "./js_dollar_rf.mjs";
import { list_get_end_3 } from "./list_get_end_3.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { lambda_invoke_multiple } from "./lambda_invoke_multiple.mjs";
import { lambda_invoke } from "./lambda_invoke.mjs";
import { js_dollar_i } from "./js_dollar_i.mjs";
import { js_dollar_r } from "./js_dollar_r.mjs";
import { js_dollar_a } from "./js_dollar_a.mjs";
import { js_dollar_s } from "./js_dollar_s.mjs";
import { js_dollar_f } from "./js_dollar_f.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { js_node_types } from "./js_node_types.mjs";
import { object_copy } from "./object_copy.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { js_identifier_replace } from "./js_identifier_replace.mjs";
import { each } from "./each.mjs";
import { list_is } from "./list_is.mjs";
import { list_get_end_2 } from "./list_get_end_2.mjs";
import { js_dollar_g } from "./js_dollar_g.mjs";
import { js_identifier_unique_ast } from "./js_identifier_unique_ast.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { js_declare } from "./js_declare.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { list_first_second } from "./list_first_second.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_second } from "./list_second.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
import { js_code_return_empty } from "./js_code_return_empty.mjs";
import { js_code_return } from "./js_code_return.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { js_code_braces_empty } from "./js_code_braces_empty.mjs";
import { js_code_wrap_braces } from "./js_code_wrap_braces.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { log } from "./log.mjs";
import { string_split } from "./string_split.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_next } from "./list_next.mjs";
import { list_remove } from "./list_remove.mjs";
import { each_async } from "./each_async.mjs";
import { js_dollar_rt } from "./js_dollar_rt.mjs";
import { js_dollar_ie } from "./js_dollar_ie.mjs";
export async function js_dollar(ast) {
  let seconds = [
    {
      name: "i",
      fn: js_dollar_i,
    },
    {
      name: "ie",
      fn: js_dollar_ie,
    },
    {
      name: "r",
      fn: js_dollar_r,
    },
    {
      name: "rt",
      fn: js_dollar_rt,
    },
    {
      name: "rf",
      fn: js_dollar_rf,
    },
    {
      name: "a",
      fn: js_dollar_a,
    },
    {
      name: "g",
      fn: js_dollar_g,
    },
    {
      name: "s",
      fn: js_dollar_s,
    },
    {
      name: "f",
      fn: js_dollar_f,
    },
  ];
  let afters = [];
  async function lambda(v) {
    async function lambda2(s) {
      let { name: second_name, fn } = s;
      let { node, stack } = v;
      let stack1 = list_get_end_1(stack);
      let stack2 = list_get_end_2(stack);
      let stack3 = list_get_end_3(stack);
      let name = object_property_get(node, "name");
      const separator = "$";
      let split = string_split(name, separator);
      let { first, second } = list_first_second(split);
      let ne = string_empty_not_is(first);
      if (ne) {
        return;
      }
      let remaining = list_skip(split, 2);
      if (second === second_name) {
        await fn({
          remaining,
          node,
          stack1,
          stack2,
          stack3,
          ast,
          afters,
        });
      }
    }
    await each_async(seconds, lambda2);
  }
  await js_visit_type_each_async(ast, "Identifier", lambda);
  lambda_invoke_multiple(afters);
  return;
}
