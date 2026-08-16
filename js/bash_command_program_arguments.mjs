import { bash_command_pieces } from "./bash_command_pieces.mjs";
import { text_words_quoted } from "./text_words_quoted.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function bash_command_program_arguments(command, program) {
  "Everything one named program was handed along a shell command line, gathered from every place along the line where that program was the thing being run.";
  "A ranking says which programs are reached for and what they are reached for beside. Neither says what they were pointed at, and for deciding whether a program is a hole the repo should fill that is the whole question: a program pointed at the repo's own files is a shape of work a named command could take over, and the same program pointed somewhere else is not.";
  "The whole line is read rather than only its beginning, for the same reason the labels are: a program that only ever runs after a pipe would otherwise answer that it is never handed anything.";
  arguments_assert(arguments, 2);
  let pieces = bash_command_pieces(command);
  let given = [];
  for (let piece of pieces) {
    let words = text_words_quoted(piece);
    let empty = equal(words.length, 0);
    if (empty) {
      continue;
    }
    let first = words[0];
    let other = not_equal(first, program);
    if (other) {
      continue;
    }
    let rest = words.slice(1);
    list_add_multiple(given, rest);
  }
  return given;
}
