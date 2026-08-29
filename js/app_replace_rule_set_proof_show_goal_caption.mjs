import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_span_text_deemphasized } from "./html_span_text_deemphasized.mjs";
export function app_replace_rule_set_proof_show_goal_caption(parent) {
  "The tick and the word Goal set under the last line of the proof, saying that this line is the one the whole derivation was for.";
  "IT IS SET APART BY A GAP ABOVE IT rather than by a rule or a colour, because the lines above it are already a rail of tiles and one more coloured thing would read as another step rather than as the end of them.";
  "IT IS SAID QUIETLY, in the de-emphasized style, because the proof itself is what a person is reading and this only names where it arrived.";
  arguments_assert(arguments, 1);
  let goal_caption = html_div(parent);
  html_centered(goal_caption);
  let value = app_shared_spaced_gap();
  html_style_margin_top(goal_caption, value);
  let e = emoji_check();
  let goal_text = text_combine_multiple([e, " Goal"]);
  html_span_text_deemphasized(goal_caption, goal_text);
}
