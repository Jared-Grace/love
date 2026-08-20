import { js_object_property_getter_set } from "../../js/js_object_property_getter_set.mjs";
import { js_find_object_containing_text } from "../../js/js_find_object_containing_text.mjs";
import { js_call_argument_named_getter_set } from "../../js/js_call_argument_named_getter_set.mjs";
export const example = {
  fn: js_object_property_getter_set.name,
  select: js_find_object_containing_text.name,
  select_args: ["inherit"],
  args: ["padding", "app_shared_spaced_tiny_gap"],
  kind: "transform",
  title: "Route a setting through the name that holds its value",
  note: [
    "The pair to ",
    { fn: js_call_argument_named_getter_set.name },
    ", for the half of the styling here written as a record of settings rather ",
    "than as calls. The same value, the same routing, and until this verb the ",
    "record half stayed a text edit however many verbs existed — which is how one ",
    "file ends up asking for a value by name while the file beside it spells the ",
    "same value out.",
    " ",
    "The record is found by a word written in it, and the setting by its own name, ",
    "so nothing here is a line of code to be worked out.",
  ],
  before: `export function f(container) {
  html_style_assign(container, {
    padding: "0.25em",
    "font-size": "inherit",
  });
}`,
  after: `export function f(container) {
  html_style_assign(container, {
    padding: app_shared_spaced_tiny_gap(),
    "font-size": "inherit",
  });
}`,
};
