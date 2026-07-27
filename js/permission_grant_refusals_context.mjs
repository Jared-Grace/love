import { functions_permission_seams } from "./functions_permission_seams.mjs";
import { function_seams_reached_memo } from "./function_seams_reached_memo.mjs";
import { function_params_plain } from "./function_params_plain.mjs";
import { and } from "./and.mjs";
import { function_command_seams_reached_memo } from "./function_command_seams_reached_memo.mjs";
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
export async function permission_grant_refusals_context(unaliased, context) {
  "every reason this dispatcher function must not be handed an automatic allow rule — an empty list is the clean answer";
  "each reason is a whole sentence rather than a code, because the one who reads it is deciding by hand whether to grant anyway";
  "the shared answers arrive already worked out, so asking this about every standing grant in turn costs one pass over the repo instead of one pass per name";
  let live_names = property_get(context, "live");
  let denied = property_get(context, "denied");
  let remembered = property_get(context, "remembered");
  let refusals = [];
  let live = list_includes(live_names, unaliased);
  if (not(live)) {
    list_add(
      refusals,
      unaliased +
        " is not a live function, so the rule would grant a name that is free for anyone to claim",
    );
    return refusals;
  }
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
  let params = await function_params_get(unaliased);
  let takes_arguments = greater_than(params.length, 0);
  let seams = await function_command_seams_reached_memo(unaliased, remembered);
  let reaches = greater_than(seams.length, 0);
  ("Reaching a command-running function is only a reason to refuse when there are arguments that could steer it there. The refusal is a sentence about arguments, and a function declaring none cannot have it be true: a rule covers every argument the function is ever handed, and handing arguments to a function that declares none changes nothing it does. That is exactly the condition this repo already states for granting at all - behaviour fixed regardless of the arguments - so an empty parameter list proves it rather than estimating it. Without this the gates and reports, which take nothing and are the most worth granting, were the ones refused.");
  let steerable = and(reaches, takes_arguments);
  if (steerable) {
    list_add(
      refusals,
      unaliased +
        " reaches a command-running function, so its arguments can become a command line: " +
        list_join_comma(seams),
    );
  }
  ("Reaching a function that writes the permission rules is refused whatever the arguments are, which is the one place this check does not ask about arguments. The other seams are about what a caller could steer the function into doing; this one is about what the function does on its own. A regenerator that takes nothing still renders the settings file from a list held in ordinary source, and anything able to edit a file can change that list first, so the escalation sits in the write rather than in what points it. Left out, the single tool standing between a bad grant and the settings file was blind to the one category that grants further grants.");
  let permission_seams = functions_permission_seams();
  let rules_written = await function_seams_reached_memo(
    unaliased,
    permission_seams,
    remembered,
  );
  let escalates = greater_than(rules_written.length, 0);
  if (escalates) {
    list_add(
      refusals,
      unaliased +
        " reaches a function that writes Claude's own permission rules, so approving it approves whatever it goes on to approve: " +
        list_join_comma(rules_written),
    );
  }
  ("A word inside a parameter's name is a guess about what the parameter holds, and the guess is wrong often enough to matter - chapter_code holds a Bible chapter identifier, not source text. Reading the shape of the name instead would loosen the check for every function nobody has looked at, so the function declares the exception itself and an unmarked parameter is still refused.");
  let plain = await function_params_plain(unaliased);
  for (let p of params) {
    let p_name = property_get(p, "name");
    let declared = list_includes(plain, p_name);
    if (declared) {
      continue;
    }
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
