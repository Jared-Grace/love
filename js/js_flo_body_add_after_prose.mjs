import { js_flo_body } from "./js_flo_body.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_statement_string_not_is } from "./js_statement_string_not_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_add } from "./list_add.mjs";
export function js_flo_body_add_after_prose(ast, item) {
  "Puts a statement at the top of the exported function's work - after everything the function says about itself, before anything it does.";
  "First in the body is not the same place. A function's explanation is written as statements too, so adding at the very front pushes the explanation underneath the code, where it stops reading as the function's own account of itself and a gate refuses it.";
  "A function that explains nothing has no prose to come after, and then the two places are the same one.";
  let body = js_flo_body(ast);
  let doing = list_filter(body, js_statement_string_not_is);
  let started = list_empty_not_is(doing);
  if (started) {
    let first = list_first(doing);
    let index = list_index_of(body, first);
    list_insert(body, index, item);
    return;
  }
  list_add(body, item);
}
