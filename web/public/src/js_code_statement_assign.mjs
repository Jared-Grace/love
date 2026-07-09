import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { js_code_semicolon } from "../../../love/public/src/js_code_semicolon.mjs";
import { js_code_assign } from "../../../love/public/src/js_code_assign.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function js_code_statement_assign(kind, left, right) {
  text_combine(
    "this last space is needed for ",
    fn_name("app_replace_rule_set_statements_variable"),
  );
  let r = text_combine_multiple([
    kind,
    " ",
    js_code_assign(left, right),
    " ",
    js_code_semicolon(),
  ]);
  return r;
}
