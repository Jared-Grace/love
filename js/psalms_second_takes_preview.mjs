import { psalms_videos_verse_mislabelled } from "./psalms_videos_verse_mislabelled.mjs";
import { psalms_verse_mislabelled_row } from "./psalms_verse_mislabelled_row.mjs";
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
  "What came of the titles that turned up twice on this channel, on the sandbox app at the hash second_takes: the one passage that really was sung twice, and the six songs that only looked like a second singing because their title names the wrong verse.";
  "It is here to be listened to and then closed. Which of two takes a chapter should carry is the singer's judgement, and so is whether to rename a song - no code can reach either, so this page carries the listening to where the judgement is made and stops there. It offers nothing to click that would change anything.";
  "Both lists are read from one place rather than written out here, so that a passage sung a third time appears on this page by being sung, and a title once corrected leaves it by being corrected, without anybody remembering to come back and edit this.";
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
    "two separate recordings of the same verses - hear both, and keep the one you want the chapter to carry",
  );
  html_style_set(said, "color", "#aaaaaa");
  for (let pair of psalms_videos_same_passage_pairs()) {
    psalms_second_take_pair_row(root, pair);
  }
  let wrong = html_p_text(root, "titled wrong");
  html_style_set(wrong, "font-size", "20px");
  html_style_set(wrong, "margin", "32px 0 0 0");
  let told = html_p_text(
    root,
    "these looked sung twice, but each one is a different verse wearing somebody else's title - the words underneath are what youtube heard in it",
  );
  html_style_set(told, "color", "#aaaaaa");
  for (let entry of psalms_videos_verse_mislabelled()) {
    psalms_verse_mislabelled_row(root, entry);
  }
}
