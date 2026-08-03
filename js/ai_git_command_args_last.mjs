import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { ai_git_command_generic } from "./ai_git_command_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
export async function ai_git_command_args_last(f_name, args_comma, last) {
  arguments_assert(arguments, 3);
  ("The same way in as its sibling, for a command whose last argument is a sentence: everything before the last arrives comma-joined, and the last arrives whole.");
  ("It exists because the joined shape cannot carry a comma, and the commands most worth recording are the ones whose last argument has one. A sentence added to a function's own account of itself is the plainest case - that command takes its sentence as a whole argument for exactly this reason, and until now the commit that recorded it could not. What was written was a shortened sentence, which names a command that would not reproduce the commit: the very thing the joined shape was built to prevent, arriving by the other door.");
  ("Only the last argument is taken out of the joined list, rather than every argument being handed over separately. A command line hands each word over on its own, so a function taking each argument separately would have no way to tell one argument holding two words from two arguments - which is the problem the joined shape solves, and it is worth keeping for every argument that can live inside it.");
  ("The count is asserted because the failure this guards against is silent. An unquoted sentence arrives as several words, a function declaring three parameters would keep the first three and drop the rest, and the commit would go in claiming a command nobody could run again.");
  let args = text_split_comma_or_empty(args_comma);
  list_add(args, last);
  let result = await ai_git_command_generic(f_name, args);
  return result;
}
