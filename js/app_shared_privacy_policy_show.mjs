import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_privacy_policy_paragraphs } from "./app_shared_privacy_policy_paragraphs.mjs";
import { app_shared_privacy_policy_part_show } from "./app_shared_privacy_policy_part_show.mjs";
import { app_shared_privacy_policy_updated } from "./app_shared_privacy_policy_updated.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_spaced_large_gap } from "./app_shared_spaced_large_gap.mjs";
import { html_p } from "./html_p.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_bold } from "./html_bold.mjs";
export function app_shared_privacy_policy_show(root) {
  "The privacy policy written into whatever box it is handed, heading and all.";
  "It takes a box rather than making a page, because the policy has to be able to appear in two places at once: at its own address, where a stranger who has never opened an app can be sent to read it, and inside an app next to the screen that asks somebody to type a message. Those are the same words and must never be two sets of words that drift apart, so the drawing of them is one thing with a name and the page is only a caller.";
  "The day it last changed is drawn apart from the rest, stepped back and after a gap, because it is the only line that is not a promise about what the code does. Left in the run of them it reads as one more claim to check, when what it is for is telling a reader who has read the policy before whether they have to read it again.";
  arguments_assert(arguments, 1);
  let heading = html_p_text(root, "Privacy policy");
  html_bold(heading);
  for (let parts of app_shared_privacy_policy_paragraphs()) {
    let paragraph = html_p(root);
    for (let part of parts) {
      app_shared_privacy_policy_part_show(paragraph, part);
    }
  }
  let text = app_shared_privacy_policy_updated();
  let updated = html_p_text(root, text);
  app_shared_text_deemphasized(updated);
  let value = app_shared_spaced_large_gap();
  html_style_margin_top(updated, value);
}
