import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { function_declaration_overwrite } from "./function_declaration_overwrite.mjs";
import { function_from_temp_generic } from "./function_from_temp_generic.mjs";
export async function function_overwrite_from_temp(f_name) {
  "Puts a function drafted in the throwaway folder over the function of that name that is already in the repo, refusing anything that is not exactly one exported function named after itself.";
  "The second half of the door out of the commands-only switch. The first half promotes a draft under a name nothing answers to yet and refuses a name that is taken, which is right - a new file quietly landing on an existing function is the way a whole function has been lost before with nothing going red. But that left rewriting a function reachable only through a transform, and a change no transform makes had nowhere to go at all: the way through was building the transform first, which is the right answer for a shape that will recur and pure overhead for one that will not.";
  "This one refuses the opposite answer to the same question: the name has to be one the repo already answers to. So it can never make a file, and the function it writes over is the one the caller spelled out - an overwrite that was asked for by name is not the accident the other half guards against.";
  "Everything that makes the door narrow is asked next door and asked identically here, and that is now literally so rather than a claim about two copies: both halves hand their one differing step to the same shared opening and ending, so a draft holding two units, or one named after something else, is refused in one place before either half decides anything.";
  arguments_assert(arguments, 1);
  async function function_overwrite_from_temp_write(declaration, base) {
    "The name is insisted on here, and the insisting has to come before the writing rather than beside it: the write names the file it lands on, so a name nothing answers to would make one.";
    await function_exists_assert(base);
    await function_declaration_overwrite(declaration, base);
  }
  let output = await function_from_temp_generic(
    f_name,
    function_overwrite_from_temp_write,
  );
  return output;
}
