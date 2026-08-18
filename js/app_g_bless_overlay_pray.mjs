import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_glows } from "./app_g_bless_glows.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { bless_blessing } from "./bless_blessing.mjs";
import { list_add } from "./list_add.mjs";
import { bless_summary_earned } from "./bless_summary_earned.mjs";
import { multiply } from "./multiply.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_g_bless_overlay_pray(
  glows,
  view,
  count,
  blessings,
  unlocked,
  render,
) {
  arguments_assert(arguments, 6);
  ("the glow goes on first and the screen is left alone for a moment, because a redraw would replace the very elements that are glowing - the blessing has to be watched landing before the board can move on");
  app_g_bless_glows(glows, view);
  let at = date_now_milliseconds();
  let blessing = bless_blessing(count, at);
  list_add(blessings, blessing);
  let earned = bless_summary_earned(blessings);
  if (earned) {
    unlocked = multiply(unlocked, 2);
  }
  function done() {
    html_clear(glows);
    render();
  }
  setTimeout(done, 1800);
  let r = {
    unlocked,
  };
  return r;
}
