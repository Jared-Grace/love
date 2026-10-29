import { functions_outside_direct } from "./functions_outside_direct.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { functions_auto_seams } from "./functions_auto_seams.mjs";
import { functions_outside_irreversible_fenced } from "./functions_outside_irreversible_fenced.mjs";
import { functions_outside_direct_harmless } from "./functions_outside_direct_harmless.mjs";
import { list_difference } from "./list_difference.mjs";
export async function functions_outside_direct_unlisted() {
  "The functions that go outside directly and nobody has decided about yet - on no list of what an unseen grant must not reach, not fenced, and not marked harmless. Each one is a place the walk is blind and the self-grant would let through.";
  let direct = await functions_outside_direct();
  let seams = functions_auto_seams();
  let names = functions_outside_irreversible_fenced();
  let names2 = functions_outside_direct_harmless();
  let decided = list_concat_multiple([seams, names, names2]);
  let unlisted = list_difference(direct, decided);
  return unlisted;
}
