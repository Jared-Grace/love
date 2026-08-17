import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export function g_game_plants_whole_any(r) {
  arguments_assert(arguments, 1);
  let spare = property_get(r, "spare");
  let plants = property_get(r, "plants");
  let days_spent = property_get(r, "days_spent");
  let held = property_get(r, "held");
  let any = greater_than(held, 0);
  let r2 = {
    spare,
    plants,
    days_spent,
    held,
    any,
  };
  return r2;
}
