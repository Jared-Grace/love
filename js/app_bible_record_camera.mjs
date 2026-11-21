import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_passage } from "./app_bible_record_passage.mjs";
import { property_get } from "./property_get.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_camera_microphone_stream } from "./html_camera_microphone_stream.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_element } from "./html_element.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_request_animation_frame } from "./html_request_animation_frame.mjs";
import { app_bible_record_text_draw } from "./app_bible_record_text_draw.mjs";
import { html_div } from "./html_div.mjs";
import { null_is } from "./null_is.mjs";
import { html_media_recorder_start } from "./html_media_recorder_start.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_bible_record_take_draw } from "./app_bible_record_take_draw.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export async function app_bible_record_camera(chapter_code, verse_numbers) {
  "$plain chapter_code";
  "A screen over the whole page with the front camera on it and the passage laid across the bottom, a button to start and stop recording, and one to close.";
  "What is recorded is the canvas, not the camera: each frame is the camera's picture with the passage drawn over it, so the saved video carries the words exactly as they were shown. The microphone's sound is added to it.";
  "Closing stops the camera and the microphone, so the phone's recording light goes off the moment the screen does.";
  arguments_assert(arguments, 2);
  let passage = await app_bible_record_passage(chapter_code, verse_numbers);
  let reference = property_get(passage, "reference");
  let text = property_get(passage, "text");
  let panel = html_body_div();
  html_style_assign(panel, {
    position: "fixed",
    inset: "0",
    background: "black",
    "z-index": "1000",
    display: "flex",
    "flex-direction": "column",
    "overflow-y": "auto",
  });
  let stream = await html_camera_microphone_stream();
  let open = true;
  function close() {
    open = false;
    for (let track of stream.getTracks()) {
      track.stop();
    }
    html_remove(panel);
  }
  function live() {
    html_clear(panel);
    let video = html_element(panel, "video");
    let video_element = html_component_element_get(video);
    video_element.muted = true;
    video_element.playsInline = true;
    video_element.srcObject = stream;
    video_element.play();
    html_display_none(video);
    let canvas = html_element(panel, "canvas");
    let canvas_element = html_component_element_get(canvas);
    html_style_assign(canvas, {
      width: "100%",
      "max-height": "75vh",
      "object-fit": "contain",
    });
    let ctx = canvas_element.getContext("2d");
    let drawing = true;
    async function frames() {
      while (drawing && open) {
        await html_request_animation_frame();
        let width = video_element.videoWidth;
        let height = video_element.videoHeight;
        if (greater_than(width, 0)) {
          if (not_equal(canvas_element.width, width)) {
            canvas_element.width = width;
            canvas_element.height = height;
          }
          ctx.drawImage(video_element, 0, 0, width, height);
          app_bible_record_text_draw(ctx, width, height, reference, text);
        }
      }
    }
    frames();
    let buttons = html_div(panel);
    let stop = null;
    let record_button = null;
    async function toggle() {
      if (null_is(stop)) {
        let canvas_stream = canvas_element.captureStream(30);
        for (let track of stream.getAudioTracks()) {
          canvas_stream.addTrack(track);
        }
        stop = html_media_recorder_start(canvas_stream);
        html_text_set(record_button, "Stop");
        return;
      }
      let blob = await stop();
      drawing = false;
      function done() {
        close();
      }
      app_bible_record_take_draw(
        panel,
        blob,
        chapter_code,
        verse_numbers,
        live,
        done,
      );
    }
    record_button = app_shared_button_wide(buttons, "Record", toggle);
    app_shared_button_wide(buttons, "Close", close);
  }
  live();
}
