import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_view_person_at } from "./bless_view_person_at.mjs";
export function app_g_bless_overlay_render_tap_prayed_person_at(
  target,
  view_now,
) {
  "Whoever the tap landed on, or nothing at all when it landed on the street itself.";
  "THE STREET IS READ AT THE MOMENT OF THE TAP rather than being handed in, because people walk: a picture of the street taken when the map was drawn puts somebody on the square they were standing on then, and the tap is about the square they are standing on now.";
  "NOTHING BACK IS THE ORDINARY ANSWER, not a failure. Most taps on a street are taps on the street, and what they mean is that the player wants to walk there.";
  arguments_assert(arguments, 2);
  let x = property_get(target, "x");
  let y = property_get(target, "y");
  let view = view_now();
  let r = bless_view_person_at(view, x, y);
  return r;
}
