import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_frame_size } from "./app_bible_record_frame_size.mjs";
import { property_get } from "./property_get.mjs";
import { multiply } from "./multiply.mjs";
import { app_bible_record_text_layout_band } from "./app_bible_record_text_layout_band.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { json_to } from "./json_to.mjs";
export function app_bible_record_native_open(reference, text, done) {
  "$plain reference text done";
  "Hands the recording to the Android app this page is running inside (android/record), which opens the camera upright and whole - something a phone's browser would not do (human 2026-11-23: no way to make the phone camera vertical and large?). The page still lays out the words, with the same layout the canvas uses, and the app only paints the lines it is given, so there is one layout, written once, here.";
  "When the take is done the app calls back; the recording is then fetched from the app at its own path on this page's address, and done is handed the recording and an empty message, or nothing and why.";
  arguments_assert(arguments, 3);
  let native = window.love_record_native;
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let size = app_bible_record_frame_size();
  let width = property_get(size, "width");
  let height = property_get(size, "height");
  ("THE WORDS FILL A FIXED BAND, 40% OF THE HEIGHT, ACROSS THE TOP (human 2026-11-24: the overlay always the same size, its letters adjusting to fit): every take then looks alike, whatever the passage's length.");
  let band = multiply(height, 0.4);
  let layout = app_bible_record_text_layout_band(ctx, width, text, band);
  let message = {
    reference,
    width,
    margin: property_get(layout, "margin"),
    size: property_get(layout, "size"),
    lines: property_get(layout, "lines"),
    reference_size: property_get(layout, "reference_size"),
    line_height: property_get(layout, "line_height"),
    band: property_get(layout, "band"),
  };
  async function finished(why) {
    if (text_empty_not_is(why)) {
      done(null, why);
      return;
    }
    let response = await fetch(
      "/__native/take.mp4?t=" + date_now_milliseconds(),
    );
    let blob = await response.blob();
    done(blob, "");
  }
  window.love_record_native_done = finished;
  let json = json_to(message);
  native.record_open(json);
}
