import { firebase_path_fix } from "./firebase_path_fix.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_upload_object_compressed_md5 } from "./firebase_upload_object_compressed_md5.mjs";
import { equal } from "./equal.mjs";
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
  let held = property_exists(stored, name);
  if (not(held)) {
    return true;
  }
  let kept = property_get(stored, name);
  let md = await firebase_upload_object_compressed_md5(value);
  let same =
    equal(md, kept.md5) &&
    equal("application/json", kept.content_type) &&
    equal("no-cache", kept.cache_control);
  let n = not(same);
  return n;
}
