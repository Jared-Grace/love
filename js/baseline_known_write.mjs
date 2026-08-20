import { baseline_known_collapse_assert } from "./baseline_known_collapse_assert.mjs";
import { baseline_known_write_unchecked } from "./baseline_known_write_unchecked.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function baseline_known_write(known, path) {
  arguments_assert(arguments, 2);
  ("Put what a ratchet knows on disk, and answer how many that is.");
  ("The twin of the shared reader. Every gate that measures against what the repo");
  ("already carried keeps its list under the same key in the same shape, so writing");
  ("one is the same act whichever gate is asking, and the name of the file is the");
  ("only thing that stays at the call.");
  ("Eight writers had spelled this out separately, alike to the character. The one");
  ("that matters is the key: a reader looking for known and a writer spelling it");
  ("something else would leave a file that reads back empty, and an empty baseline");
  ("refuses nothing.");
  ("It will not empty a record that was holding names, which is the one shape a");
  ("reading that reached nothing arrives in. Emptying one on purpose is asked for by");
  ("its own name, and the refusal says which name.");
  await baseline_known_collapse_assert(known, path);
  let r = await baseline_known_write_unchecked(known, path);
  return r;
}
