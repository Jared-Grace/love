import { list_between_space_nb } from "../../../love/public/src/list_between_space_nb.mjs";
export function js_code_binary_spaced_nb(transformed, operator_js, right) {
  let parts = list_between_space_nb([transformed, operator_js, right]);
  return parts;
}
