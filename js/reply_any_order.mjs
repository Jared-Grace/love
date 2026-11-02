import { arguments_assert } from "./arguments_assert.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { list_map } from "./list_map.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_any_order(pieces) {
  arguments_assert(arguments, 1);
  ("Every one of the pieces, each exactly once, in whatever order the message happens to put them. The orderings are written out rather than searched for, so the number of them grows as a factorial: keep the list small.");
  function sequence_of(ordering) {
    let sequence = reply_sequence(ordering);
    return sequence;
  }
  let orderings = list_permutations(pieces);
  let sequences = list_map(orderings, sequence_of);
  let any_order = reply_choice(sequences);
  return any_order;
}
