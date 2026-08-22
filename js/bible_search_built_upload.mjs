import { arguments_assert } from "./arguments_assert.mjs";
import { bible_search_built_path } from "./bible_search_built_path.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
export async function bible_search_built_upload(built) {
  "Write down which build of the search index storage now holds.";
  "$plain built";
  "It goes up last, after every word of that build is already up there. A reader who arrives between the two reads the mark of the build before and keeps the copies they have, which is where they were anyway; a reader who arrives after the mark moved throws those copies away and asks again, and every word they ask for is there to be had.";
  arguments_assert(arguments, 1);
  let destination = bible_search_built_path();
  await firebase_upload_object_compressed(destination, built);
}
