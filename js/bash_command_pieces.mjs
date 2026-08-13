import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
export function bash_command_pieces(command) {
  "The separate commands inside one shell command line - what stands before a pipe, and after each way of saying next";
  "A command line is not always one command. `git log | head` reaches for two programs, and counting only the first would say the second is never used, which is the opposite of what a count of what people reach for is for.";
  "The cut is made on the separators alone and pays no attention to quoting, so a separator written inside quoted text cuts where nothing begins. That is worth knowing and not worth fixing here: this is read as a tally of what gets reached for, where a handful of miscut lines move no ranking, and the guard refuses most chained lines anyway so there are few of them to miscut.";
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
