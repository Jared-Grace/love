import { text_space_nb } from "./text_space_nb.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_space_zero_width } from "./text_space_zero_width.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_title_code_breakable(code) {
  "a piece of a title's code as it is shown, with the places a line may break put between its tokens";
  "the spaces in the code are made ordinary ones, so a piece wider than a whole row breaks between its tokens - let rest = / Math.floor(n / 10); - rather than inside one, at the human's request, 2026-09-28. Before, every space was one that does not break, and the title's break-anywhere rule, the last resort for a line that fits nowhere, cut through the middle of a token - the 10 was split into 1 and 0";
  "a place to break is also left just after every opening bracket, because a call and its first argument are written with no space between them - Math.floor(chair / columns) has none before chair, so the break-anywhere rule cut Math.floor itself in two. Just after the bracket keeps the name whole and the bracket with it, at the human's request, 2026-09-28.";
  "a place to break is left after a dot too, but only a dot with a letter after it - console.log(a + b); split inside log when the break fell nowhere else, at the human's request, 2026-09-28. A dot is where one name hands on to the next, so console. / log( keeps both whole. Every dot was the other choice, and was left out: it would split a number like 3.14 as readily as a name";
  let nb = text_space_nb();
  let spaced = text_replace(code, nb, " ");
  let zero = text_space_zero_width();
  let opened = text_combine_multiple(["(", zero]);
  let bracketed = text_replace(spaced, "(", opened);
  let dotted = text_combine_multiple([".", zero]);
  let shown = bracketed.replace(/\.(?=[A-Za-z_$])/g, dotted);
  return shown;
}
