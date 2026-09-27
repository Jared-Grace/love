import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { emoji_party_popper } from "./emoji_party_popper.mjs";
import { emoji_party_face } from "./emoji_party_face.mjs";
import { emoji_trophy } from "./emoji_trophy.mjs";
import { emoji_medal_star } from "./emoji_medal_star.mjs";
import { emoji_clap } from "./emoji_clap.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_spaced_large_gap } from "./app_shared_spaced_large_gap.mjs";
export function app_code_celebration(parent, message) {
  "$plain message";
  "the large celebration drawn when a learner finishes something: an enlarged green success message, then the line handed in, centered and wrapped on each side with one celebration emoji chosen at random, with generous vertical spacing (more under the line than the green message)";
  "ONE CELEBRATION, whatever was finished - the end of a review and the end of everything available were drawn the same way on purpose, so a learner reads the second as the same kind of moment as the first, only bigger in what it says";
  "SMALLER THAN IT WAS: the whole celebration was brought down a size, on the home screen and at the end of a review alike, at the human's request, 2026-09-27";
  arguments_assert(arguments, 2);
  let celebration = html_div(parent);
  let celebration_size = "clamp(1.1rem, 4vw, 1.3rem)";
  html_style_font_size(celebration, celebration_size);
  let green = app_shared_success_message(celebration);
  let value = app_shared_spaced_gap();
  html_style_margin_y(green, value);
  let emojis = [
    emoji_party_popper,
    emoji_party_face,
    emoji_trophy,
    emoji_medal_star,
    emoji_clap,
  ];
  let emoji_get = list_random_item(emojis);
  let emoji = emoji_get();
  let nb = text_space_nb();
  let text = text_combine_multiple([emoji, nb, message, nb, emoji]);
  let line = html_div_text(celebration, text);
  html_centered(line);
  let value2 = app_shared_spaced_large_gap();
  html_style_margin_y(line, value2);
  return celebration;
}
