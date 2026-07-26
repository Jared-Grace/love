import { global_function_initialize } from "./global_function_initialize.mjs";
export function app_g_day_state() {
  "the #day_unbelievers demo session, a global initialised once: { talkable } — the day's talkable NPCs, or null when the demo is OFF (so the real game and every other screen are untouched). the conversation entry reads it to give a non-talkable NPC a 'busy' line instead of a conversation";
  let state = global_function_initialize(app_g_day_state, {
    talkable: null,
  });
  return state;
}
