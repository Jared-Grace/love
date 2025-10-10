import { not } from "../../../love/public/src/not.mjs";
import { string_empty_is } from "../../../love/public/src/string_empty_is.mjs";
export function string_empty_not_is(name) {
  let a = string_empty_is(name);
  const ne = not(a);
  return ne;
}
