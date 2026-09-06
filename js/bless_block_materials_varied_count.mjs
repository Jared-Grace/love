import { arguments_assert } from "./arguments_assert.mjs";
import { list_size_greater_than_assert_json } from "./list_size_greater_than_assert_json.mjs";
import { list_unique_is_assert_json } from "./list_unique_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export function bless_block_materials_varied_count(
  names,
  enough_hint,
  apart_hint,
) {
  "$plain enough_hint";
  "$plain apart_hint";
  "Refuses a list of materials that cannot tell one block from the next one, and hands back how many there are.";
  "Two ways the same list fails, and they are asked together because either one alone leaves the world looking identical from block to block. A list with one thing in it is used for every block there is; a list naming the same thing twice runs two blocks in a row on it, which is the same fault a reader can see from further away.";
  "MORE THAN ONE is how the first half is spelled, and at least two is what it means; for a length, which is a whole number and never below nought, those are the same sentence. It is spelled that way because the shared refusal already asks its question in that form, and rewriting the question here to suit the wording would have been a second copy of it.";
  "A block takes its material by counting round the list, so the LENGTH of the list is how far a player walks before the street starts over. That is why the count goes back rather than being thrown away: the caller reports it, and a count that quietly fell to nothing is the one shape both checks above pass on.";
  arguments_assert(arguments, 3);
  list_size_greater_than_assert_json(names, 1, enough_hint);
  list_unique_is_assert_json(names, apart_hint);
  let count = list_size(names);
  return count;
}
