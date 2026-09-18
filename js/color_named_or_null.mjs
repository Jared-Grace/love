import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function color_named_or_null(written) {
  arguments_assert(arguments, 1);
  ("the digits behind a colour this repo writes by name, or nothing when the name is not one of them");
  ("TWO NAMES, BECAUSE TWO ARE WHAT THIS REPO WRITES. A page may say any of a hundred and forty-eight colour names and nothing here would know them; what is wanted is not a table of the language but the handful of words the repo's own colour functions hand back, and those are black and white.");
  ("A SURVEY LIKE THAT GOES STALE, SO THE COST OF IT GOING STALE IS WHAT MATTERS. Nothing here guesses at a name it does not know - it says nothing, and every reader of this is checking a colour it must be able to read. So a third name arriving one day is a loud fault in whatever asked, naming the word it could not read, rather than a colour quietly skipped. That is the only shape a surveyed list is safe in.");
  ("Names rather than the colours themselves, because the digits are what every rule about light and readability is worked out from, and a word carries none.");
  let names = {
    black: "#000000",
    white: "#ffffff",
  };
  let hex = property_get_or_null(names, written);
  return hex;
}
