import { assert_message } from "./assert_message.mjs";
import { app_g_day_blocked_is } from "./app_g_day_blocked_is.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
export function app_g_day_blocked_check() {
  "deterministic REGRESSION check of #day_unbelievers force-righteousness (app_g_day_blocked_is): with no discerned target NOBODY is blocked; once a target is set the target itself is NOT blocked but any OTHER talkable IS. run: node scripts/ai.mjs app_g_day_blocked_check";
  let state = app_g_day_state();
  let target = {
    x: 1,
    y: 1,
    name: "target",
  };
  let other = {
    x: 5,
    y: 5,
    name: "other",
  };
  property_set(state, "target", null);
  assert_message(
    equal(app_g_day_blocked_is(other), false),
    "no target → nobody blocked",
  );
  property_set(state, "target", target);
  assert_message(
    equal(app_g_day_blocked_is(target), false),
    "the discerned target → NOT blocked",
  );
  assert_message(
    equal(app_g_day_blocked_is(other), true),
    "a DIFFERENT talkable → blocked (Spirit redirects)",
  );
  property_set(state, "target", null);
  return {
    ok: true,
  };
}
