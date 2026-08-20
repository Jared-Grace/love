import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { html_div } from "./html_div.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function song_image_frame_controls(column, state, on_change) {
  "the buttons above the preview frame: which cut, where the picture sits, and which half it takes; placement cycles behind - half - raw so both readings of the free space can be compared rather than one of them being decided in advance";
  let controls = html_div(column);
  html_display_flex(controls);
  html_style_gap(controls, "8px");
  html_style_margin_bottom(controls, "10px");
  function cut_click() {
    state.vertical = not(state.vertical);
    on_change();
  }
  let cut_text = state.vertical ? "vertical" : "horizontal";
  let cut = html_button(controls, cut_text, cut_click);
  html_style_padding(cut, "6px 12px");
  html_cursor_pointer(cut);
  function placement_click() {
    let next = equal(state.placement, "behind")
      ? "half"
      : equal(state.placement, "half")
        ? "raw"
        : "behind";
    state.placement = next;
    on_change();
  }
  let placement_text = equal(state.placement, "behind")
    ? "behind the words"
    : equal(state.placement, "half")
      ? "in the free half"
      : "raw picture";
  let placement = html_button(controls, placement_text, placement_click);
  html_style_padding(placement, "6px 12px");
  html_cursor_pointer(placement);
  function flip_click() {
    state.flip = not(state.flip);
    on_change();
  }
  let flip = html_button(controls, "swap sides", flip_click);
  html_style_padding(flip, "6px 12px");
  html_cursor_pointer(flip);
  html_style_opacity(flip, equal(state.placement, "half") ? "1" : "0.4");
  return controls;
}
