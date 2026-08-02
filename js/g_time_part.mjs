import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
export function g_time_part(time) {
  ("the everyday WORD for the stretch of day a keyframe of ",
    fn_name("g_times"),
    " falls in — morning, afternoon or evening. six keyframes fold onto three because that is how many stretches people actually name: sunrise is still the morning, noon opens the afternoon, and both sunset and night are the evening. everything an NPC says about the time is built from this one word, so a greeting and a remark can never name different parts of the same moment");
  let parts = {
    morning: "morning",
    noon: "afternoon",
    afternoon: "afternoon",
    sunset: "evening",
    night: "evening",
    sunrise: "morning",
  };
  let part = property_get(parts, time);
  return part;
}
