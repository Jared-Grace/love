import { function_identifier_replace_lambda } from "./function_identifier_replace_lambda.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_identifier_replace_auto(
  f_name,
  identifier_name,
  replacement,
) {
  "Replaces every use of one name inside the function you name, and then puts the file back into the shape this repo writes.";
  "The twin without the suffix stops at the change and leaves the pass to whoever remembers it. That is the right shape for a step inside a larger command, which wants to run the pass once at the end rather than once per step, and it is the wrong shape for somebody typing one command and expecting the file to be finished. Both are wanted, so both are here, and the suffix says which is which the same way it does everywhere else in this repo.";
  "The pass is not a tidying step that could be skipped. It is what adds the import a newly written name needs, so stopping at the change can leave behind a file that does not load - and it loads fine for whoever just wrote it, because they still have the old copy in memory.";
  "Why this exists at all: replacing text anywhere in the file was reached for a hundred and thirty-seven times over three days, and a quarter of those were this - renaming one name inside one function. The command for it was already built and already approved, and it was still passed over, because it left a second step to remember. The aim of a command is what decides whether it gets used, and a command that is finished when it returns is a different aim from one that is nearly finished.";
  arguments_assert(arguments, 3);
  let lambda = function_identifier_replace_lambda(identifier_name, replacement);
  let output = await function_transform_auto(f_name, lambda);
  return output;
}
