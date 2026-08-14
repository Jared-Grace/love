import { app_replace_why_symbol_tile } from "./app_replace_why_symbol_tile.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_replace_rule_set_replace() {
  function why(parent) {
    html_span_text(parent, "Every ");
    app_replace_why_symbol_tile(parent, "a");
    html_span_text(parent, " can turn into a ");
    app_replace_why_symbol_tile(parent, "b");
    html_span_text(parent, ", one at a time, and you choose which one. Some goals want every ");
    app_replace_why_symbol_tile(parent, "a");
    html_span_text(parent, " changed, some want only a few - so read the goal before you start pressing.");
  }
  let r = {
    name: "Replace",
    rules: ["a > b"],
    goals: [
      {
        start: "a",
        end: "b",
      },
      {
        start: "a   a",
        end: "b   b",
      },
      {
        start: "a   a   a",
        end: "b   b   b",
      },
      {
        start: "a   a   a   a",
        end: "a   b   b   a",
      },
      {
        start: "a   a   a   a   a   a   a",
        end: "a   b   a   b   a   b   a",
      },
    ],
    why,
  };
  return r;
}
