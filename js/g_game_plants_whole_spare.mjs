import { arguments_assert } from "./arguments_assert.mjs";
import { g_game_plants_whole_held } from "./g_game_plants_whole_held.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function g_game_plants_whole_spare(days_total, s, next) {
  arguments_assert(arguments, 3);
  let r = g_game_plants_whole_held(days_total, s, next);
  let held = property_get(r, "held");
  let days_spent = property_get(r, "days_spent");
  let plants = property_get(r, "plants");
  let spare = subtract(days_total, days_spent);
  let r2 = {
    held,
    days_spent,
    plants,
    spare,
  };
  return r2;
}
