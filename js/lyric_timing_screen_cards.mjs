import { html_style_opacity } from "./html_style_opacity.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_button } from "./html_button.mjs";
export function lyric_timing_screen_cards(parent, on_tap) {
  arguments_assert(arguments, 2);
  ("$plain parent");
  ("The three things a person looks at while timing: how far through they are, the line being sung now, and a big button carrying the line that comes next.");
  ("THE LINE TO TAP IS WRITTEN ON THE BUTTON RATHER THAN BESIDE IT, so that reading and pressing are one act. Somebody doing this is listening, not looking; a button saying Next asks them to hold in their head which line Next means, and that is exactly the thing the ear is busy with. A button carrying the words is pressed when those words are heard.");
  ("The line already sounding sits above it and dimmed, because its whole job is to say the tapping has not drifted. It is a check, never the thing being aimed at, and printing it as boldly as the target is how somebody comes to tap the wrong one.");
  let said = html_p_text(parent, "No passage loaded.");
  let now_card = html_p_text(parent, "");
  html_style_opacity(now_card, "0.55");
  let tap_button = html_button(parent, "", on_tap);
  html_width_full(tap_button);
  html_style_set(tap_button, "min-height", "6em");
  html_style_font_size(tap_button, "1.4em");
  let cards = {
    said,
    now_card,
    tap_button,
  };
  return cards;
}
