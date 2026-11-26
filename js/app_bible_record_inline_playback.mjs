import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_element } from "./html_element.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_bible_record_inline_playback(parent) {
  arguments_assert(arguments, 1);
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
  let r = {
    camera_element,
    canvas,
    canvas_element,
    playback,
  };
  return r;
}
