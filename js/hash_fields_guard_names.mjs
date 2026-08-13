import { fn_name } from "./fn_name.mjs";
export function hash_fields_guard_names() {
  "The functions that read a link back to the reader when it names something the page cannot make sense of. Reaching any one of them is what counts as a page having answered for its own link.";
  "Only the general ones are named, never the wrappers a page actually calls, because the wrappers all end at one of these and a walk of the imports arrives here whichever road it took. So a page that grows a new wrapper of its own is counted as guarded without anybody remembering to add its name to a list.";
  "The one that only tells is named beside the two that tell and stop, because a field that can only be checked after a fetch is answered for by a page that carries on drawing. Leaving it out would say such a page had not answered for its link when it had.";
  let shown = fn_name("app_shared_hash_fields_unknown_shown_is");
  let page_shown = fn_name("app_shared_hash_fields_unknown_page_shown_is");
  let told = fn_name("app_shared_hash_fields_unknown_told_is");
  let names = [shown, page_shown, told];
  return names;
}
