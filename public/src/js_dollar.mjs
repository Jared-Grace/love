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
export function js_dollar(ast) {
  js_visit_type(ast, "ExpressionStatement", (v) => {
    let { node } = v;
    let { expression } = node;
    if (js_identifier_is(expression)) {
      let { name } = expression;
      const separator = "$";
      let split = string_split(name, separator);
      let first = list_first(list);
      let ne = string_empty_not_is(first);
      if (ne) {
        return;
      }
      let remaining = string_prefix_without(name, prefix);
      log(remaining);
      if (remaining === "i") {
        let from = js_parse_statement(
          js_keyword_if() +
            " " +
            js_code_wrap_parenthesis("false") +
            js_code_braces_empty(),
        );
        object_replace(node, from);
      } else if (remaining === "r") {
        let code = js_code_return_empty();
        let from = js_parse_statement(code);
        object_replace(node, from);
      }
    }
  });
}
