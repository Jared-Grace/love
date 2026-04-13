import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { list_difference_mapper } from "../../../love/public/src/list_difference_mapper.mjs";
export function js_identifiers_names_difference(args, params) {
  let r = list_difference_mapper(args, params, js_identifier_name);
  return r;
}
