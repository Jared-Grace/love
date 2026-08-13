import { fn_name } from "./fn_name.mjs";
export function hash_fields_guard_names() {
  "The two functions that read a link back to the reader when it names something the page cannot make sense of. Reaching either one is what counts as a page having answered for its own link.";
  "Only the two general ones are named, never the wrappers a page actually calls, because the wrappers all end at one of these and a walk of the imports arrives here whichever road it took. So a page that grows a new wrapper of its own is counted as guarded without anybody remembering to add its name to a list.";
  let shown = fn_name("app_shared_hash_fields_unknown_shown_is");
  let page_shown = fn_name("app_shared_hash_fields_unknown_page_shown_is");
  let names = [shown, page_shown];
  return names;
}
