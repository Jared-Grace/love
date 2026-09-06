import { arguments_assert } from "./arguments_assert.mjs";
import { git_here_run_text } from "./git_here_run_text.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export async function git_here_run_lines(asked) {
  "$plain asked";
  "The lines one git command printed in the folder the caller is standing in, with the empty ones dropped.";
  "★ GIT ANSWERS A LIST AS TEXT AND A CALLER WANTS A LIST, so every caller was splitting it back apart. What a caller then does with the list is different every time - look for a name in it, count it, walk it - but the taking apart was the same taking apart, and it was written out at each place.";
  "★ THE EMPTY LINES ARE DROPPED RATHER THAN KEPT AND STEPPED OVER, because git prints them for its own reasons - a blank line between a format and a body, a trailing newline - and none of them is ever an answer. A caller that kept them would have to know which of git's own subcommands pads which way, which is exactly the knowledge that should not be spread about.";
  arguments_assert(arguments, 1);
  let squeezed = await git_here_run_text(asked);
  let split = text_split_newline(squeezed);
  let lines = list_filter(split, text_empty_not_is);
  return lines;
}
