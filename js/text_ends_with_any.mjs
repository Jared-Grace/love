import { list_any } from "./list_any.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export function text_ends_with_any(s, suffixes) {
  function lambda(suffix) {
    let ew = text_ends_with(s, suffix);
    return ew;
  }
  let any = list_any(suffixes, lambda);
  return any;
}
