import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { js_flo_body_add_first } from "../../../love/public/src/js_flo_body_add_first.mjs";
import { js_flo } from "../../../love/public/src/js_flo.mjs";
import { js_identifier_rename } from "../../../love/public/src/js_identifier_rename.mjs";
export function js_call_generalize(ast, name_identifier, name_generalized) {
  "we do not want to rename the import";
  let declaration = js_flo(ast);
  js_identifier_rename(declaration, name_identifier, name_generalized);
  let declare = js_declare(name, init);
  js_flo_body_add_first(ast, item);
}
