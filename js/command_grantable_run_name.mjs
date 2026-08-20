import { arguments_assert } from "./arguments_assert.mjs";
import { command_dispatcher_verb_is } from "./command_dispatcher_verb_is.mjs";
import { command_operators_unfoldable } from "./command_operators_unfoldable.mjs";
import { command_verbs_all } from "./command_verbs_all.mjs";
import { dispatcher_run_name } from "./dispatcher_run_name.mjs";
import { not } from "./not.mjs";
import { set_includes } from "./set_includes.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_replace } from "./text_replace.mjs";
export function command_grantable_run_name(command, allow_verbs) {
  "$plain command";
  arguments_assert(arguments, 2);
  ("the one function a rule would have to name for this command line to stop asking, or empty text where no single grant would answer the line");
  ("a chain was read as answerable by nothing, on the reasoning that whatever follows a semicolon rides in on the grant written for what precedes it. That is true of a redirect and a substitution and it is false of a pipeline: the guard approves a sequence when every verb in it is approved, so a function piped into a tool for trimming its output is one grant away from silence, and the trimming tools are approved already. Measured on a week of interruptions, reading those as ungrantable mislaid three hundred rows.");
  ("the two shapes taken off before looking are the ones that only look like chaining. A doubled ampersand joins two commands the way a semicolon does, and a stderr redirect joins one of a command's own outputs to the other rather than writing anything.");
  ("every verb but the dispatcher's own has to be approved already, because a grant is written to a function and there is only one being offered here. A verb that reaches a dispatcher is passed over rather than checked: it is the verb of the call this is naming.");
  let text = text_replace(command, "&&", ";");
  text = text_replace(text, "2>&1", "");
  for (let operator of command_operators_unfoldable()) {
    let unfoldable = text_includes(text, operator);
    if (unfoldable) {
      let none = text_empty();
      return none;
    }
  }
  let name = dispatcher_run_name(text);
  let unnamed = text_empty_is(name);
  if (unnamed) {
    let none = text_empty();
    return none;
  }
  for (let verb of command_verbs_all(text)) {
    let own = command_dispatcher_verb_is(verb);
    if (own) {
      continue;
    }
    let allowed = set_includes(allow_verbs, verb);
    if (not(allowed)) {
      let none = text_empty();
      return none;
    }
  }
  return name;
}
