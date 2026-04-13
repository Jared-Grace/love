import { js_identifier_name_try } from "../../../love/public/src/js_identifier_name_try.mjs";
import { list_difference_mapper } from "../../../love/public/src/list_difference_mapper.mjs";
export function js_identifiers_names_difference_try(args, params) {
  let r = list_difference_mapper(args, params, js_identifier_name_try);
  return r;
}
