import { arguments_assert } from "./arguments_assert.mjs";
import { list_pairs_both_ways } from "./list_pairs_both_ways.mjs";
import { list_concat } from "./list_concat.mjs";
export function reply_typo_sounds() {
  "Pairs of spellings that sound the same, so that a word written the way it is heard still reads as the word it is. `filippines` is not a slip of the finger - it is somebody spelling a sound correctly and English spelling it differently.";
  "Each pair answered is one direction: the first is what the rules have written down, the second is what the message may hold instead. A pair that happens both ways is written once and turned round here, so the two directions cannot drift apart; a pair that happens only one way is written in its own list. A person who writes `f` for `ph` is not the same person as one who writes `ph` for `f`, so taking one direction away is moving the pair from the first list to the second.";
  "★ THESE ARE THE ONLY LENGTH-CHANGING MISTAKES NOT COUNTED AGAINST THE ONE-DROPPED-LETTER LIMIT. A dropped letter is limited because enough of them walk any word to any shorter word; a sounding-out swap changes the length by the fixed amount the pair itself states, so no number of them reaches anywhere a dropped letter could not already reach.";
  "The order of the pairs does not change what they read. The one reading them keeps the cheapest cost for every place it reaches and reopens a place whenever a cheaper way in turns up, so which pair is tried first changes only how soon the cheapest is found.";
  arguments_assert(arguments, 0);
  let both_ways = [
    ["c", "k"],
    ["ei", "ie"],
    ["ou", "u"],
    ["ph", "f"],
    ["s", "z"],
    ["y", "i"],
  ];
  let one_way = [
    ["ck", "k"],
    ["x", "ks"],
  ];
  let turned = list_pairs_both_ways(both_ways);
  let sounds = list_concat(turned, one_way);
  return sounds;
}
