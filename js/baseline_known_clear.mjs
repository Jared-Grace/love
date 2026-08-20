import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_write_unchecked } from "./baseline_known_write_unchecked.mjs";
export async function baseline_known_clear(path) {
  arguments_assert(arguments, 1);
  ("Empty one ratchet's record on purpose, because every name it was holding really has been dealt with.");
  ("The ordinary writer refuses this, and refuses it for a reason worth keeping: a reading that reached nothing looks exactly like a reading that found nothing wrong, and a record only ever shrinks, so an empty one written by accident is never complained about again. What separates the two is not anything in the numbers - it is whether a person meant it. So this exists to be the saying-so.");
  ("It takes the file rather than the gate, because that is what the refusal hands back and what every ratchet is told apart by. Whoever meets the refusal can run this against the same path without working anything out.");
  ("Nothing here checks that the clearing is honest, because nothing could. What it buys is that emptying a record is a thing somebody chose by name, and shows up afterwards as its own line in the log rather than hidden inside a routine rewrite.");
  let known = [];
  let r = await baseline_known_write_unchecked(known, path);
  return r;
}
