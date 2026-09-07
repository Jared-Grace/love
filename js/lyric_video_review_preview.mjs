import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_input_label_placeholder_wide } from "./html_input_label_placeholder_wide.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { lyric_timing_chosen_recalled } from "./lyric_timing_chosen_recalled.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { api_read } from "./api_read.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { list_size } from "./list_size.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { lyric_timing_screen_choose } from "./lyric_timing_screen_choose.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { html_video_controls } from "./html_video_controls.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { html_input_file_video } from "./html_input_file_video.mjs";
import { html_div } from "./html_div.mjs";
import { html_media_time } from "./html_media_time.mjs";
import { lyric_video_picture_at_seconds } from "./lyric_video_picture_at_seconds.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_review_notes } from "./lyric_video_review_notes.mjs";
import { html_on } from "./html_on.mjs";
export async function lyric_video_review_preview() {
  "The screen for watching a rendered lyric video and saying what is wrong with the picture behind the words, on the sandbox app at hash lyric_video_review.";
  "THE VIDEO IS WATCHED OUT OF THE MACHINE IT WAS RENDERED ON AND IS NEVER UPLOADED. A rendered psalm is hundreds of megabytes, so sending it anywhere before it could be played would put minutes between the press and the first line; and the whole point of watching is that it is being watched now.";
  "THE PICTURES COME FROM THE DOCUMENT AND THE MOMENT COMES FROM THE PLAYER, and nothing here tries to read the picture off the screen. The document already says which picture covers which seconds - that is what was rendered from - so asking it is exact where looking at the frame would be a guess.";
  "THE BOX IS REDRAWN ONLY WHEN THE PICTURE CHANGES AND NOT ON EVERY TICK. A player says how far it has got several times a second, and rebuilding the box that often would take away whatever was half typed in it every quarter of a second - which is to say the box could never be used at all.";
  "A MOMENT WITH NO PICTURE SAYS SO AND OFFERS NO BOX. Words on black is a finished part of a document rather than a fault, and a box offered there would file a complaint against nothing.";
  "IT OPENS ON THE PASSAGE THIS DEVICE WAS LAST TIMING, which is the same one the timing screen opens on and is remembered in the same place. Timing a psalm and then watching it are the two halves of one sitting, so arriving at the second half already pointed at the psalm just timed is right rather than a coincidence.";
  "THE LOADING IS ASKED FOR LAST, once every part of the screen it writes into exists.";
  arguments_assert(arguments, 0);
  let root = html_body_div();
  let asked =
    "Choose a passage, then open the video you rendered for it. As it plays, the picture behind the words is named under the player, and whatever you write goes against that picture.";
  html_p_text(root, asked);
  let version_input = html_input_label_placeholder_wide(
    root,
    "Translation",
    "bsb",
  );
  html_value_set(version_input, "bsb");
  let chosen = lyric_timing_chosen_recalled();
  let desk = {
    pictures: [],
    showing: null,
  };
  async function on_settled() {
    let version = html_value_get(version_input);
    let f_pictures = fn_name("lyric_video_bible_document_pictures");
    let pictures = await api_read(f_pictures, [
      version,
      chosen.book_code,
      chosen.chapter_number,
    ]);
    desk.pictures = pictures;
    desk.showing = null;
    html_clear(box);
    html_text_set(named, "");
    let count = list_size(pictures);
    let counted = text_from_number(count);
    let said = text_combine_multiple([counted, " pictures in this document"]);
    html_text_set(told, said);
    return pictures;
  }
  lyric_timing_screen_choose(root, version_input, chosen, on_settled);
  let told = app_shared_text_quiet(root, "");
  let player = html_video_controls(root);
  function on_file(file) {
    html_media_source_file_set(player, file);
  }
  html_input_file_video(root, on_file);
  let named = app_shared_text_quiet(root, "");
  let box = html_div(root);
  function watched() {
    let seconds = html_media_time(player);
    let found = lyric_video_picture_at_seconds(desk.pictures, seconds);
    let same = equal(found, desk.showing);
    if (same) {
      return;
    }
    desk.showing = found;
    html_clear(box);
    let none = null_is(found);
    if (none) {
      html_text_set(named, "no picture here - the words are on black");
      return;
    }
    let scene = property_get(found, "scene");
    html_text_set(named, scene);
    lyric_video_review_notes(box, found);
  }
  html_on(player, "timeupdate", watched);
  await on_settled();
  return desk;
}
