import { text_space_nb } from "./text_space_nb.mjs";
import { text_replace } from "./text_replace.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_code_lesson_title_code_breakable(code) {
  "a piece of a title's code as it is shown, with the places a line may break put between its tokens";
  "the spaces in the code are made ordinary ones, so a piece wider than a whole row breaks between its tokens - let rest = / Math.floor(n / 10); - rather than inside one, at the human's request, 2026-09-28. Before, every space was one that does not break, and the title's break-anywhere rule, the last resort for a line that fits nowhere, cut through the middle of a token - the 10 was split into 1 and 0";
  ("the other places a line may break, just after a bracket and after a dot with a letter after it, are left by the writer rather than written into the text here, because a character marking them would be copied along with the code - see ",
    fn_name("text_code_break_pieces"));
  let nb = text_space_nb();
  let spaced = text_replace(code, nb, " ");
  return spaced;
}
