import { example_source_link_dom } from "./example_source_link_dom.mjs";
import { example_note_code_style } from "./example_note_code_style.mjs";
import { function_github_url } from "./function_github_url.mjs";
// An inline fn reference inside note prose, as a link to its source on GitHub —
// same light note-code look as example_note_code_dom, but clickable, exactly like
// the FUNCTION chip (both go through example_source_link_dom + function_github_url).
export function example_note_link_dom(parent, fn_name, shown) {
  let link = example_source_link_dom(parent, shown, function_github_url(fn_name));
  example_note_code_style(link);
  return link;
}
