import { assert_message } from "./assert_message.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { number_to_words } from "./number_to_words.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bless_people_phrase(count) {
  "Who a blessing is for, said the way a person would say it out loud - 'that person'";
  "for one, and 'those two people', 'those sixty-four people' for more.";
  "It is spelled in words rather than digits because the player READS the prayer aloud,";
  "and a numeral is a thing you look at rather than something you say.";
  assert_message(
    greater_than(count, 0),
    "a blessing was asked for with nobody in sight - the ladder's lowest rung is one person, so the caller should not offer a prayer until at least one is visible",
  );
  if (equal(count, 1)) {
    let one = "that person";
    return one;
  }
  let many = text_combine_multiple(["those ", number_to_words(count), " people"]);
  return many;
}
