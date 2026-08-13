import { arguments_assert } from "./arguments_assert.mjs";
import { bash_command_pieces } from "./bash_command_pieces.mjs";
import { list_map } from "./list_map.mjs";
import { bash_command_label } from "./bash_command_label.mjs";
export function bash_command_labels(command) {
  "A short stable name for every command inside one shell command line, so a line reaching for two programs counts as one of each";
  arguments_assert(arguments, 1);
  let pieces = bash_command_pieces(command);
  let labels = list_map(pieces, bash_command_label);
  return labels;
}
