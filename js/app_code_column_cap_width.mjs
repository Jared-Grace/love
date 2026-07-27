import { app_shared_column_max_width } from "./app_shared_column_max_width.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_column_cap_width() {
  "the width the code app caps a full-column element to: the reading column (40rem) on a wide screen, or the viewport minus one gap each side when narrower. Single-sourced so the buttons and the success banner land at the exact same width and their edges line up.";
  let gap = app_shared_spaced_gap();
  let cap = app_shared_column_max_width();
  let width = text_combine_multiple([
    "min(",
    cap,
    ", calc(100vw - 2 * ",
    gap,
    "))",
  ]);
  return width;
}
