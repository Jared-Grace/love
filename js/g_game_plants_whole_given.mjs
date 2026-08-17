import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { floor } from "./floor.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { modulo } from "./modulo.mjs";
export function g_game_plants_whole_given(r) {
  arguments_assert(arguments, 1);
  let any = property_get(r, "any");
  let held = property_get(r, "held");
  let days_spent = property_get(r, "days_spent");
  let plants = property_get(r, "plants");
  let spare = property_get(r, "spare");
  if (any) {
    let given = 0;
    for (let plant of plants) {
      let days = property_get(plant, "days_drawn");
      let part = multiply_divide(spare, days, days_spent);
      let whole = floor(part);
      plant.days = plant.days + whole;
      given = given + whole;
    }
    let residue = subtract(spare, given);
    for (let step = 0; less_than(step, residue); step++) {
      let along = modulo(step, held);
      let left = subtract(held, 1);
      let at = subtract(left, along);
      let plant = plants[at];
      plant.days = plant.days + 1;
    }
  }
  return plants;
}
