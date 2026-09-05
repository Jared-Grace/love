import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_vehicle_draw } from "./app_g_bless_vehicle_draw.mjs";
import { each } from "./each.mjs";
export function app_g_bless_vehicles_draw(parent, vehicles) {
  arguments_assert(arguments, 2);
  ("Make the picture of every car in the world.");
  ("Drawn BEFORE the people are, so that a car and a person on the same row fall the way a");
  ("street does: the person is nearer the reader. Which of two things on the same row is in");
  ("front is decided by the order they were made in, and a car sharing a row with a person is");
  ("a car at the kerb with somebody standing beside it.");
  function vehicle_draw(vehicle) {
    app_g_bless_vehicle_draw(parent, vehicle);
  }
  each(vehicles, vehicle_draw);
}
