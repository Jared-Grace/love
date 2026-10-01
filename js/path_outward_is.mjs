import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_skip } from "./text_skip.mjs";
export function path_outward_is(word) {
  "Whether a word is a path reaching out of whatever folder it was written in - starting at a root rather than inside.";
  "Every file this repo is made of is named relative to the repo, so a word naming a root could not have been one of them. That is the whole test: not whether it looks like a path, but whether it starts somewhere a repo-relative path never can.";
  "★ THE ROOTS ARE NOT ONLY THIS MACHINE'S. A SLASH AND A HOME ARE WHAT THIS MACHINE SPELLS, AND A CHECK THAT KNOWS ONLY THOSE CANNOT DISAGREE ABOUT A PATH WRITTEN ANYWHERE ELSE. THIS REPO'S OWN HISTORY HOLDS TWO MESSAGES CARRYING A WINDOWS DRIVE, WRITTEN FROM A CHECKOUT ON ANOTHER MACHINE, AND A READING THAT ASKED FOR A SLASH SAID CLEAN ABOUT BOTH.";
  "★ IT WILL NOT CATCH THOSE TWO AND IS NOT MEANT TO. THEY ARE DATED 2025-09-30 AND 2025-10-01, NEARLY A YEAR BEFORE THE PLACE ANY MESSAGE RULE BEGINS READING, SO THEY ARE ACCOUNTED FOR BY THAT PLACE AND NOT BY ANY PREDICATE. WHAT THIS BUYS IS THE NEXT ONE: THE WINDOWS CHECKOUT EXISTED ONCE AND THE WORDS A COMMAND WAS RUN WITH GO INTO A PUBLIC LOG VERBATIM.";
  "★ A LETTER IS NOT ASKED FOR BEFORE THE COLON, ON PURPOSE. NARROWING A LEAK DETECTOR IS THE DANGEROUS DIRECTION: ANY WORD WHOSE SECOND CHARACTER IS A COLON AND WHOSE THIRD IS A SEPARATOR IS NOT A REPO-RELATIVE PATH, WHATEVER ITS FIRST CHARACTER IS. A WEB ADDRESS IS UNTOUCHED BECAUSE ITS COLON SITS FOURTH OR LATER, NOT BECAUSE IT WAS EXEMPTED.";
  "A single tilde rather than a tilde and a slash, because a home can be spelled with somebody's name straight after it and that is the spelling that names them.";
  "A WORD CLIMBING OUT WITH TWO DOTS IS NOT COUNTED, AND THAT IS A GAP RATHER THAN A DECISION ABOUT MEANING. Two dots reach out of the repo as surely as a slash does, but they name no account and no layout, and over the thirteen thousand three hundred and thirty commits this rule reads there are none. If one ever turns up it belongs here.";
  arguments_assert(arguments, 1);
  let root = text_starts_with(word, "/");
  let home = text_starts_with(word, "~");
  let back = text_starts_with(word, "\\");
  let after = text_skip(word, 1);
  let drive_slash = text_starts_with(after, ":/");
  let drive_back = text_starts_with(after, ":\\");
  let outward = root || home || back || drive_slash || drive_back;
  return outward;
}
