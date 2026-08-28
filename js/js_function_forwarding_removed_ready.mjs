import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_answer_dropped_is } from "./js_function_answer_dropped_is.mjs";
import { property_get } from "./property_get.mjs";
import { function_async_is } from "./function_async_is.mjs";
import { not } from "./not.mjs";
import { js_function_forwarding_removed_name } from "./js_function_forwarding_removed_name.mjs";
import { equal_not } from "./equal_not.mjs";
import { js_name_variable_declared_is } from "./js_name_variable_declared_is.mjs";
export async function js_function_forwarding_removed_ready(
  ast,
  node,
  target,
  id,
) {
  "The name this forwarding function is known by, when everything about the function itself says it may be dropped - and nothing at all when any one of those things says it may not.";
  "THESE ARE THE CONDITIONS THAT CAN BE ASKED OF THE FUNCTION ALONE, before anything is known about where it is handed over. Where it is handed over is a second reading, and separating the two is what keeps either of them short enough to hold.";
  "THIS ONE HANDS BACK NOTHING WHILE THE ONE IT CALLS HANDS BACK AN ANSWER, so they are not the same function and the call cannot stand in for it.";
  "THIS ONE WAITS, SO IT HANDS BACK A PROMISE. The one it calls has to wait as well for the two to hand back the same kind of thing.";
  "A NAME GIVEN TO A VARIABLE HOLDS NOTHING UNTIL ITS LINE HAS RUN, and the place this would be handed over may sit above that line.";
  "TWO MENTIONS IS THE WHOLE OF IT - the function's own name where it is written down, and the one place it is handed over. A third mention means somebody else reads the name too, and dropping it would take that reading away with it.";
  arguments_assert(arguments, 4);
  let dropped_is = js_function_answer_dropped_is(node);
  if (dropped_is) {
    return null;
  }
  let waits_is = property_get(node, "async");
  if (waits_is) {
    let target_waits_is = await function_async_is(target);
    if (not(target_waits_is)) {
      return null;
    }
  }
  let r = js_function_forwarding_removed_name(id, ast);
  let name = property_get(r, "name");
  let mentions = property_get(r, "mentions");
  if (equal_not(mentions, 2)) {
    return null;
  }
  let variable_is = js_name_variable_declared_is(ast, target);
  if (variable_is) {
    return null;
  }
  return name;
}
