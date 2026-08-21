import { bible_dream_hand_nearness } from "./bible_dream_hand_nearness.mjs";
import { bible_dream_hand_mark_add } from "./bible_dream_hand_mark_add.mjs";
import { bible_dream_stroke_counters_show } from "./bible_dream_stroke_counters_show.mjs";
import { bible_dream_stroke_finish_show } from "./bible_dream_stroke_finish_show.mjs";
import { subtract } from "./subtract.mjs";
import { html_body_div_page_dark } from "./html_body_div_page_dark.mjs";
import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_element_svg } from "./html_element_svg.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_on } from "./html_on.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { bible_dream_pharaoh_strokes } from "./bible_dream_pharaoh_strokes.mjs";
import { bible_dream_stroke_place } from "./bible_dream_stroke_place.mjs";
import { bible_dream_drawing_point } from "./bible_dream_drawing_point.mjs";
import { bible_dream_stroke_begin_near } from "./bible_dream_stroke_begin_near.mjs";
import { bible_dream_stroke_advance } from "./bible_dream_stroke_advance.mjs";
import { bible_dream_stroke_ink_show } from "./bible_dream_stroke_ink_show.mjs";
import { bible_dream_trace_status_text } from "./bible_dream_trace_status_text.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
export function bible_dream_trace_preview() {
  "Pharaoh's two dreams on a screen, on the sandbox app at the hash dream_trace: every stroke GEN41:1-7 says he saw, laid out faint and all at once, waiting to be drawn by dragging along it.";
  "It exists to answer ONE question that no amount of reasoning can answer - whether tracing a given shape, in an order you choose, feels like anything at all. Everything else about it is deliberately cheap. If the dragging is dull the whole dream palette is wrong and the reading it was built on still stands, which is why the reading was written down somewhere else first.";
  "The order is the freedom here and it is a real one. Nothing enforces the Nile before the reeds, or the fat cows before the gaunt ones, and drawing the gaunt ones first tells Pharaoh a different dream out of the same strokes. Within a stroke there is no order at all: put your hand down anywhere on it and go either way.";
  "Two things answer the wandering rather than only punishing it. The hand's own line stays on the page, thinning and fading the further it went from what it was given, so an imprecise trace leaves a real drawing behind it and not a blank. And a finished shape is answered by ornament read out of its own bumps, written in a moment later at about the speed of a hand, so that something else is plainly at work beside the player. Neither adds a line the passage did not give: the first is the player's own line and the second is a reply to the shape, and only the ink between them is Scripture's.";
  "The slips are the second half of the answer. A stroke can be finished having left its corridor a dozen times, and the count says so, because NUM12:8 puts a plain word above a riddle and a shape drawn badly is what a riddle is made of. Nothing yet DOES anything with that number - what it costs is a design decision and this is not the file to make it in.";
  let scene = bible_dream_pharaoh_strokes();
  let root = html_body_div_page_dark();
  html_style_set(root, "max-width", "1000px");
  html_style_set(root, "margin", "0 auto");
  let heading = html_div(root);
  html_style_font_size(heading, "22px");
  html_text_set(heading, scene.reference + " — the dream you are sent to draw");
  let meaning = html_div(root);
  html_style_margin_top(meaning, "8px");
  html_style_font_size(meaning, "14px");
  html_style_line_height(meaning, "1.5");
  let quiet = app_shared_color_gray_light();
  html_style_set(meaning, "color", quiet);
  html_text_set(meaning, scene.meaning);
  let readout = html_div(root);
  html_style_margin_top(readout, "10px");
  html_style_font_size(readout, "14px");
  let drawing = html_element_svg(root, "svg");
  html_attribute_set(drawing, "viewBox", scene.view_box);
  html_style_set(drawing, "width", "100%");
  html_style_set(drawing, "margin-top", "10px");
  html_style_set(drawing, "touch-action", "none");
  let states = [];
  function each_stroke(stroke) {
    let state = bible_dream_stroke_place(drawing, stroke);
    list_add(states, state);
  }
  each(scene.strokes, each_stroke);
  let told = [];
  let active = null;
  function readout_show() {
    let text = bible_dream_trace_status_text(states, told);
    html_text_set(readout, text);
  }
  function on_press(event) {
    let at = bible_dream_drawing_point(drawing, event);
    active = bible_dream_stroke_begin_near(states, at, 169);
    if (active) {
      active.hand_at = null;
    }
  }
  function on_drag(event) {
    if (not(active)) {
      return;
    }
    let at = bible_dream_drawing_point(drawing, event);
    let near = {
      x: subtract(at.x, active.x),
      y: subtract(at.y, active.y),
    };
    bible_dream_stroke_advance(active, near, 20);
    let nearness = bible_dream_hand_nearness(active.gap, 20);
    bible_dream_hand_mark_add(active, near, nearness);
    bible_dream_stroke_ink_show(active);
    if (active.done) {
      bible_dream_stroke_finish_show(active);
      bible_dream_stroke_counters_show(active);
      let already = list_includes(told, active.said);
      if (not(already)) {
        list_add(told, active.said);
      }
      active = null;
    }
    readout_show();
  }
  function on_release(event) {
    if (active) {
      active.hand_at = null;
    }
    active = null;
  }
  html_on(drawing, "pointerdown", on_press);
  html_on(drawing, "pointermove", on_drag);
  html_on(drawing, "pointerup", on_release);
  readout_show();
  return root;
}
