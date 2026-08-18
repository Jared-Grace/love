import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
export function bless_prayer_of(right) {
  arguments_assert(arguments, 1);
  ("The blessing prayer, given who or what it is for - 'God bless ' and then the rest.");
  ("Every rung of the ladder prays these same two words and differs only in what follows,");
  ("which is the point of the ladder: praying for a city is not a different prayer from");
  ("praying for one person, it is the same prayer said of more people. Written once here, so");
  ("no rung can quietly word it differently as the game climbs.");
  let text = text_combine("God bless ", right);
  return text;
}
