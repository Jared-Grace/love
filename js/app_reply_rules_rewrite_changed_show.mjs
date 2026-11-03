import { arguments_assert } from "./arguments_assert.mjs";
import { app_reply_rules_rewrite_changed_is } from "./app_reply_rules_rewrite_changed_is.mjs";
import { not } from "./not.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_reply_rules_rewrite_changed_show(root, one) {
  arguments_assert(arguments, 2);
  ("Says so, in red, when a test and the real message it stands for get different answers - and nothing at all when they do not.");
  ("★ IT SAYS WHAT HAPPENED AND NOT WHY, because the difference does not prove why. It used to blame a rule keyed on one person's name; measured 2026-11-03 the only two cases it fired on were not that - one rewrite swapped no names at all, the other had welded words the rules could not read in the real message.");
  ("★ THIS IS THE ONE FINDING THE REWRITING WAS FOR, AND IT CANNOT BE FOUND ANY OTHER WAY. A rule that matches a real person's name matches that person and nobody else. Read, it looks like a rule about what somebody wrote; run against the message it was written from, it answers; tested by anybody who tests it on that message, it passes. Only putting a different name in the same sentence tells the two apart, and that is exactly what a rewritten message is.");
  ("It is silent when the answer did not change, which is nearly always. A line that appeared on every case saying nothing had happened would be the reason nobody read the ones where something had.");
  ("It says nothing for a case standing for no real message either. There is nothing to compare, and a rewrite that changed nothing and a comparison that could not be made are not the same fact.");
  let changed = app_reply_rules_rewrite_changed_is(one);
  if (not(changed)) {
    return null;
  }
  let said = "the real message gets a different answer from this test";
  let line = html_p_text(root, said);
  html_style_font_size(line, "0.7em");
  let red = app_shared_color_red();
  html_font_color_set(line, red);
  return line;
}
