import { js_bundle_chunk_ids_regex } from "./js_bundle_chunk_ids_regex.mjs";
import { list_unique } from "./list_unique.mjs";
import { null_is } from "./null_is.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
export function js_bundle_chunk_ids(text) {
  "$plain text";
  "Every extra script a built app will send for while it is running, named by the number the build gave it.";
  "A build is free to cut part of an app out into a script of its own, left behind rather than carried, and to fetch it only when it is first wanted. The built app then carries the number of that script written into it, and this reads those numbers back out.";
  "Asking the built app is the only way to know. The number is the build's own choice and is not written down anywhere else, so two builds of one unchanged app can name the same piece differently and both be right.";
  "The same script is often sent for from more than one place, so each number is answered once.";
  let regex = js_bundle_chunk_ids_regex();
  let found = text_regex_match(text, regex);
  let none = null_is(found);
  if (none) {
    let r = [];
    return r;
  }
  let ids = list_unique(found);
  return ids;
}
