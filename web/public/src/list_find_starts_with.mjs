import { list_any } from "./list_any.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export function list_find_starts_with(item, prefixes) {
  function lambda2(item2) {
    let sw = string_starts_with(item, item2);
    return sw;
  }
  let any = list_any(prefixes, lambda2);
  return any;
}
