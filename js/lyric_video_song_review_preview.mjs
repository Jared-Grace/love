import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { html_clear } from "./html_clear.mjs";
import { fn_name } from "./fn_name.mjs";
import { api_read } from "./api_read.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_song_review_card } from "./lyric_video_song_review_card.mjs";
import { each } from "./each.mjs";
import { html_button_list } from "./html_button_list.mjs";
export async function lyric_video_song_review_preview() {
  "The screen for going through a song's background pictures one after another, on the sandbox app at hash lyric_video_song_review.";
  "EVERY PICTURE IS ON THE PAGE AT ONCE, WHICH IS WHAT SEPARATES THIS FROM WATCHING THE FILM. Judging a drawing against the words sung over it is the film's question, and the film answers it in the order and at the speed it was rendered at; going back to the one that looked wrong means finding that second again. Here the pictures are a list that can be scrolled up as easily as down, and two drawings meant to sit next to each other can be looked at next to each other.";
  "IT NEEDS NO RECORDING AND NO RENDER. A fault found here costs one redraw, and the same fault found after rendering costs the render as well - so the cheap order is to read the pictures before anything is made out of them.";
  "IT IS A SONG AND NOT A PASSAGE, which is the whole reason it is not the psalms' review screen. A psalm's document is found again from the passage it is of; a song's is found by its own name, so the choosing is a list of names read off the disk rather than a book and a chapter.";
  "THE SONGS ARE OFFERED AS BUTTONS RATHER THAN TYPED. There are a handful of them and the names are exact - a typed name that is one letter out says the song has no document, which reads as a fault in the song rather than in the typing.";
  "A SONG WITH NO DOCUMENT SAYS SO. The reader hands back nothing rather than falling over, and a screen that showed an empty list instead would read as a document with no pictures drawn yet.";
  arguments_assert(arguments, 0);
  let root = html_body_div();
  let asked =
    "Choose a song. Every background picture in its document is written out below in the order it is shown: the words sung over it, the drawing, and the prose it was drawn from. Whatever you write goes against that picture.";
  html_p_text(root, asked);
  let chosen = html_div(root);
  let told = app_shared_text_quiet(root, "");
  let cards = html_div(root);
  async function song_show(name) {
    html_clear(cards);
    let f_read = fn_name("lyric_video_song_document_read");
    let document = await api_read(f_read, [name]);
    let none = null_is(document);
    if (none) {
      app_shared_text_quiet(cards, "this song has no document yet");
      return;
    }
    let pictures = property_get(document, "pictures");
    let lines = property_get(document, "lines");
    function card(picture) {
      lyric_video_song_review_card(cards, lines, picture);
    }
    each(pictures, card);
  }
  function name_text(name) {
    return name;
  }
  let f_names = fn_name("lyric_video_song_names");
  let names = await api_read(f_names, []);
  html_button_list(chosen, names, name_text, song_show);
  return told;
}
