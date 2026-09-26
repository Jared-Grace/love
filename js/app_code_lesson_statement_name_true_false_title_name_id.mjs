import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_span_code_dark_nowrap } from "./html_span_code_dark_nowrap.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_code_category_statements } from "./app_code_category_statements.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_statement_name_true_false_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: giving true or false a name, followed by the line that does it");
  ("Or rather than a comma, because a name holds one of the two and never both - which of them is the choice the line makes.");
  ("true and false are painted as code, because they are what the line writes - the same way a title about a symbol paints the symbol. Asked for by the human. The id is written down under this lesson's function name, so repainting the words moves nobody's place.");
  let name = app_code_lesson_statement_name_value_name();
  let t = js_keyword_true();
  let f = js_keyword_false();
  let code = js_code_let_statement(name, t);
  function paint(parent) {
    html_cycle_code(parent, ["Giving ", t, " or ", f, " a name "]);
    let tile = html_span_code_dark_nowrap(parent);
    html_span_text_content(tile, code);
  }
  let left = app_code_category_statements();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
