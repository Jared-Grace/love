import { g_time_components } from "./g_time_components.mjs";
import { g_times } from "./g_times.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { floor } from "./floor.mjs";
import { mod } from "./mod.mjs";
import { add_1 } from "./add_1.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
export function g_phase_components(phase) {
  "the sky components {r,g,b,a,light,contrast} linearly interpolated for a CONTINUOUS day phase (0=morning … 3=night, wrapping) — the single bracket-and-lerp that BOTH the tint colour (g_phase_color) and the map darkness (g_phase_backdrop) read from, so the two knobs can never drift apart";
  let times = g_times();
  let n = list_size(times);
  let p = mod(phase, n);
  let base_index = floor(p);
  let next_index = mod(add_1(base_index), n);
  let frac = subtract(p, base_index);
  let ca = g_time_components(list_get(times, base_index));
  let cb = g_time_components(list_get(times, next_index));
  function lerp(key) {
    let va = property_get(ca, key);
    let vb = property_get(cb, key);
    let mixed = add(va, multiply(subtract(vb, va), frac));
    return mixed;
  }
  let c = {
    r: lerp("r"),
    g: lerp("g"),
    b: lerp("b"),
    a: lerp("a"),
    light: lerp("light"),
    contrast: lerp("contrast"),
  };
  return c;
}
