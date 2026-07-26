import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export function js_top_level_broken_comments_from_code(code) {
  "The kinds of statement at the top of a file that are a comment which stopped being a comment. A comment there has to be one plain quoted line; when a name written inside it is turned into a live reference, the line is torn into pieces that run the moment the file is loaded, so the file either reads as fragments or throws before any of its work begins.";
  "Two shapes say this happened: pieces joined by commas, and a quoted line still holding a substitution. Everything else written at the top of a file is code somebody meant to run, so it is left alone.";
  let ast = js_parse(code);
  let body = property_get(ast, "body");
  let broken = [];
  for (let statement of body) {
    let type = property_get(statement, "type");
    let expression_is = equal(type, "ExpressionStatement");
    if (expression_is) {
      let expression = property_get(statement, "expression");
      let kind = property_get(expression, "type");
      let torn_is = equal(kind, "SequenceExpression");
      if (torn_is) {
        list_add(broken, kind);
      }
      let live_is = equal(kind, "TemplateLiteral");
      if (live_is) {
        list_add(broken, kind);
      }
    }
  }
  return broken;
}
