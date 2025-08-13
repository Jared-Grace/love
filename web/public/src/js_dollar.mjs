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
export async function js_dollar(ast) {
  await js_visit_type_each_async(ast, "ExpressionStatement", async (v) => {
    let { node } = v;
    let { expression } = node;
    if (js_identifier_is(expression)) {
      let { name } = expression;
      const separator = "$";
      let split = string_split(name, separator);
      let { first, second } = list_first_second(split);
      let ne = string_empty_not_is(first);
      if (ne) {
        return;
      }
      let remaining = list_skip(split, 2);
      if (second === "i") {
        let from = js_parse_statement(
          js_keyword_if() +
            " " +
            js_code_wrap_parenthesis("false") +
            js_code_braces_empty(),
        );
        object_replace(node, from);
      } else if (second === "r") {
        let code = js_code_return_empty();
        let from = js_parse_statement(code);
        object_replace(node, from);
      } else if (second === "g") {
        let { first: object_name, second: property_name } =
          list_first_second(remaining);
        let code_string = await js_code_string(property_name);
        let code = js_code_call_args(object_property_get.name, [
          object_name,
          code_string,
        ]);
        let parsed = js_parse_statement(code);
        object_replace(node, parsed);
      }
    }
  });
  let message = await js_unparse(ast);
  log(message);
}
