import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_element } from "./html_element.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_bible_record_passage } from "./app_bible_record_passage.mjs";
import { property_get } from "./property_get.mjs";
import { html_camera_microphone_stream_upright } from "./html_camera_microphone_stream_upright.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_bible_record_frame_size } from "./app_bible_record_frame_size.mjs";
import { html_request_animation_frame } from "./html_request_animation_frame.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_canvas_draw_cover } from "./html_canvas_draw_cover.mjs";
import { html_canvas_draw_contain } from "./html_canvas_draw_contain.mjs";
import { app_bible_record_text_draw } from "./app_bible_record_text_draw.mjs";
import { html_media_recorder_start } from "./html_media_recorder_start.mjs";
import { null_is } from "./null_is.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { firebase_auth_ensure } from "./firebase_auth_ensure.mjs";
import { app_bible_record_clip_path } from "./app_bible_record_clip_path.mjs";
import { firebase_upload_blob_browser } from "./firebase_upload_blob_browser.mjs";
export function app_bible_record_inline(
  parent,
  chapter_code,
  verse_numbers,
  project_ensure,
) {
  "$plain chapter_code";
  "The recorder for one passage, drawn right under it rather than on a screen of its own (asked for by the human 2026-11-22): the camera picture appears in place, and five buttons sit beneath - show camera, record, stop, play back, send.";
  "A BUTTON THAT CANNOT BE PRESSED NOW IS FADED, NOT TAKEN AWAY, using the one disabled look every app here shares, so the five never move and a finger already over Stop finds it where it was. Show camera is faded while the camera is on; Record is faded until the camera is on, and while recording; Stop is faded unless recording; Play back and Send are faded until there is a take and nothing is recording.";
  "RECORDING AGAIN REPLACES THE TAKE: the old one is thrown away the moment a new one starts, so there is only ever one take per passage to play back or send, and the button says Record again once there is one.";
  "Recording can only start once the preview is showing, so the video does not open on black frames from before the camera woke. Stopping turns the camera and microphone off, so the phone's recording light goes off with it.";
  "What is recorded is the canvas, not the camera: each frame is the camera's picture with the passage drawn over it, so the saved video carries the words exactly as they were shown. The microphone's sound is added to it.";
  "project_ensure is handed what to do once a project is chosen, because nothing is recorded until there is one to put it in.";
  "Sending asks for signing in first, the first time only, because only the owner may add recordings - a recording sent up becomes a video posted to YouTube with nobody looking at it again, so a stranger must not be able to send one.";
  arguments_assert(arguments, 4);
  let area = html_div(parent);
  let camera_video = html_element(area, "video");
  let camera_element = html_component_element_get(camera_video);
  camera_element.muted = true;
  camera_element.playsInline = true;
  html_display_none(camera_video);
  let canvas = html_element(area, "canvas");
  let canvas_element = html_component_element_get(canvas);
  ("the preview is drawn at the upright shape the video really has, centred, rather than stretched across the full width - a full-width box capped in height left the upright frame floating between thick black bars, so it did not look like what it records (human 2026-11-23)");
  html_style_assign(canvas, {
    height: "60vh",
    width: "auto",
    "max-width": "100%",
    margin: "0 auto",
  });
  html_display_none(canvas);
  let playback = html_element(area, "video");
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
  let buttons = html_div(parent);
  let problem = html_p_text(parent, "");
  let camera_on = false;
  let stop = null;
  let stream = null;
  let blob = null;
  let sent = false;
  ("A PREVIEW COMES FIRST (asked for by the human 2026-11-23): the camera opens on its own button and shows the very frame that will be recorded - picture, fit and text band - so the face and the light are set right before a take starts, rather than discovered on playback.");
  let camera_button = app_shared_button_wide(
    buttons,
    "Show camera",
    camera_show,
  );
  let record_button = app_shared_button_wide(buttons, "", record);
  let stop_button = app_shared_button_wide(buttons, "Stop recording", finish);
  let play_button = app_shared_button_wide(buttons, "Play back", play);
  let send_button = app_shared_button_wide(buttons, "", send);
  function refresh() {
    let recording = null_not_is(stop);
    let have = null_not_is(blob);
    let ready = have && not(recording);
    app_shared_button_disabled_set(camera_button, camera_on);
    app_shared_button_disabled_set(record_button, not(camera_on) || recording);
    let disabled = not(recording);
    app_shared_button_disabled_set(stop_button, disabled);
    let disabled2 = not(ready);
    app_shared_button_disabled_set(play_button, disabled2);
    app_shared_button_disabled_set(send_button, not(ready) || sent);
    html_text_set(record_button, have ? "Record again" : "Record this passage");
    html_text_set(send_button, sent ? "Sent" : "Send this recording");
  }
  refresh();
  async function camera_show() {
    if (camera_on) {
      return;
    }
    camera_on = true;
    playback_element.pause();
    html_display_none(playback);
    refresh();
    let passage = await app_bible_record_passage(chapter_code, verse_numbers);
    let reference = property_get(passage, "reference");
    let text = property_get(passage, "text");
    ("A CAMERA THAT WILL NOT OPEN SAYS WHY, under the buttons, and Show camera comes back so it can be tried again (human 2026-11-23: the camera isn't working on computer - and nothing on the page said why). The usual reasons are all outside this page - an address that is not https, permission refused, no camera, or another program holding it - so the browser's own words are shown as they are.");
    html_text_set(problem, "");
    let tried = "";
    try {
      let opened = await html_camera_microphone_stream_upright();
      stream = property_get(opened, "stream");
      tried = property_get(opened, "tried");
    } catch (e) {
      camera_on = false;
      let said = text_combine("The camera did not open: ", e.message);
      html_text_set(problem, said);
      refresh();
      return;
    }
    camera_element.srcObject = stream;
    camera_element.play();
    html_display_block(canvas);
    ("every take is upright 9:16 whatever shape the camera sends, so it can go up as a YouTube Short");
    ("THE WHOLE CAMERA PICTURE IS SHOWN, never cropped (human 2026-11-23: camera is very zoomed in on my face). Filling the upright frame from a wide camera picture keeps only its middle third, which is a close-up of a face. So the picture is fitted inside the frame and the rest left black - the text band then sits on the black below it rather than across the face.");
    ("REJECTED: cropping to fill (what this replaced) - the zoom it causes is the complaint. Asking the camera for an upright picture instead - a browser treats the request as a wish, and a phone that still sends a wide picture would be cropped again.");
    let size = app_bible_record_frame_size();
    let width = property_get(size, "width");
    let height = property_get(size, "height");
    canvas_element.width = width;
    canvas_element.height = height;
    let ctx = canvas_element.getContext("2d");
    while (camera_on) {
      await html_request_animation_frame();
      let camera_width = camera_element.videoWidth;
      let camera_height = camera_element.videoHeight;
      if (greater_than(camera_width, 0)) {
        ("the shape the camera really sent is said under the buttons, in the line a failure uses, because whether a phone sends an upright or a wide picture decides how it can fill the frame - and that is known only on the phone itself");
        let shape = text_combine_multiple([
          "Camera picture: ",
          camera_width,
          " by ",
          camera_height,
          " (",
          tried,
          ")",
        ]);
        html_text_set(problem, shape);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);
        ("an upright camera picture fills the frame, losing only a little at its sides; a wide one is fitted whole, because filling with it is the heavy zoom on a face");
        let upright = greater_than(camera_height, camera_width);
        let draw = upright ? html_canvas_draw_cover : html_canvas_draw_contain;
        draw(ctx, camera_element, camera_width, camera_height, width, height);
        app_bible_record_text_draw(ctx, width, height, reference, text);
      }
    }
  }
  function record() {
    project_ensure(start);
  }
  function start() {
    if (not(camera_on) || null_not_is(stop)) {
      return;
    }
    blob = null;
    sent = false;
    let canvas_stream = canvas_element.captureStream(30);
    for (let track of stream.getAudioTracks()) {
      canvas_stream.addTrack(track);
    }
    stop = html_media_recorder_start(canvas_stream);
    refresh();
  }
  async function finish() {
    if (null_is(stop)) {
      return;
    }
    let stopping = stop;
    stop = null;
    blob = await stopping();
    camera_on = false;
    for (let track of stream.getTracks()) {
      track.stop();
    }
    html_display_none(canvas);
    html_media_source_file_set(playback, blob);
    refresh();
  }
  function play() {
    html_display_block(playback);
    playback_element.play();
  }
  async function send() {
    await firebase_auth_ensure(buttons);
    let path = app_bible_record_clip_path(chapter_code, verse_numbers, blob);
    await firebase_upload_blob_browser(path, blob);
    sent = true;
    refresh();
  }
}
