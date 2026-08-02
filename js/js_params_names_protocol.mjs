import { list_get_try } from "./list_get_try.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export function js_params_names_protocol(params_names) {
  "the parameters among these that a caller's fixed shape puts there rather than the function asking for them";
  "a transform is called as (ast, selects, and then its own arguments), so those two places belong to the protocol. one that never reads them is not making its call sites say anything untrue - the caller passes them to every transform alike, and a transform that took them out could no longer be called at all";
  let protocol = [];
  let first = list_get_try(params_names, 0);
  let ast_is = equal(first, "ast");
  if (ast_is) {
    list_add(protocol, "ast");
    let second = list_get_try(params_names, 1);
    let selects_is = equal(second, "selects");
    if (selects_is) {
      list_add(protocol, "selects");
    }
  }
  return protocol;
}
