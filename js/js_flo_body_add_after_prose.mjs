import { js_flo_body } from "./js_flo_body.mjs";
import { js_statements_prose_head_last_or_null } from "./js_statements_prose_head_last_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_statement_prose_not_is } from "./js_statement_prose_not_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_add } from "./list_add.mjs";
export function js_flo_body_add_after_prose(ast, item) {
  "Puts a statement at the top of the exported function's work - after everything the function says about itself, before anything it does.";
  "First in the body is not the same place. A function's explanation is written as statements too, so adding at the very front pushes the explanation underneath the code, where it stops reading as the function's own account of itself and a gate refuses it.";
  "A function that explains nothing has no prose to come after, and then the two places are the same one.";
  "THE COUNT OF ARGUMENTS IS STEPPED OVER ON THE WAY DOWN, because in some functions it is written above the account rather than below it. Read as the first thing the function does, it made the whole account sit underneath the new line - so a paragraph added to such a function landed above its summary, which is the one line every reader meets first. That happened, and the only thing that noticed was a person reading the file afterwards.";
  "★ BOTH READINGS BELOW COUNT ALL THREE SHAPES A PARAGRAPH GETS WRITTEN IN, NOT ONLY THE PLAIN STRING. Until 2026-09-09 they counted the first shape alone, so a paragraph written as a bracket and commas - the shape a paragraph carrying a function name takes - read as work here. In a function whose account opens that way the walk found no account at all and this landed the new line above the summary, which is the fault the paragraph above says once happened; in a function whose account holds one further down, the new line landed in the middle of the account instead of below it.";
  "IT IS STEPPED OVER ONLY WHILE NOTHING ELSE HAS BEEN DONE YET. Once a real statement has been passed the walk stops, so an account written further down the body - which some functions have - is not what a new line is added after.";
  let body = js_flo_body(ast);
  let said = js_statements_prose_head_last_or_null(body);
  let said_is = null_not_is(said);
  if (said_is) {
    let at = list_index_of(body, said);
    let after = at + 1;
    list_insert(body, after, item);
    return;
  }
  let doing = list_filter(body, js_statement_prose_not_is);
  let started = list_empty_not_is(doing);
  if (started) {
    let first = list_first(doing);
    let index = list_index_of(body, first);
    list_insert(body, index, item);
    return;
  }
  list_add(body, item);
}
