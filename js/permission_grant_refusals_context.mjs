import { function_grant_declined_is } from "./function_grant_declined_is.mjs";
import { function_ast_memo } from "./function_ast_memo.mjs";
import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { function_params_plain_ast } from "./function_params_plain_ast.mjs";
import { functions_permission_seams } from "./functions_permission_seams.mjs";
import { function_seams_reached_memo } from "./function_seams_reached_memo.mjs";
import { and } from "./and.mjs";
import { function_command_seams_reached_memo } from "./function_command_seams_reached_memo.mjs";
import { permission_grant_words_unsafe } from "./permission_grant_words_unsafe.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
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
  let openers = property_get(context, "openers");
  let remembered = property_get(context, "remembered");
  let parsed = property_get(context, "parsed");
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
  ("Everything else here is measured off the call graph and the parameter list, and some functions are unsafe to grant for a reason neither can reach. The remover of dangling allow rules is the case that forced this: it only ever takes an approval away so nothing about escalation is true of it, it declares no arguments so nothing about steering is true of it, and its own prose says outright that a command editing the file which decides what runs unasked has to be seen every time. It was called clean twice in three days and only a reader who opened the file stopped the rule being written.");
  ("So the author gets a vote beside the measurements. A refusal written in prose is worth no less than one worked out here - it is the same judgment made earlier by somebody with more of the picture - and this is the only kind that can say a grant is unwise where nothing about the code is.");
  let refused_itself = await function_grant_declined_is(unaliased);
  if (refused_itself) {
    list_add(
      refusals,
      unaliased +
        " has asked in its own words never to be handed a standing approval - read what it says before granting it anyway",
    );
  }
  ("Membership is read off the call graph rather than off the ending of the name, because the ending is wrong in both directions. It says yes to a book emoji and a bracket, which open nothing and were refused on a reason that was simply untrue of them; and it says nothing about the two openers that do not carry it, so the one tool standing before a rule is written stayed quiet about a function whose rule the gate would then go red over. Both come from the same source now.");
  ("The reason itself is about the environment, not about the seam. It used to say the showing is meaningless here, which was true only while reaching an opener from this seam threw; it prints instead now, so a rule on one would work. What is left is that whether the window appears is read from the environment rather than from the arguments, and a standing rule covers every invocation without being able to say which answer it is approving - which is the same bar this repo already sets for granting at all.");
  let opens = list_includes(openers, unaliased);
  if (opens) {
    list_add(
      refusals,
      unaliased +
        " puts a window on the human's screen, and whether it does is read from the environment rather than from its arguments, so one rule approves both answers — grant a function that does the same work without the showing",
    );
  }
  ("Both questions this asks about the function's own parameters are read off one tree. Finding the file and parsing it is the whole cost, and it does not depend on which of the two is being asked, so asking each from a name paid for the same parse twice - four hundred and forty names, eight hundred and eighty parses.");
  let ast = await function_ast_memo(unaliased, parsed);
  let params = js_flo_params_get(ast);
  let takes_arguments = greater_than(params.length, 0);
  let seams = await function_command_seams_reached_memo(unaliased, remembered);
  let reaches = greater_than(seams.length, 0);
  ("Reaching a command-running function is only a reason to refuse when there are arguments that could steer it there. The refusal is a sentence about arguments, and a function declaring none cannot have it be true: a rule covers every argument the function is ever handed, and handing arguments to a function that declares none changes nothing it does. That is exactly the condition this repo already states for granting at all - behaviour fixed regardless of the arguments - so an empty parameter list proves it rather than estimating it. Without this the gates and reports, which take nothing and are the most worth granting, were the ones refused.");
  ("What the refusal says is what was measured, and no more. Two things are known here - the function declares arguments, and something it reaches runs commands - and the third thing, whether an argument can travel from one to the other, is exactly what is not looked at. Saying outright that the arguments CAN become a command line reads as that third thing having been found, and a reader who then goes and traces it finds it is not so: on the promote-and-deploy command the argument reaches no command runner at all, and the branch that does takes no arguments. The refusal is still right to stand, because not-looked-at is not the same as ruled-out. It is the sentence that has to stop claiming more than the check did.");
  let steerable = and(reaches, takes_arguments);
  if (steerable) {
    list_add(
      refusals,
      unaliased +
        " declares arguments and reaches a command-running function, so nothing here can rule out an argument steering one: " +
        list_join_comma(seams),
    );
  }
  ("Reaching a function that writes the permission rules is the one refusal about escalation rather than about damage. A grant here does not merely let something run unasked, it lets something decide what else runs unasked, so approving it approves whatever it goes on to approve. Without this the one tool standing between a bad grant and the settings file was blind to the single category that matters most, and the function that grants rules straight from the prompt record passed it clean.");
  ("The same argument condition as above, and for the same reason rather than by imitation. The two rules that already stand are argument-free regenerators - one renders the settings file from the granted-names list, the other renders that list from itself - so what they write is fixed by committed source, and a grant covering every argument they are ever handed covers nothing they would not do anyway. Changing what they write means editing the source first, which is a visible edit and not something a standing approval buys. What the condition cannot see is an argument-free function that adds rules from something outside the source, a log say; none exists today, and if one is written this check will pass it.");
  let permission_seams = functions_permission_seams();
  let rules_written = await function_seams_reached_memo(
    unaliased,
    permission_seams,
    remembered,
  );
  let writes_rules = greater_than(rules_written.length, 0);
  let escalates = and(writes_rules, takes_arguments);
  if (escalates) {
    list_add(
      refusals,
      unaliased +
        " reaches a function that writes Claude's own permission rules, so approving it approves whatever it goes on to approve: " +
        list_join_comma(rules_written),
    );
  }
  ("A word inside a parameter's name is a guess about what the parameter holds, and the guess is wrong often enough to matter - chapter_code holds a Bible chapter identifier, not source text. Reading the shape of the name instead would loosen the check for every function nobody has looked at, so the function declares the exception itself and an unmarked parameter is still refused.");
  let plain = function_params_plain_ast(ast);
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
