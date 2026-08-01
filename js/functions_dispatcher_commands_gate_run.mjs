import { arguments_assert } from "./arguments_assert.mjs";
import { functions_dispatcher_commands_unresolved } from "./functions_dispatcher_commands_unresolved.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function functions_dispatcher_commands_gate_run() {
  "QA gate: every command the repo's writing tells a reader to run has to name a function that exists. Writing out the command is a promise that the word is real, and this is where the promise is kept. Throws so the dispatcher seam exits nonzero.";
  "Nothing here judges the bare names the docstrings are full of - those are narrative, and a rule cannot tell a stale one from a deliberate record of a rename. Only a spelled-out command is held to this, because only that one asks somebody to go and run it.";
  "The repair is a reading either way. Either the word was renamed and the sentence should now say the new name, or the thing it told you to run is gone and the sentence should go with it - and which of those it is cannot be known without opening the function the sentence sits in.";
  arguments_assert(arguments, 0);
  let unresolved = await functions_dispatcher_commands_unresolved();
  for (let one of unresolved) {
    let name = property_get(one, "name");
    let f_name = property_get(one, "f_name");
    console.log("dead command  " + name + "  told by  " + f_name);
  }
  console.log("dead commands: " + unresolved.length);
  if (list_empty_not_is(unresolved)) {
    throw new Error(
      "dispatcher command gate: " +
        unresolved.length +
        " commands written down in this repo name no live function - was the function renamed, so the sentence should say its new name, or is it gone, so the sentence should go too?",
    );
  }
  let r = {
    unresolved: 0,
  };
  return r;
}
