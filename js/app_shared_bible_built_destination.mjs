import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
export function app_shared_bible_built_destination(built_name, bible_folder) {
  "$plain built_name";
  "$plain bible_folder";
  "Where in storage one built copy of the scripture something needs is kept - one file per name per bible.";
  "IT IS TOLD THE NAME RATHER THAN THE APP, AND THAT IS WHAT LETS ONE APP KEEP MORE THAN ONE FILE. It used to be handed the app itself and take the app's own name off it, which said in the shape of the code that an app has exactly one such file. The music page broke that: it holds two songs, each quoting some passages from a different bible than the other, so one file keyed by the passage alone could only carry one of the two answers. The name is now the caller's to compose, and a caller with one file simply passes its own.";
  "The file is named after who asked for it rather than after what is in it, because what is in it is whatever that asker decided it needed and nobody else can use it. Two askers naming the same passages still get a file each, which costs a few kilobytes and saves the far worse thing: one of them quietly growing the file the other is reading.";
  arguments_assert(arguments, 2);
  let destination = ebible_firebase_upload_path(bible_folder, built_name);
  return destination;
}
