import { html_code_element } from "./html_code_element.mjs";
import { example_html } from "./example_html.mjs";
import { examples_style } from "./examples_style.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function examples_body_html(examples) {
  let heading = html_code_element("h1", {}, "Transform examples");
  let cards = list_map(examples, example_html);
  let cards_joined = list_join_empty(cards);
  let style = examples_style();
  let r = text_combine_multiple([style, heading, cards_joined]);
  return r;
}
