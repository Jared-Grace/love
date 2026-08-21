import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_bytes } from "./youtube_api_bytes.mjs";
export async function youtube_api_delete(path, params) {
  "$plain path";
  "$plain params";
  "Tells YouTube's own door to do away with one thing it holds, and says so once it is gone.";
  "Nothing comes back to read. A door that has done away with something has nothing left to describe, so it answers with an empty hand, and trying to read that empty hand as a record fails - which is why this says plainly that it worked rather than handing back an answer.";
  "That it worked is known because anything other than success stops this before it returns. The layer underneath refuses a reply that is not a success, so reaching the end is itself the proof.";
  "There is no undoing this and no asking first. Whether the thing should go is settled before getting here, and by somebody who knows what it is.";
  arguments_assert(arguments, 2);
  await youtube_api_bytes("DELETE", path, params, null);
  let r = {
    deleted: true,
  };
  return r;
}
