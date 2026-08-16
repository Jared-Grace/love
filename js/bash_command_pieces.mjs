import { text_split_outside_quotes } from "./text_split_outside_quotes.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
export function bash_command_pieces(command) {
  "The separate commands inside one shell command line - what stands before a pipe, and after each way of saying next";
  "A command line is not always one command. `git log | head` reaches for two programs, and counting only the first would say the second is never used, which is the opposite of what a count of what people reach for is for.";
  "The cut minds quotation marks, so a separator standing inside quoted text does not cut. That matters more than it sounds: a line that hands a whole command to something else as a quoted argument - a check of what the guard would say about it, most of all - carries every separator that command carries, and cut blindly it came apart into pieces nobody ran, so a program named only inside the quotation marks was counted as though it had been reached for. The same blindness took a script handed over between quote marks apart into its own lines and labelled each one as a program.";
  "Measured over 239167 commands on 2026-08-13, back when the cut was blind, that was not a rounding error: six of the forty commonest labels were fragments of scripts rather than programs - `done`, `await`, `const`, `import`, `let`, `EOF`. Those came from the cut rather than from the sessions, and minding the quotation marks is what stops them being counted. A count taken before that date is inflated by an amount nobody measured, so read one against another only if both were taken since.";
  arguments_assert(arguments, 1);
  let separators = ["||", "&&", "|", ";", "\n"];
  let cut = text_split_outside_quotes(command, separators);
  function said(piece) {
    let trimmed = piece.trim();
    let b = greater_than(trimmed.length, 0);
    return b;
  }
  let pieces = list_filter(cut, said);
  return pieces;
}
