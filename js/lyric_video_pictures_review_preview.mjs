import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div_page_dark } from "./html_body_div_page_dark.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { text_loading_said } from "./text_loading_said.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { api_read } from "./api_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_parent_waiting_run } from "./html_parent_waiting_run.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { lyric_video_song_review_card } from "./lyric_video_song_review_card.mjs";
import { each_async } from "./each_async.mjs";
import { html_button_list } from "./html_button_list.mjs";
export async function lyric_video_pictures_review_preview() {
  "The screen for going through one psalm's background pictures one after another, on the sandbox app at hash lyric_video_pictures_review.";
  "EVERY PICTURE IS ON THE PAGE AT ONCE, AND NOTHING HAS TO BE PLAYING. The psalm screen beside this one shows the picture the song is on at that second, which is the right shape for judging a rendered film and the wrong one for reading a chapter's drawings: it wants the recording to hand, it shows one picture at a time, and going back to the one that looked wrong means finding that second again.";
  "IT IS THE SONG SCREEN'S SHAPE POINTED AT A PSALM, and it draws each picture with that screen's own band, so the two cannot drift into looking like two ways of asking one question. What differs is only where the document comes from - a song is found by its own name, a psalm by the one it is filed under.";
  "THE CHAPTERS ARE OFFERED AS BUTTONS RATHER THAN TYPED. The names are exact and there are a few dozen of them, and a typed name one letter out says the chapter has no pictures, which reads as a fault in the drawing rather than in the typing.";
  "IT NEEDS NO RECORDING AND NO RENDER. A fault found here costs one redraw, and the same fault found after rendering costs the render as well - so the cheap order is to read the pictures before anything is made out of them.";
  arguments_assert(arguments, 0);
  let root = html_body_div_page_dark();
  let asked =
    "Choose a chapter. Every background picture in its document is written out below in the order it is shown: the words sung over it, the drawing, and the prose it was drawn from. Whatever you write goes against that picture.";
  html_p_text(root, asked);
  let chosen = html_div(root);
  let told = app_shared_text_quiet(root, "");
  let cards = html_div(root);
  async function document_show(name) {
    "THE WAIT FOR THE DOCUMENT IS SAID IN THE PLACE THE PICTURES GO. Emptying that place and then asking the server left it blank for the whole of the fetch, and a part of the screen that goes empty and stays empty is what a button that did nothing also looks like - so the one move left to a person is to press it again, which is the wrong move against a press that was merely slow. The line names the chapter, so pressing one chapter's button and pressing another's do not read the same.";
    let what = text_combine_multiple(["the pictures of ", name]);
    let waiting_said = text_loading_said(what);
    async function document_ask() {
      let fetched_document = await api_read(
        fn_name("lyric_video_document_name_read"),
        [name],
      );
      return fetched_document;
    }
    let document = await html_parent_waiting_run(
      cards,
      waiting_said,
      document_ask,
    );
    let none = null_is(document);
    if (none) {
      app_shared_text_quiet(cards, "this chapter has no document yet");
      return;
    }
    let pictures = property_get(document, "pictures");
    let lines = property_get(document, "lines");
    let count = list_size(pictures);
    let counted = text_from_number(count);
    let said = text_combine_multiple([counted, " pictures in ", name]);
    html_text_set(told, said);
    ("THE CARDS ARE DRAWN ONE AT A TIME AND WAITED FOR, BECAUSE EACH ONE FETCHES ITS OWN DRAWING. Started all at once and waited for by nobody, they finished in whatever order the network handed them back, so the pictures landed on the page out of the order the chapter shows them in - and the one thing this screen is for is reading them in that order. A card that failed to fetch also went off outside every catch and the screen said nothing about it.");
    async function card(picture) {
      await lyric_video_song_review_card(cards, lines, picture);
    }
    await each_async(pictures, card);
  }
  function name_text(name) {
    return name;
  }
  let names = await api_read(fn_name("lyric_video_document_names"), []);
  html_button_list(chosen, names, name_text, document_show);
  return root;
}
