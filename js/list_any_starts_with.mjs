import { list_any } from "../../../love/public/src/list_any.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
export function list_any_starts_with(item, prefixes) {
  function lambda2(item2) {
    let sw = string_starts_with(item, item2);
    return sw;
  }
  let any = list_any(prefixes, lambda2);
  return any;
}
