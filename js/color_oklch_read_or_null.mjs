import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export function color_oklch_read_or_null(written) {
  arguments_assert(arguments, 1);
  ("The three numbers out of a colour written in the perceptual form - its lightness, its colourfulness and its hue - together with how solid it is, or nothing at all when what was handed over is not written that way.");
  ("IT READS WHAT ",
    fn_name("color_oklch"),
    " WRITES, AND SAYS NOTHING RATHER THAN GUESSING AT ANYTHING ELSE. The wider written form allows a lightness as a percentage, a hue with a unit after it, and the word none in place of a number. Each of those would be a branch here guessing at a caller that does not exist, and a wrong guess in a colour reader does not throw - it hands back a colour, slightly the wrong one, to something that will draw it. Nothing came back is a fault at the asking end and gets looked at.");
  ("How solid it is is allowed after a slash, and only as a plain number. That one extra form is in because it is the one the wider written form reaches for first and because it cannot be mistaken for anything else; a percentage there is refused along with the rest.");
  let lower = written.trim().toLowerCase();
  let opens = lower.startsWith("oklch(");
  let closes = lower.endsWith(")");
  let shaped = opens && closes;
  if (not(shaped)) {
    return null;
  }
  let inside = lower.slice(6, -1);
  let sides = inside.split("/");
  let too_many = greater_than(sides.length, 2);
  if (too_many) {
    return null;
  }
  function plain_number_or_null(text) {
    "a piece of the written colour as a number, or nothing when it is blank or carries a unit";
    let trimmed = text.trim();
    let blank = equal(trimmed.length, 0);
    if (blank) {
      return null;
    }
    let value = Number(trimmed);
    let unreadable = Number.isNaN(value);
    if (unreadable) {
      return null;
    }
    return value;
  }
  let words = sides[0].trim().split(/\s+/);
  let three = equal(words.length, 3);
  if (not(three)) {
    return null;
  }
  function read_word(text) {
    "one of the three written pieces, as a number or as nothing";
    let value = plain_number_or_null(text);
    return value;
  }
  function unread(value) {
    "one of the three, when it could not be read";
    let gone = equal(value, null);
    return gone;
  }
  let numbers = words.map(read_word);
  let missing = numbers.some(unread);
  if (missing) {
    return null;
  }
  let alpha = 1;
  let has_alpha = equal(sides.length, 2);
  if (has_alpha) {
    let read = plain_number_or_null(sides[1]);
    let unreadable = equal(read, null);
    if (unreadable) {
      return null;
    }
    alpha = read;
  }
  let parts = {
    lightness: numbers[0],
    chroma: numbers[1],
    hue: numbers[2],
    alpha,
  };
  return parts;
}
