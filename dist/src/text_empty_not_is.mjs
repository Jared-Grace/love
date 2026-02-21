import { not } from "../../../love/public/src/not.mjs";
import { text_empty_is } from "../../../love/public/src/text_empty_is.mjs";
export function text_empty_not_is(name) {
  let a = text_empty_is(name);
  const ne = not(a);
  return ne;
}
