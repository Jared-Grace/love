import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { json_equal } from "./json_equal.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_reply_rules_rewrite_changed_show(root, one) {
  arguments_assert(arguments, 2);
  ("Says so, in red, when changing the names and places in a message changed what the rules answer it - and nothing at all when it did not.");
  ("★ THIS IS THE ONE FINDING THE REWRITING WAS FOR, AND IT CANNOT BE FOUND ANY OTHER WAY. A rule that matches a real person's name matches that person and nobody else. Read, it looks like a rule about what somebody wrote; run against the message it was written from, it answers; tested by anybody who tests it on that message, it passes. Only putting a different name in the same sentence tells the two apart, and that is exactly what a rewritten message is.");
  ("The words say what to do about it rather than only that it happened. What is wanted instead is a rule that takes whatever name is in that position rather than one particular name - the grammar can already do that, so this is a rule to be rewritten and not a thing to be lived with.");
  ("It is silent when the answer did not change, which is nearly always. A line that appeared on every case saying nothing had happened would be the reason nobody read the ones where something had.");
  ("It says nothing for a case standing for no real message either. There is nothing to compare, and a rewrite that changed nothing and a comparison that could not be made are not the same fact.");
  let real = property_get(one, "real");
  if (not(real)) {
    return null;
  }
  let answered = property_get(one, "answered");
  let outputs = property_get(one, "outputs");
  let real_answered = property_get(real, "answered");
  let real_outputs = property_get(real, "outputs");
  let same_answered = json_equal(answered, real_answered);
  let same_outputs = json_equal(outputs, real_outputs);
  let same = same_answered && same_outputs;
  if (same) {
    return null;
  }
  let said =
    "changing the names in this message changed the answer, so the rule matching it is keyed on that person rather than on the shape of what they wrote - it should capture whatever name is there instead";
  let line = html_p_text(root, said);
  html_style_font_size(line, "0.7em");
  let red = app_shared_color_red();
  html_font_color_set(line, red);
  return line;
}
