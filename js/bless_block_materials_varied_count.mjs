import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_unique_is } from "./list_unique_is.mjs";
export function bless_block_materials_varied_count(
  names,
  enough_hint,
  apart_hint,
) {
  "$plain enough_hint";
  "$plain apart_hint";
  "Refuses a list of materials that cannot tell one block from the next one, and hands back how many there are.";
  "Two ways the same list fails, and they are asked together because either one alone leaves the world looking identical from block to block. A list with one thing in it is used for every block there is; a list naming the same thing twice runs two blocks in a row on it, which is the same fault a reader can see from further away.";
  "A block takes its material by counting round the list, so the LENGTH of the list is how far a player walks before the street starts over. That is why the count goes back rather than being thrown away: the caller reports it, and a count that quietly fell to nothing is the one shape both checks above pass on.";
  arguments_assert(arguments, 3);
  let count = list_size(names);
  let enough = greater_than_equal(count, 2);
  assert_json(enough, {
    count,
    hint: enough_hint,
  });
  let apart = list_unique_is(names);
  assert_json(apart, {
    names,
    hint: apart_hint,
  });
  return count;
}
