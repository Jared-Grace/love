import { functions_names } from "./functions_names.mjs";
import { guard_denied_dispatcher_names } from "./guard_denied_dispatcher_names.mjs";
import { function_command_seams_reached } from "./function_command_seams_reached.mjs";
import { function_params_get } from "./function_params_get.mjs";
import { permission_grant_words_unsafe } from "./permission_grant_words_unsafe.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_includes } from "./text_includes.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function permission_grant_refusals(unaliased) {
  "every reason this dispatcher function must not be handed an automatic allow rule — an empty list is the clean answer";
  "each reason is a whole sentence rather than a code, because the one who reads it is deciding by hand whether to grant anyway";
  let refusals = [];
  let live_names = await functions_names();
  let live = list_includes(live_names, unaliased);
  if (not(live)) {
    list_add(
      refusals,
      unaliased +
        " is not a live function, so the rule would grant a name that is free for anyone to claim",
    );
    return refusals;
  }
  let denied = await guard_denied_dispatcher_names();
  let floored = list_includes(denied, unaliased);
  if (floored) {
    list_add(
      refusals,
      unaliased +
        " is on the guard's deny floor, which runs before the allow decision, so the rule would buy nothing but a guaranteed refusal",
    );
  }
  let opens = text_ends_with(unaliased, "_open");
  if (opens) {
    list_add(
      refusals,
      unaliased +
        " opens an editor, which is meaningless from this seam — grant the twin without the suffix instead",
    );
  }
  let seams = await function_command_seams_reached(unaliased);
  let reaches = greater_than(seams.length, 0);
  if (reaches) {
    list_add(
      refusals,
      unaliased +
        " reaches a command-running function, so its arguments can become a command line: " +
        list_join_comma(seams),
    );
  }
  let params = await function_params_get(unaliased);
  for (let p of params) {
    let p_name = property_get(p, "name");
    for (let word of permission_grant_words_unsafe()) {
      let matches = text_includes(p_name, word);
      if (matches) {
        list_add(
          refusals,
          "the parameter " +
            p_name +
            " reads as a " +
            word +
            ", and one grant covers every argument the function is ever handed",
        );
      }
    }
  }
  return refusals;
}
