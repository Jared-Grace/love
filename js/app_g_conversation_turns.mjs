import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_conversation_goodbye } from "./app_g_conversation_goodbye.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_conversation_turns(
  npc,
  pronouns,
  div_map,
  overlay_close,
) {
  arguments_assert(arguments, 4);
  let r = app_g_conversation_goodbye(npc, pronouns, div_map, overlay_close);
  let goodbye = property_get(r, "goodbye");
  let close_now = property_get(r, "close_now");
  let steps = property_get(r, "steps");
  let steps_total = property_get(r, "steps_total");
  let some_prayers = property_get(r, "some_prayers");
  let pending = property_get(r, "pending");
  let greeted = property_get(r, "greeted");
  let prayed = property_get(r, "prayed");
  let remaining = property_get(r, "remaining");
  let converts = property_get(r, "converts");
  let turns = property_get(r, "turns");
  let r2 = {
    goodbye,
    close_now,
    steps,
    steps_total,
    some_prayers,
    pending,
    greeted,
    prayed,
    remaining,
    converts,
    turns,
  };
  return r2;
}
