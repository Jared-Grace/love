import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { not_equal } from "./not_equal.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
export function app_g_verify_home_verse_bar(
  wrap,
  real_keys,
  approved_index,
  open_passage,
  verse_buttons,
  passages,
  pending,
  open_pending,
) {
  "The row of verse buttons under the hint, one for every passage already written plus a faded one for the verse being written right now, and a tick on each verse the reviewer has already approved. Every button is kept by verse so that whichever one is open can be lit up later without painting the row again.";
  arguments_assert(arguments, 8);
  let bar = html_div_centered(wrap);
  let value = app_shared_spaced_small_gap();
  html_style_margin_top(bar, value);
  function lambda10(passage) {
    let key = g_sermon_passage_verses_key(passage);
    let a = real_keys.indexOf(key);
    let is_approved =
      greater_than_equal(approved_index, 0) &&
      less_than_equal(a, approved_index);
    let label = is_approved ? "v" + key + " ✓" : "v" + key;
    function lambda9() {
      open_passage(passage);
    }
    verse_buttons[key] = app_shared_button(bar, label, lambda9);
  }
  passages.forEach(lambda10);
  if (not_equal(pending, null)) {
    function lambda11() {
      open_pending(pending);
    }
    let pb = app_shared_button(bar, "v" + pending, lambda11);
    html_style_opacity(pb, "0.5");
    verse_buttons[pending] = pb;
  }
}
