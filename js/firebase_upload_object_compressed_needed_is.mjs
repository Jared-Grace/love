import { firebase_path_fix } from "./firebase_path_fix.mjs";
import { equal } from "./equal.mjs";
import { firebase_upload_object_compressed_md5 } from "./firebase_upload_object_compressed_md5.mjs";
import { not } from "./not.mjs";
export async function firebase_upload_object_compressed_needed_is(
  stored,
  destination,
  value,
) {
  "$plain destination";
  "Whether writing one value by the compressed upload would change what storage holds, given what storage was found holding.";
  "IT SAYS NO ONLY WHEN ALL THREE AGREE - the bytes, the kind of file, and how long a reader may keep it. Those are everything that upload writes, so a file they all agree on is one that writing again would leave exactly as it was.";
  "Anything storage was not found holding is written.";
  let name = firebase_path_fix(destination);
  let kept = stored[name];
  if (equal(kept, undefined)) {
    return true;
  }
  let md = await firebase_upload_object_compressed_md5(value);
  let same =
    equal(md, kept.md5) &&
    equal("application/json", kept.content_type) &&
    equal("no-cache", kept.cache_control);
  let n = not(same);
  return n;
}
