import { property_equals } from "./property_equals.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_code_string_statement } from "./js_code_string_statement.mjs";
import { js_code_spans_replaced } from "./js_code_spans_replaced.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_template_comment_text } from "./js_template_comment_text.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
export function js_code_top_level_templates_flattened(code) {
  "The same source with every comment written as a template literal outside any function turned back into a plain string. A comment inside a function may hold a substitution, because the step that pulls a call out of a template has a block to put it in; at the top of a file there is no block, so that step gives up and the whole file stops being normalizable.";
  "The words are kept and only the live reference is given up. That is the right way round: a comment whose name goes stale is a small cost paid rarely, while a comment that has been torn into fragments is unreadable every time anyone opens the file.";
  let ast = js_parse(code);
  let body = property_get(ast, "body");
  function template_statement_is(statement) {
    let expression_is = property_equals(
      statement,
      "type",
      "ExpressionStatement",
    );
    if (expression_is) {
      let expression_type = property_path_get_2(
        statement,
        "expression",
        "type",
      );
      let template_is = equal(expression_type, "TemplateLiteral");
      return template_is;
    }
    return false;
  }
  let templates = list_filter(body, template_statement_is);
  function plain_of(statement) {
    let expression = property_get(statement, "expression");
    let text = js_template_comment_text(expression);
    let plain = js_code_string_statement(text);
    return plain;
  }
  let flattened = js_code_spans_replaced(code, templates, plain_of);
  return flattened;
}
