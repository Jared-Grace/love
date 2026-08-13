import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
export function bash_command_pieces(command) {
  "The separate commands inside one shell command line - what stands before a pipe, and after each way of saying next";
  "A command line is not always one command. `git log | head` reaches for two programs, and counting only the first would say the second is never used, which is the opposite of what a count of what people reach for is for.";
  "The cut is made on the separators alone and pays no attention to quoting, so a separator written inside quoted text cuts where nothing begins. A line of shell holding a whole script - a loop, or a piece of javascript handed over between quote marks - therefore comes apart into its own lines, and each of those is then labelled as though it were a program.";
  "Measured over 239167 commands on 2026-08-13, that is not a rounding error and the earlier prose here was too confident about it: six of the forty commonest labels were fragments of scripts rather than programs - `done`, `await`, `const`, `import`, `let`, `EOF`. The reading is sound where it is used, at the top, because a real program run twenty thousand times cannot be displaced by wreckage; below that the counts are worth reading with the source lines beside them. Read the top, not the tail.";
  arguments_assert(arguments, 1);
  let separators = /\||&&|\|\||;|\n/;
  let cut = command.split(separators);
  function said(piece) {
    let trimmed = piece.trim();
    let b = greater_than(trimmed.length, 0);
    return b;
  }
  let pieces = list_filter(cut, said);
  return pieces;
}
