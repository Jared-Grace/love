import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_g_emoji_glow_keyframe } from "./app_g_emoji_glow_keyframe.mjs";
export function app_shared_game_emoji_glow_apply(element) {
  arguments_assert(arguments, 1);
  ("Start the breathing gold-to-white glow on one element - the keyframe put in the page head");
  ("and the animation named on the element, in one call.");
  ("These were two steps at every call site, and the second is a text that has to spell the");
  ("first one's name. Kept apart, a site could go on naming an animation the keyframe no");
  ("longer defines and simply stop glowing, with no error anywhere to say so.");
  ("Gold to white is God's presence. Put it only on something showing God at work.");
  let keyframe = app_g_emoji_glow_keyframe();
  html_style_head(keyframe);
  html_style_set(
    element,
    "animation",
    "emojiGlow 1.6s ease-in-out infinite alternate",
  );
}
