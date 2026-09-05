import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_vehicle_drive } from "./app_g_bless_vehicle_drive.mjs";
import { each } from "./each.mjs";
export function app_g_bless_vehicles_drive(world, container_map) {
  arguments_assert(arguments, 2);
  ("Set all the traffic going.");
  ("Asked once, where the crowd is set walking, so that the street starts moving as one thing");
  ("- people and cars together - rather than the road coming to life at some other moment.");
  let vehicles = property_get(world, "vehicles");
  function vehicle_drive(vehicle) {
    app_g_bless_vehicle_drive(vehicle, container_map);
  }
  each(vehicles, vehicle_drive);
}
