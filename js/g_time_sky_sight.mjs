import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
export function g_time_sky_sight(time) {
  ("the thing in the sky worth remarking on at a keyframe of ",
    fn_name("g_times"),
    " — a sunset, a sunrise, a night sky — or null when there is nothing to point at. keyed to the raw keyframe and NOT to ",
    fn_name("g_time_part"),
    ", because that one folds sunset and night onto the single word evening and the difference between them is the whole point here: a sunset is a sight, an ordinary afternoon sky is not. the three plain daylight keyframes answer null, so a caller asking at noon gets no remark rather than a strained one");
  let sights = {
    morning: null,
    noon: null,
    afternoon: null,
    sunset: "sunset",
    night: "night sky",
    sunrise: "sunrise",
  };
  let sight = property_get(sights, time);
  return sight;
}
