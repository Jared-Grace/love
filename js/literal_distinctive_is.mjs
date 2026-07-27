import { text_size } from "./text_size.mjs";
import { text_letters_is } from "./text_letters_is.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
export function literal_distinctive_is(literal) {
  "A plain word is not distinctive, however long the report wants it to be. Asking only for length let index and white and chapter through, and those are the very values that mean a different thing in every file that spells them - so the finder offered a list whose head was pure coincidence, and its advice, followed, would have routed a property name through a getter for an upload.";
  "What makes a value distinctive is having a shape a person had to choose: a dot, an underscore, a slash, a digit, a capital, a space. Nobody writes a name joined out of three words by underscores twice by accident. A value made only of letters could be anybody's, so it has to be long before it counts as somebody's.";
  let size = text_size(literal);
  let short = less_than(size, 5);
  if (short) {
    return false;
  }
  let word = text_letters_is(literal);
  if (not(word)) {
    return true;
  }
  let long = greater_than_equal(size, 12);
  return long;
}
