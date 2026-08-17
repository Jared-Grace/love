import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { divide } from "./divide.mjs";
import { app_g_conversation_sky_target } from "./app_g_conversation_sky_target.mjs";
import { app_g_sky_to } from "./app_g_sky_to.mjs";
import { app_g_day_state_property } from "./app_g_day_state_property.mjs";
import { app_g_conversation_day_fraction } from "./app_g_conversation_day_fraction.mjs";
import { g_day_clock } from "./g_day_clock.mjs";
import { g_clock_label } from "./g_clock_label.mjs";
import { emoji_clock } from "./emoji_clock.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_g_toast } from "./app_g_toast.mjs";
export async function app_g_conversation_advance(steps, steps_total) {
  arguments_assert(arguments, 2);
  ("one advancing step of the conversation moves the day forward: every forward choice — each opener chosen, each objection answered, choosing to pray, each prayer prayed, the final goodbye — ticks the shared step counter and drifts the sky to steps.done / steps_total of this conversation's slice, so the whole minimum path (not just the gospel turns) spans the slice and the goodbye lands at its end. wrong openers do NOT tick — guessing costs no daylight, so discernment stays the fast path.");
  steps.done = add(steps.done, 1);
  let fraction = divide(steps.done, steps_total);
  let target = app_g_conversation_sky_target(fraction);
  await app_g_sky_to(target);
  let show_toast = app_g_day_state_property("sky_toast");
  if (show_toast) {
    let day_fraction = app_g_conversation_day_fraction(fraction);
    let clock = g_day_clock(day_fraction);
    let label = g_clock_label(clock);
    let r = emoji_clock();
    let text = text_combine_multiple([r, " ", label]);
    app_g_toast(text, 1400);
  }
}
