import { js_flo_body } from "./js_flo_body.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_get } from "./list_get.mjs";
export function js_find_statement_index(ast, index_text) {
  "A line named by its place in the function, counting from nothing. The address";
  "of last resort: it holds no matter what the line says, so it reaches the ones";
  "that bind nothing, call nothing and are named nothing.";
  "It is also the most fragile, because every insertion above it moves it. Reach";
  "for a name first and come here when there is none.";
  let body = js_flo_body(ast);
  let index = number_from_text(index_text);
  let statement = list_get(body, index);
  return statement;
}
