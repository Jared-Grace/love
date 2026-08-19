import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { number_from_text } from "./number_from_text.mjs";
export function js_code_getter_number(code, f_name) {
  "The one number a getter of that name hands back, or nothing at all when the file is shaped some other way.";
  "This is the twin of the reader over written-out words, and it is asked the same question: is this function's whole job to hand back one value somebody chose? Only the number that is actually returned counts. A number merely standing in the body is as likely to be a length being compared against or a place being counted to, and reading one of those as the function's value would point every site holding that number at a function that hands back something else entirely - the one mistake this shape of repair can make and never notice.";
  "It reads the written source rather than the tree, because the reader over words does, and the two are asked side by side about the same file by the routing above them. A number that has been written in a way the plain reading does not recognise is answered as nothing, which refuses the route rather than guessing at it.";
  "A body that hands something back in more than one place is not a getter at all, and is refused before anything is read out of it. Without that it answered with whichever return came first, so a function giving up with nought part-way through and choosing its real value below would have been read as the nought - and every site in the repo holding that number would then have been pointed at a function that mostly hands back something else. A return counted here is one standing at the start of its own line, which is every real one and no word inside a written-out sentence.";
  arguments_assert(arguments, 2);
  let start = code.indexOf("export function " + f_name + "()");
  if (less_than(start, 0)) {
    return null;
  }
  let body = code.slice(start).split("\n}")[0];
  let returns = body.match(/^\s*return\b/gm);
  if (null_is(returns)) {
    return null;
  }
  let one_return_only = equal(returns.length, 1);
  if (not(one_return_only)) {
    return null;
  }
  let direct = body.match(/return\s+(-?\d+(?:\.\d+)?)\s*;/);
  if (direct) {
    let r = number_from_text(direct[1]);
    return r;
  }
  let named = body.match(
    /let\s+([A-Za-z_$][\w$]*)\s*=\s*(-?\d+(?:\.\d+)?)\s*;\s*return\s+\1\s*;/,
  );
  if (named) {
    let r2 = number_from_text(named[2]);
    return r2;
  }
  return null;
}
