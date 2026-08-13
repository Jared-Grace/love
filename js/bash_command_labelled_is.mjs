import { arguments_assert } from "./arguments_assert.mjs";
import { bash_command_labels } from "./bash_command_labels.mjs";
import { list_includes } from "./list_includes.mjs";
export function bash_command_labelled_is(command, label) {
  "Whether one shell command line reaches for this program anywhere along it";
  "The whole line is asked rather than only its beginning. A line is often several commands joined together, and the interesting thing about the later ones is usually that they are there at all - so a question that only looked at the first would answer no about every program that is only ever reached for after a pipe.";
  arguments_assert(arguments, 2);
  let labels = bash_command_labels(command);
  let labelled = list_includes(labels, label);
  return labelled;
}
