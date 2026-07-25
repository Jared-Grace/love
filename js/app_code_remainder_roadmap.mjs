import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_color_light_green } from "./app_shared_color_light_green.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_remainder_roadmap(root, stage) {
  "a road sign atop each remainder-machinery lesson: names the destination in words the learner already owns (finding the remainder) and shows the formula grown ONLY as far as it has been built - the piece THIS lesson teaches lit green, earlier pieces solid, and nothing ahead shown at all. Never a preview of not-yet-learned notation (that would break first-read sense); a progress trail, so every symbol on screen already makes sense. The full formula 14 - Math.floor(14 / 4) * 4 appears whole only at the arrival lesson. stage is the lesson key: round_down, integer_division, whole_part, or remainder_divide";
  let order = [
    "round_down",
    "integer_division",
    "whole_part",
    "remainder_divide",
  ];
  let current = list_index_of(order, stage);
  let segments = [
    {
      text: "14 - ",
      key: "remainder_divide",
    },
    {
      text: "Math.floor(",
      key: "round_down",
    },
    {
      text: "14 / 4",
      key: "integer_division",
    },
    {
      text: ")",
      key: "round_down",
    },
    {
      text: " * 4",
      key: "whole_part",
    },
  ];
  let box = app_code_container_light_blue(root);
  let label = html_div(box);
  html_span_text(label, "Building a way to find the remainder");
  let line = html_div(box);
  let tile = html_span(line);
  html_style_code_dark(tile);
  function render_segment(segment) {
    let key = property_get(segment, "key");
    let seg_index = list_index_of(order, key);
    let ahead = less_than(current, seg_index);
    if (ahead) {
      return;
    }
    let text = property_get(segment, "text");
    let span = html_span_text(tile, text);
    let lit = equal(seg_index, current);
    if (lit) {
      let green = app_shared_color_light_green();
      html_font_color_set(span, green);
      html_style_set(span, "font-weight", "bold");
    }
  }
  each(segments, render_segment);
}
