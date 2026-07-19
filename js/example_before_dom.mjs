import { text_empty_is } from "./text_empty_is.mjs";
import { example_code_block_dom } from "./example_code_block_dom.mjs";
import { example_code_block_shell_dom } from "./example_code_block_shell_dom.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
// Render a transform's "before" region. Real code is highlighted; an empty before
// (a brand-new file) shows a plain placeholder in the same dark shell — it is prose,
// so it is NOT fed through the code highlighter (which would fail to tokenize it
// and log noise). Same look, no failed tokenize.
export function example_before_dom(parent, before) {
  if (text_empty_is(before)) {
    let block = example_code_block_shell_dom(parent);
    html_text_content_set(block, "(nothing yet — new file)");
    return block;
  }
  return example_code_block_dom(parent, before);
}
