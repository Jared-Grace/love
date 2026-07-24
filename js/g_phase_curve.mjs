import { g_phase_components } from "./g_phase_components.mjs";
import { g_night_curve } from "./g_night_curve.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function g_phase_curve(phase) {
  "the tone-curve tableValues (a space-joined string of control points) for a continuous phase: the straight day IDENTITY ramp (i/last) lerped toward the NIGHT darkening curve by the phase's `darkness` (0 by day → identity → full range untouched; 1 at night → the darkening curve). written onto the shared SVG filter by g_sky_tone_write";
  let c = g_phase_components(phase);
  let darkness = property_get(c, "darkness");
  let night = g_night_curve();
  let last = subtract(list_size(night), 1);
  function point(value, index) {
    let identity = divide(index, last);
    let delta = subtract(value, identity);
    let mixed = add(identity, multiply(delta, darkness));
    return mixed;
  }
  let values = list_map_index(night, point);
  let text = list_join_space(values);
  return text;
}
