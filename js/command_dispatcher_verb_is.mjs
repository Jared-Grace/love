import { arguments_assert } from "./arguments_assert.mjs";
import { dispatcher_scripts } from "./dispatcher_scripts.mjs";
import { text_includes } from "./text_includes.mjs";
export function command_dispatcher_verb_is(verb) {
  "$plain verb";
  arguments_assert(arguments, 1);
  ("whether a verb read off a command line is a call into one of this repo's dispatchers");
  ("a verb is read as far as the script and no further, so every call into a dispatcher wears the same verb whichever function it went on to run. That is what makes this worth asking: the verb says the line reaches a function, and the name of that function has to be looked for elsewhere.");
  for (let script of dispatcher_scripts()) {
    let found = text_includes(verb, script);
    if (found) {
      return true;
    }
  }
  return false;
}
