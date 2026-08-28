import { arguments_assert } from "./arguments_assert.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { equal } from "./equal.mjs";
export function app_g_bless_overlay_render_tap_prayed_person_id_is(
  someone,
  id,
) {
  arguments_assert(arguments, 2);
  let place = bless_person_place(someone, "person");
  let is = equal(place, id);
  return is;
}
