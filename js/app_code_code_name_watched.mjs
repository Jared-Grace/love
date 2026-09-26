import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_pop } from "./list_pop.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_first } from "./list_first.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { equal_assert } from "./equal_assert.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_code_name_watched(code) {
  arguments_assert(arguments, 1);
  ("a program that ends by writing out one name, rewritten to write that name out after every line that gives it a value instead - let a = 7; a = a + 1; console.log(a); becomes let a = 7; console.log(a); a = a + 1; console.log(a);");
  ("The name watched is the one the last line writes out, because that is the name the program was asking about. The last line itself goes: the last line giving the name a value is now followed by the same writing-out, so keeping it would write the final value twice.");
  ("Each line is parsed rather than matched as text, so a line that only reads the name - a = a + b reads a on the right, let b = 3 names nothing watched - is told apart from one that fills it by what the line is, not by how it happens to be spelled.");
  let lines = text_split_newline(code);
  let last = list_pop(lines);
  let ast_last = js_parse(last);
  let statement_last = list_first(ast_last.body);
  let name = statement_last.expression.arguments[0].name;
  let logged = js_code_console_log_statement(name);
  equal_assert(last, logged);
  let watched = [];
  function line_add(line) {
    "the line, then a writing-out of the watched name if the line gives it a value";
    list_add(watched, line);
    let ast = js_parse(line);
    let statement = list_first(ast.body);
    let filled = null;
    if (equal(statement.type, "VariableDeclaration")) {
      filled = list_first(statement.declarations).id.name;
    }
    if (
      equal(statement.type, "ExpressionStatement") &&
      equal(statement.expression.type, "AssignmentExpression")
    ) {
      filled = statement.expression.left.name;
    }
    if (equal(filled, name)) {
      list_add(watched, logged);
    }
  }
  each(lines, line_add);
  let result = list_join_newline(watched);
  return result;
}
