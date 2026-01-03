import { not } from "../../../love/public/src/not.mjs";
import { list_any_starts_with } from "../../../love/public/src/list_any_starts_with.mjs";
export function list_any_starts_with_not(item, prefixes) {
  let b = list_any_starts_with(item, prefixes);
  let any = not(b);
  return any;
}
