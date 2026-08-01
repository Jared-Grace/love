import { property_equals } from "./property_equals.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export function js_top_level_broken_comments_from_code(code) {
  "The kinds of statement at the top of a file that are a comment which stopped being a comment. A comment there has to be one quoted line; a quoted line still holding a substitution never became one, so it is the shape reported here. Everything else written at the top of a file is code somebody meant to run, so it is left alone.";
  "Pieces joined by commas used to be reported too, and are now allowed on purpose. A comment naming a function has that name turned into a live reference, which is what makes the name clickable in the editor and what makes it follow a later rename; the pieces then evaluate and are discarded, which costs nothing. The one way that line can break is naming something the file never imports, and asking for the names a module references but never binds already catches exactly that, everywhere rather than only at the top of a file. Reporting the shape as well only forbade the form that was wanted.";
  let ast = js_parse(code);
  let body = property_get(ast, "body");
  let broken = [];
  for (let statement of body) {
    let expression_is = property_equals(
      statement,
      "type",
      "ExpressionStatement",
    );
    if (expression_is) {
      let kind = property_path_get_2(statement, "expression", "type");
      let live_is = equal(kind, "TemplateLiteral");
      if (live_is) {
        list_add(broken, kind);
      }
    }
  }
  return broken;
}
