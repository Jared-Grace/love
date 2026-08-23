import { firebase_upload_settings } from "./firebase_upload_settings.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export async function firebase_upload_generic(destination, settings, buffer) {
  "Writes a file to storage, said to be one a reader should ask about again rather than keep.";
  "The merge is strict, so a caller that says anything about how the file is described collides with that rather than replacing it - and the door to take when that is what you meant is the one this calls.";
  let merged = object_merge_set(
    {
      metadata: {
        cacheControl: "no-cache",
      },
    },
    settings,
  );
  await firebase_upload_settings(destination, merged, buffer);
}
