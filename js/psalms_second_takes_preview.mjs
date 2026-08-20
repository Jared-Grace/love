import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_style_background } from "./html_style_background.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_font_set } from "./html_font_set.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { psalms_videos_same_passage_pairs } from "./psalms_videos_same_passage_pairs.mjs";
import { psalms_second_take_pair_row } from "./psalms_second_take_pair_row.mjs";
export function psalms_second_takes_preview() {
  "Every passage this channel has sung twice, on the sandbox app at the hash second_takes, with a link to each of the two singings so they can be heard one after the other on a phone.";
  "It is here to be listened to and then closed. Which of two takes a chapter should carry is the singer's judgement and no code can reach it, so this page carries the listening to where the judgement is made and stops there - it offers nothing to click that would change anything.";
  "The pairs are read from one place rather than written out here, so that a passage sung a third time appears on this page by being sung, and not by anybody remembering to come back and add it.";
  arguments_assert(arguments, 0);
  let root = html_body_div();
  html_style_background(root, "#0b0b0b");
  html_style_set(root, "color", "#ffffff");
  html_font_set(root, "system-ui, sans-serif");
  html_style_set(root, "min-height", "100vh");
  html_style_padding(root, "16px");
  let heading = html_p_text(root, "sung twice");
  html_style_set(heading, "font-size", "20px");
  html_style_set(heading, "margin", "0");
  let said = html_p_text(
    root,
    "each of these passages has two separate recordings - hear both, and keep the one you want the chapter to carry",
  );
  html_style_set(said, "color", "#aaaaaa");
  for (let pair of psalms_videos_same_passage_pairs()) {
    psalms_second_take_pair_row(root, pair);
  }
}
