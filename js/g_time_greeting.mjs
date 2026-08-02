import { fn_name } from "./fn_name.mjs";
import { g_time_part } from "./g_time_part.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_combine } from "./text_combine.mjs";
export function g_time_greeting(time) {
  ("how a person greets you at a named time of day — good morning, or just morning, built from the everyday word for the stretch of day (",
    fn_name("g_time_part"),
    "). this sits directly in front of your NAME, so every form here has to stay short enough to read as an address rather than as a sentence: good morning Jared works, hoping your morning goes well does not, and that longer shape lives in ",
    fn_name("g_time_remark"),
    " instead");
  let part = g_time_part(time);
  let full = text_combine("good ", part);
  let greeting = list_random_item([full, part]);
  return greeting;
}
