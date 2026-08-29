import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_day_talkable_is } from "./app_g_day_talkable_is.mjs";
import { not } from "./not.mjs";
import { g_busy } from "./g_busy.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_day_blocked_is } from "./app_g_day_blocked_is.mjs";
import { app_g_discern_prevented_overlay } from "./app_g_discern_prevented_overlay.mjs";
import { app_g_conversation_meet } from "./app_g_conversation_meet.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_conversation_believer } from "./app_g_conversation_believer.mjs";
export async function app_g_conversation_opening(
  prayer,
  npc,
  overlay,
  overlay_close,
) {
  "Everything a conversation does before there is anything to talk about: turning away somebody too busy, turning away somebody the day has put out of reach, meeting the person, and — when they already believe — giving them their own short screen instead.";
  "A TRUE STOPPED MEANS THE CONVERSATION IS ALREADY OVER and the caller should do nothing more. All four ways out say so the same way, so the caller has one thing to look at rather than four.";
  "THE THREE THINGS HANDED BACK ARE ONLY MEANINGFUL WHEN STOPPED IS FALSE; on every way out they are empty.";
  arguments_assert(arguments, 4);
  let talkable = app_g_day_talkable_is(npc);
  if (not(talkable)) {
    let npc_says = g_busy();
    app_g_npc_says(npc, overlay, npc_says);
    app_g_button_conversation_end(overlay, overlay_close);
    let r = {
      stopped: true,
      meet: null,
      greeting: null,
      pronouns: null,
    };
    return r;
  }
  let blocked = app_g_day_blocked_is(npc);
  if (blocked) {
    await overlay_close();
    app_g_discern_prevented_overlay(5000);
    let r9 = {
      stopped: true,
      meet: null,
      greeting: null,
      pronouns: null,
    };
    return r9;
  }
  let r7 = await app_g_conversation_meet(prayer, npc);
  let meet = property_get(r7, "meet");
  let christian = property_get(r7, "christian");
  let greeting = property_get(r7, "greeting");
  let pronouns = property_get(r7, "pronouns");
  if (christian) {
    app_g_conversation_believer(
      npc,
      overlay,
      greeting,
      overlay_close,
      pronouns,
    );
    let r10 = {
      stopped: true,
      meet: null,
      greeting: null,
      pronouns: null,
    };
    return r10;
  }
  let r11 = {
    stopped: false,
    meet,
    greeting,
    pronouns,
  };
  return r11;
}
