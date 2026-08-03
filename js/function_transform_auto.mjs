import { arguments_assert } from "./arguments_assert.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_transform_auto(f_name, lambda$ast) {
  "Changes one function and then puts the file back into the shape this repo writes, which is the pair a command run straight from the command line ends with.";
  "Running the pass afterwards is not a tidying step that could be skipped. It is what adds the import a newly written call needs, so a command that changed a function and stopped there can leave behind a file that does not load - and the file loads fine for the one who wrote it, because they still have the old copy in memory.";
  "Five commands ended with these same two lines before this existed. The pair is small enough to write out each time and exactly for that reason it was, which is how the one that forgot the second line would have looked like all the others.";
  arguments_assert(arguments, 2);
  let output = await function_transform(f_name, lambda$ast);
  await function_auto(f_name);
  return output;
}
