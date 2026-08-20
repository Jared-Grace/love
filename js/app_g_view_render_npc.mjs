import { app_g_view_render_npc_right } from "./app_g_view_render_npc_right.mjs";
import { equal } from "./equal.mjs";
import { app_g_view_get } from "./app_g_view_get.mjs";
import { app_g_conversation } from "./app_g_conversation.mjs";
import { app_g_gospel } from "./app_g_gospel.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_click_npc_study } from "./app_g_click_npc_study.mjs";
import { app_g_click_npc_pray } from "./app_g_click_npc_pray.mjs";
import { app_g_view_phase_pray } from "./app_g_view_phase_pray.mjs";
import { app_g_view_phase_conversation } from "./app_g_view_phase_conversation.mjs";
import { app_g_view_phase_gospel } from "./app_g_view_phase_gospel.mjs";
import { app_g_view_phase_how } from "./app_g_view_phase_how.mjs";
import { app_g_view_phase_believe } from "./app_g_view_phase_believe.mjs";
import { app_g_view_phase_disciple } from "./app_g_view_phase_disciple.mjs";
import { app_g_how } from "./app_g_how.mjs";
import { app_g_believe } from "./app_g_believe.mjs";
import { app_g_disciple } from "./app_g_disciple.mjs";
import { error_json } from "./error_json.mjs";
export async function app_g_view_render_npc(div_map) {
  "Reopens the conversation the player was in when the game was last closed, by asking what stage it had got to and putting that stage's screen back up.";
  "The stages are asked about one after another rather than looked up in a table, and each question names the function that draws it, so the whole of what a saved conversation can be is readable straight down the page.";
  "A stage nobody here recognises raises an error rather than quietly dropping the player back on the map. A saved conversation naming a stage this code does not know is a game that has been changed underneath somebody who was in the middle of talking, and losing it silently would look to them like the person on the map had simply forgotten them.";
  let view = await app_g_view_get();
  let r = await app_g_view_render_npc_right(view, div_map);
  let right = property_get(r, "right");
  let overlay_close = property_get(r, "overlay_close");
  let overlay = property_get(r, "overlay");
  let player = property_get(r, "player");
  let npc = property_get(r, "npc");
  let phase = property_get(r, "phase");
  if (equal(phase, right)) {
    await app_g_click_npc_study(player, overlay, overlay_close, div_map);
    return;
  }
  let right2 = app_g_view_phase_pray();
  if (equal(phase, right2)) {
    await app_g_click_npc_pray(player, overlay, overlay_close, div_map);
    return;
  }
  let right3 = app_g_view_phase_conversation();
  if (equal(phase, right3)) {
    let prayer = property_get(player, "prayer");
    await app_g_conversation(prayer, npc, overlay, overlay_close, div_map);
    return;
  }
  let right4 = app_g_view_phase_gospel();
  if (equal(phase, right4)) {
    await app_g_gospel(overlay, npc, overlay_close, player, div_map);
    return;
  }
  let right5 = app_g_view_phase_how();
  if (equal(phase, right5)) {
    app_g_how(overlay, npc, overlay_close);
    return;
  }
  let right6 = app_g_view_phase_believe();
  if (equal(phase, right6)) {
    app_g_believe(overlay, npc, overlay_close);
    return;
  }
  let right7 = app_g_view_phase_disciple();
  if (equal(phase, right7)) {
    app_g_disciple(overlay, npc, overlay_close);
    return;
  }
  error_json({
    hint: "the saved conversation could not be reopened because its phase is not recognized",
    phase,
    view,
  });
}
