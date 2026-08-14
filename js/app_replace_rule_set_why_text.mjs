import { html_draw_lambda_text } from "./html_draw_lambda_text.mjs";
import { property_get } from "./property_get.mjs";
import { text_is } from "./text_is.mjs";
export function app_replace_rule_set_why_text(rule_set) {
  "The explanation of a set of rules as plain words, whichever way it was written: a sentence comes back as it stands, and a drawing program is run against stand-in elements to see what it would have said.";
  let why = property_get(rule_set, "why");
  if (text_is(why)) {
    return why;
  }
  let r = html_draw_lambda_text(why);
  return r;
}
