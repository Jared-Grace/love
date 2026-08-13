import { g_tiles_window_axis_cases } from "./g_tiles_window_axis_cases.mjs";
import { g_tiles_window_axis } from "./g_tiles_window_axis.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
export function g_tiles_window_axis_cases_gate_run() {
  "QA gate: every scroll offset the corpus writes down is turned into the same window of whole tiles it says it should be.";
  "This is the arithmetic a tap is judged by, and it fails silently in both directions - a window too wide walks the player somewhere they cannot see, a window too narrow refuses a tile in front of them, and neither raises anything. The one thing the player sees either way is a tap that did nothing.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = g_tiles_window_axis_cases();
  function answer(c) {
    let scrolled = property_get(c, "scrolled");
    let tile = property_get(c, "tile");
    let view_length = property_get(c, "view_length");
    let grid_inset = property_get(c, "grid_inset");
    let trim = property_get(c, "trim");
    let window_tiles = g_tiles_window_axis(
      scrolled,
      tile,
      view_length,
      grid_inset,
      trim,
    );
    return window_tiles;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "window_tiles",
    "why",
    "g tiles window axis",
  );
  return r;
}
