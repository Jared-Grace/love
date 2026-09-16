import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { lyric_video_picture_lines } from "./lyric_video_picture_lines.mjs";
import { lyric_video_review_lines } from "./lyric_video_review_lines.mjs";
import { lyric_video_picture_url } from "./lyric_video_picture_url.mjs";
import { html_img } from "./html_img.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { lyric_video_review_notes } from "./lyric_video_review_notes.mjs";
export function lyric_video_song_review_card(parent, lines, picture) {
  "$plain parent";
  "$plain lines";
  "$plain picture";
  "One background picture of a song written out to be judged: the words sung over it, the drawing itself, the prose it was drawn from, and the box for saying what is wrong with it.";
  "THE THREE THINGS ARE ON THE SCREEN TOGETHER BECAUSE NONE OF THEM ANSWERS THE QUESTION ALONE. Whether a drawing belongs behind these words cannot be told from the drawing; whether the drawing came out as asked cannot be told without the asking. A reviewer given any two of the three is answering from memory of the third.";
  "THE WORDS COME FIRST AND THE PROSE LAST. The verses are what the judgment is made against; the description is only how the drawing came to be, and it is a paragraph long, so putting it first would push the drawing off a phone screen.";
  "THE DRAWING IS FETCHED BY ADDRESS AND NEVER HANDED OVER AS TEXT. Each one is a few megabytes, and these are read on a phone.";
  "THE NAME IS SHOWN, because a note written here is acted on by somebody at a keyboard who has to find the picture in the document, and the name is what they search for. It is also the one thing that changes when a picture is redrawn, so it says which attempt is on the screen.";
  arguments_assert(arguments, 3);
  let card = html_div(parent);
  html_style_assign(card, {
    "margin-top": "24px",
    "padding-top": "12px",
    "border-top": "1px solid #8888",
  });
  let name = property_get(picture, "name");
  html_div_text(card, name);
  let over = lyric_video_picture_lines(lines, picture);
  lyric_video_review_lines(card, over);
  let url = lyric_video_picture_url(picture);
  let drawing = html_img(card, url);
  html_style_assign(drawing, {
    width: "100%",
    "max-height": "60vh",
    "object-fit": "contain",
    "margin-top": "8px",
  });
  let scene = property_get(picture, "scene");
  app_shared_text_quiet(card, scene);
  lyric_video_review_notes(card, picture);
  return card;
}
