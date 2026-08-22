import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { bible_dream_ink_width } from "./bible_dream_ink_width.mjs";
import { html_element_svg } from "./html_element_svg.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { bible_dream_stroke_samples } from "./bible_dream_stroke_samples.mjs";
import { bible_dream_samples_loop_is } from "./bible_dream_samples_loop_is.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
export function bible_dream_stroke_place_state(
  ink,
  group,
  stroke,
  rank,
  guide,
  marks,
) {
  arguments_assert(arguments, 6);
  let ink_color = app_shared_color_white();
  html_attribute_set(ink, "stroke", ink_color);
  let ink_width = bible_dream_ink_width();
  let ink_value = String(ink_width);
  html_attribute_set(ink, "stroke-width", ink_value);
  html_attribute_set(ink, "stroke-linecap", "round");
  html_attribute_set(ink, "stroke-linejoin", "round");
  let flourish = html_element_svg(group, "g");
  let element = html_component_element_get(ink);
  let total = element.getTotalLength();
  let length_text = String(total);
  html_attribute_set(ink, "stroke-dasharray", length_text);
  html_attribute_set(ink, "stroke-dashoffset", length_text);
  let samples = bible_dream_stroke_samples(ink, 160);
  let loop = bible_dream_samples_loop_is(samples);
  let covered = [];
  let index = 0;
  while (less_than(index, list_size(samples))) {
    list_add(covered, false);
    index = index + 1;
  }
  let state = {
    symbol: stroke.symbol,
    said: stroke.said,
    x: stroke.x,
    y: stroke.y,
    rank,
    guide,
    ink,
    marks,
    flourish,
    total,
    samples,
    loop,
    covered,
    index: 0,
    slips: 0,
    off: false,
    done: false,
    gap: 0,
    hand_points: [],
  };
  return state;
}
