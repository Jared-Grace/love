import { app_replace_rule_set_why_draw } from "./app_replace_rule_set_why_draw.mjs";
import { html_draw_lambda_text } from "./html_draw_lambda_text.mjs";
import { property_get } from "./property_get.mjs";
export function app_replace_rule_set_why_text(rule_set) {
  "The words a learner reads under the title of a set of rules, whichever way the explanation was written.";
  "It is drawn against stand-in elements and read back rather than taken from the source, so the answer is what the page says and not what the source spells - the quote marks around a symbol never reach the page, and a drawing program has no source to read at all.";
  let why = property_get(rule_set, "why");
  function draw(parent) {
    app_replace_rule_set_why_draw(parent, why);
  }
  let r = html_draw_lambda_text(draw);
  return r;
}
