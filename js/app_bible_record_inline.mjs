import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_element } from "./html_element.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_bible_record_passage } from "./app_bible_record_passage.mjs";
import { property_get } from "./property_get.mjs";
import { html_camera_microphone_stream } from "./html_camera_microphone_stream.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_request_animation_frame } from "./html_request_animation_frame.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_bible_record_text_draw } from "./app_bible_record_text_draw.mjs";
import { html_media_recorder_start } from "./html_media_recorder_start.mjs";
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
  "The recorder for one passage, drawn right under it rather than on a screen of its own (asked for by the human 2026-11-22): the camera picture appears in place while recording, and four buttons sit beneath - record, stop, play back, send.";
  "A BUTTON THAT CANNOT BE PRESSED NOW IS FADED, NOT TAKEN AWAY, using the one disabled look every app here shares, so the four never move and a finger already over Stop finds it where it was. Record is faded while recording; Stop is faded unless recording; Play back and Send are faded until there is a take and nothing is recording.";
  "RECORDING AGAIN REPLACES THE TAKE: the old one is thrown away the moment a new one starts, so there is only ever one take per passage to play back or send, and the button says Record again once there is one.";
  "Recording starts when the first picture has been drawn, so the video does not open on black frames from before the camera woke. Stopping turns the camera and microphone off, so the phone's recording light goes off with it.";
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
  html_style_assign(canvas, {
    width: "100%",
    "max-height": "60vh",
    "object-fit": "contain",
    background: "black",
  });
  html_display_none(canvas);
  let playback = html_element(area, "video");
  let playback_element = html_component_element_get(playback);
  playback_element.controls = true;
  playback_element.playsInline = true;
  html_style_assign(playback, {
    width: "100%",
    "max-height": "60vh",
    background: "black",
  });
  html_display_none(playback);
  let buttons = html_div(parent);
  let recording = false;
  let stop = null;
  let stream = null;
  let blob = null;
  let sent = false;
  let record_button = app_shared_button_wide(buttons, "", record);
  let stop_button = app_shared_button_wide(buttons, "Stop recording", finish);
  let play_button = app_shared_button_wide(buttons, "Play back", play);
  let send_button = app_shared_button_wide(buttons, "", send);
  function refresh() {
    let b = null_is(blob);
    let have = not(b);
    let ready = have && not(recording);
    app_shared_button_disabled_set(record_button, recording);
    let disabled = null_is(stop);
    app_shared_button_disabled_set(stop_button, disabled);
    let disabled2 = not(ready);
    app_shared_button_disabled_set(play_button, disabled2);
    app_shared_button_disabled_set(send_button, not(ready) || sent);
    html_text_set(record_button, have ? "Record again" : "Record this passage");
    html_text_set(send_button, sent ? "Sent" : "Send this recording");
  }
  refresh();
  function record() {
    project_ensure(start);
  }
  async function start() {
    if (recording) {
      return;
    }
    recording = true;
    blob = null;
    sent = false;
    playback_element.pause();
    html_display_none(playback);
    refresh();
    let passage = await app_bible_record_passage(chapter_code, verse_numbers);
    let reference = property_get(passage, "reference");
    let text = property_get(passage, "text");
    stream = await html_camera_microphone_stream();
    camera_element.srcObject = stream;
    camera_element.play();
    html_display_block(canvas);
    let ctx = canvas_element.getContext("2d");
    while (recording) {
      await html_request_animation_frame();
      let width = camera_element.videoWidth;
      let height = camera_element.videoHeight;
      if (greater_than(width, 0)) {
        if (not_equal(canvas_element.width, width)) {
          canvas_element.width = width;
          canvas_element.height = height;
        }
        ctx.drawImage(camera_element, 0, 0, width, height);
        app_bible_record_text_draw(ctx, width, height, reference, text);
        if (null_is(stop)) {
          let canvas_stream = canvas_element.captureStream(30);
          for (let track of stream.getAudioTracks()) {
            canvas_stream.addTrack(track);
          }
          stop = html_media_recorder_start(canvas_stream);
          refresh();
        }
      }
    }
  }
  async function finish() {
    if (null_is(stop)) {
      return;
    }
    let stopping = stop;
    stop = null;
    blob = await stopping();
    recording = false;
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
