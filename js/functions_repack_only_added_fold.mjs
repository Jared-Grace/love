import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_repack_only_added_fold_round } from "./functions_repack_only_added_fold_round.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { functions_repack_only_added } from "./functions_repack_only_added.mjs";
export async function functions_repack_only_added_fold() {
  "Puts back where they came from every function whose whole product is a record it took apart and put back together and that the repo was not already carrying, and keeps going until a round moves nothing.";
  "It finds its own set rather than being handed one, so it cannot drift from what is actually wrong. Folding one of these into its caller very often makes the caller into one of them in turn, which is why one pass is not enough and why the set is asked for again at the top of every round instead of being worked out once.";
  "A name that will not fold is carried forward as refused, so the next round leaves it alone and the walk cannot circle on it. What is still standing at the end travels out by name: those are bodies for somebody to read, not work left undone by accident.";
  "Anything already noted as changed is committed under the bare word first, so the first fold's commit carries its own files and not somebody else's leftovers.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let folded = [];
  let refused = [];
  let rounds = 0;
  let moving_is = true;
  while (moving_is) {
    rounds = rounds + 1;
    let round_answer = await functions_repack_only_added_fold_round(refused);
    let moved = property_get(round_answer, "folded");
    let refusing = property_get(round_answer, "refusing");
    list_add_multiple(folded, moved);
    list_add_multiple(refused, refusing);
    moving_is = list_empty_not_is(moved);
  }
  let standing = await functions_repack_only_added();
  let r = {
    rounds,
    folded,
    standing,
  };
  return r;
}
