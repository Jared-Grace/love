import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
export function color_written_css(written) {
  arguments_assert(arguments, 1);
  ("a colour as it is spelled in source, rewritten into the spelling CSS uses. A hex literal and an rgb call are already that and come back untouched; a ",
    fn_name("color_oklch"),
    " call of three plain numbers becomes the oklch colour it builds.");
  ("THE ONE DOOR BETWEEN HOW A COLOUR IS TYPED AND WHAT IT IS, AND IT EXISTS BECAUSE THE SHORT WAY ROUND IS WRONG WITHOUT LOOKING WRONG. A reader of source finds ",
    fn_name("color_oklch"),
    "(0.5, 0.2, 25); handing that text straight to a colour parser does not fail, which is the trouble - the parser finds three numbers in brackets, reads them as red 0.5, green 0.2, blue 25, and answers with a near-black. Every colour written that way then lands in the same dark corner and reads as a near miss of every other one. A wrong answer that arrives quietly is worse than none, so the rewriting happens here, before anything parses anything.");
  ("Anything this does not recognise is handed back as it came, which is right rather than lazy: the caller's regex decides what counts as a colour, and every other spelling it yields is already CSS. A call whose arguments are not plain numbers never reaches here, because a colour built out of variables is not a fixed colour and the regex does not match it.");
  let prefix = text_combine_multiple([fn_name("color_oklch"), "("]);
  let call = text_starts_with(written, prefix);
  if (not(call)) {
    return written;
  }
  let difference = subtract(written.length, 1);
  let inside = written.slice(prefix.length, difference);
  let parts = inside.split(",");
  let numbers = [];
  for (let part of parts) {
    let word = part.trim();
    if (greater_than(word.length, 0)) {
      numbers.push(word);
    }
  }
  if (not_equal(numbers.length, 3)) {
    throw new Error(
      "color written css: " +
        written +
        " is spelled like an oklch colour but holds " +
        numbers.length +
        " numbers where a lightness, a chroma and a hue are three",
    );
  }
  let css = "oklch(" + numbers.join(" ") + ")";
  return css;
}
