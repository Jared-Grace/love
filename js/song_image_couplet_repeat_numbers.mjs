import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export function song_image_couplet_repeat_numbers(n) {
  "$plain n";
  "Every couplet that sings the words of couplet n: couplet n first, and after it each couplet that repeats it, in the order they are sung.";
  "A LINE IS WRITTEN DOWN ONCE AND DRAWN AS MANY TIMES AS IT IS SUNG. The page prints the same two lines only once, because twice reads as a mistake, but each singing of them was given its own emblem and each emblem is its own picture of what the line means. So the page needs one entry and all of its pictures, and this is what turns the one into the other.";
  "A line the song never repeats answers with itself alone, so a caller can show pictures for whatever comes back without asking first whether there is more than one.";
  arguments_assert(arguments, 1);
  let couplets = song_image_couplets();
  let numbers = [n];
  for (let couplet of couplets) {
    let repeats = equal(couplet.same_as, n);
    if (repeats) {
      list_add(numbers, couplet.n);
    }
  }
  return numbers;
}
