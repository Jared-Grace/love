import { property_get } from "./property_get.mjs";
import { app_bible_record_inline_playback } from "./app_bible_record_inline_playback.mjs";
import { app_bible_record_inline_path } from "./app_bible_record_inline_path.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
export async function app_bible_record_inline(
  parent,
  chapter_code,
  verse_numbers,
  project_ensure,
  chapter,
  entry,
) {
  "$plain chapter_code";
  "chapter is shared by every recorder in the chapter - {reference, entries, refreshes}: the chapter's name as read (Psalm 1), one entry per passage in verse order, and each recorder's redraw; entry is this passage's own {verse_numbers, blob}.";
  "The recorder for one passage, drawn right under it rather than on a screen of its own (asked for by the human 2026-11-22): the camera picture appears in place, and buttons sit beneath - show camera, record, stop, send; the take plays from its own video.";
  "A BUTTON THAT CANNOT BE PRESSED NOW IS FADED, NOT TAKEN AWAY, using the one disabled look every app here shares, so the buttons never move and a finger already over Stop finds it where it was. Show camera is faded while the camera is on; Record is faded until the camera is on, and while recording; Stop is faded unless recording; Send is faded until there is a take and nothing is recording.";
  "RECORDING AGAIN REPLACES THE TAKE: the old one is thrown away the moment a new one starts, so there is only ever one take per passage to play back or send, and the button says Record again once there is one.";
  "Recording can only start once the preview is showing, so the video does not open on black frames from before the camera woke. Stopping turns the camera and microphone off, so the phone's recording light goes off with it.";
  "What is recorded is the canvas, not the camera: each frame is the camera's picture with the passage drawn over it, so the saved video carries the words exactly as they were shown. The microphone's sound is added to it.";
  "project_ensure is handed what to do once a project is chosen, because nothing is recorded until there is one to put it in.";
  "Sending asks for signing in first, the first time only, because only the owner may add recordings - a recording sent up becomes a video posted to YouTube with nobody looking at it again, so a stranger must not be able to send one.";
  arguments_assert(arguments, 6);
  let r = app_bible_record_inline_playback(parent);
  let playback = property_get(r, "playback");
  let canvas_element = property_get(r, "canvas_element");
  let canvas = property_get(r, "canvas");
  let camera_element = property_get(r, "camera_element");
  let playback_element = html_component_element_get(playback);
  playback_element.controls = true;
  playback_element.playsInline = true;
  html_style_assign(playback, {
    height: "60vh",
    width: "auto",
    "max-width": "100%",
    margin: "0 auto",
  });
  html_display_none(playback);
  ("HOW MANY PASSAGES OF THE CHAPTER HAVE A VIDEO is said right under the video, in the page, scrolling away with it (human 2026-11-24: x of x passages have a video for Psalm 1, underneath the video and not fixed). It is the same count the chapter download is offered by, so a count that is wrong can be seen rather than guessed at. REJECTED: the top bar, where it stood first - it stays on screen while the reader scrolls, and it was away from the video it counts.");
  let count_line = html_p_text(parent, "");
  let buttons = html_div(parent);
  let problem = html_p_text(parent, "");
  ("SIGNING IN GETS A PLACE OF ITS OWN: the sign-in empties the place it is shown in, both before and after, so shown where the buttons are it took them away for good (human 2026-11-23: after sending, the buttons were gone until another passage was opened).");
  let sign_in = html_div(parent);
  await app_bible_record_inline_path(
    buttons,
    chapter,
    entry,
    count_line,
    verse_numbers,
    chapter_code,
    playback,
    playback_element,
    problem,
    project_ensure,
    camera_element,
    canvas,
    canvas_element,
    sign_in,
  );
}
