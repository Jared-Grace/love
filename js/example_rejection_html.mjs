import { property_get } from "./property_get.mjs";
import { html_escape } from "./html_escape.mjs";
import { html_code_element } from "./html_code_element.mjs";
import { example_code_block_html } from "./example_code_block_html.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function example_rejection_html(example) {
  let title = property_get(example, "title");
  let note = property_get(example, "note");
  let call = property_get(example, "call");
  let expect_text = property_get(example, "expectText");
  let heading = html_code_element("h2", {}, html_escape(title));
  let note_html = html_code_element("p", { class: "note" }, html_escape(note));
  let call_block = example_code_block_html(call, "call");
  let expect_html = html_code_element(
    "div",
    { class: "expect" },
    html_escape(expect_text),
  );
  let inner = text_combine_multiple([
    heading,
    note_html,
    call_block,
    expect_html,
  ]);
  let r = html_code_element(
    "article",
    { class: "example rejection" },
    inner,
  );
  return r;
}
