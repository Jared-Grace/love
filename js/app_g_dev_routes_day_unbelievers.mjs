import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_day_start } from "./app_g_day_start.mjs";
export function app_g_dev_routes_day_unbelievers(r, div_map) {
  arguments_assert(arguments, 2);
  let day_hours = property_get(r, "day_hours");
  let day_parts = property_get(r, "day_parts");
  let pray = property_get(r, "pray");
  let gratitude = property_get(r, "gratitude");
  let dove = property_get(r, "dove");
  let discern = property_get(r, "discern");
  let disciple = property_get(r, "disciple");
  let believe = property_get(r, "believe");
  let hru = property_get(r, "hru");
  let gospel_share = property_get(r, "gospel_share");
  let quick = property_get(r, "quick");
  let unbeliever = property_get(r, "unbeliever");
  async function day_unbelievers() {
    "the #day_unbelievers demo: 3 nearby unbelievers become today's ONLY talkable people (chosen close together so the walk between them is short). each gets a soft speech-bubble marker; every OTHER npc gives a randomized 'busy' line instead of a conversation (the gate lives in the conversation entry, reading the day session). foundation for the discernment-walk + slice-time day mechanic";
    "there is no button on the map for the discernment prayer. it is prayed from the tap-yourself menu, under Pray, where every other prayer in the game is prayed - so the map here holds only the world and the people in it, and the demo reaches its one mechanic through the door the real game already has.";
    ("the day itself is not written here. this route only opens the door and calls ",
      fn_name("app_g_day_start"),
      ", so the day the demo plays and the day the real game will play are one piece of code rather than two that agree today.");
    await app_g_view_set(null);
    await app_g_day_start(div_map);
  }
  let r2 = {
    day_hours,
    day_parts,
    pray,
    gratitude,
    dove,
    discern,
    disciple,
    believe,
    hru,
    gospel_share,
    quick,
    unbeliever,
    day_unbelievers,
  };
  return r2;
}
