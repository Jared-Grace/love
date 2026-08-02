import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
export function g_time_greeting(time) {
  ("how a person greets you at a named time of day — the everyday three, good morning, good afternoon and good evening, spread across the six keyframes of ",
    fn_name("g_times"),
    ". sunrise greets as morning and sunset as evening because the words follow the LIGHT rather than the clock, and night keeps evening because no one says good night on arriving. every keyframe answers, so a caller never has to test for a missing one");
  let greetings = {
    morning: "good morning",
    noon: "good afternoon",
    afternoon: "good afternoon",
    sunset: "good evening",
    night: "good evening",
    sunrise: "good morning",
  };
  let greeting = property_get(greetings, time);
  return greeting;
}
