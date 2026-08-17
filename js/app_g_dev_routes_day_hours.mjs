import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_dev_routes_unbeliever } from "./app_g_dev_routes_unbeliever.mjs";
import { app_g_dev_routes_quick } from "./app_g_dev_routes_quick.mjs";
import { app_g_view_phase_gospel } from "./app_g_view_phase_gospel.mjs";
import { app_g_dev_routes_npc_view } from "./app_g_dev_routes_npc_view.mjs";
import { app_g_view_phase_how } from "./app_g_view_phase_how.mjs";
import { app_g_view_phase_believe } from "./app_g_view_phase_believe.mjs";
import { app_g_view_phase_disciple } from "./app_g_view_phase_disciple.mjs";
import { app_g_dev_routes_discern } from "./app_g_dev_routes_discern.mjs";
import { app_g_dev_routes_dove } from "./app_g_dev_routes_dove.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_gratitude_overlay } from "./app_g_gratitude_overlay.mjs";
import { app_g_dev_routes_pray } from "./app_g_dev_routes_pray.mjs";
import { app_g_dev_routes_day_parts } from "./app_g_dev_routes_day_parts.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_hour_choices } from "./app_g_hour_choices.mjs";
export function app_g_dev_routes_day_hours() {
  arguments_assert(arguments, 0);
  async function unbeliever() {
    let r6 = await app_g_dev_routes_unbeliever();
    return r6;
  }
  async function quick() {
    let r = await app_g_dev_routes_quick();
    return r;
  }
  async function gospel_share() {
    let result = app_g_view_phase_gospel();
    await app_g_dev_routes_npc_view(result);
  }
  async function hru() {
    let result3 = app_g_view_phase_how();
    await app_g_dev_routes_npc_view(result3);
  }
  async function believe() {
    let result4 = app_g_view_phase_believe();
    await app_g_dev_routes_npc_view(result4);
  }
  async function disciple() {
    let result5 = app_g_view_phase_disciple();
    await app_g_dev_routes_npc_view(result5);
  }
  async function discern() {
    let r5 = await app_g_dev_routes_discern();
    return r5;
  }
  async function dove() {
    let r4 = await app_g_dev_routes_dove();
    return r4;
  }
  async function gratitude() {
    await app_g_view_set(null);
    app_g_gratitude_overlay();
  }
  async function pray() {
    let r3 = await app_g_dev_routes_pray();
    return r3;
  }
  async function day_parts() {
    let r2 = await app_g_dev_routes_day_parts();
    return r2;
  }
  async function day_hours() {
    ("the #day_hours previewer: pick any of the 24 wall-clock hours to see the sky at that time — helps CHOOSE the day's cutoff (how far past sunset the workday runs before it looks dark). paints via the same clock→phase mapping (",
      fn_name("g_clock_sky_phase"),
      ") the real day uses, so what you pick here IS what the day will show");
    await app_g_view_set(null);
    await app_g_hour_choices();
  }
  let r7 = {
    unbeliever,
    quick,
    gospel_share,
    hru,
    believe,
    disciple,
    discern,
    dove,
    gratitude,
    pray,
    day_parts,
    day_hours,
  };
  return r7;
}
