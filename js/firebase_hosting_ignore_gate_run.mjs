import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_hosting_ignore_missing } from "./firebase_hosting_ignore_missing.mjs";
import { firebase_json_path } from "./firebase_json_path.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function firebase_hosting_ignore_gate_run() {
  "Gate: whichever testing stages have been agreed to stay off the public internet are really left out of what is sent. Read-only.";
  "The folder goes out whole. Everything sitting under it is served at an address whether anybody meant it to be or not, so a stage that is to be kept out is kept out by being named in the sending's list of what to leave behind - one line of settings, and nothing else anywhere makes it true.";
  "Written on the day the second stage was taken off the internet, 2026-08-27, and kept when the second stage was put back the same day. What it guards is not a fixed pair of folders but the agreement, whatever it currently is: the list it asks lives next door and says which stages are unsent and why, and this only checks that the settings file really says so. One line lost to somebody merging that file would put a stage back on the internet silently, and that is true of whichever stages are on the list.";
  "Measured against nothing rather than against a ratchet, and it passes on the day it was written. There is nothing here to grandfather: a stage that has already reached the public is the last thing to write down as accepted.";
  arguments_assert(arguments, 0);
  let missing = await firebase_hosting_ignore_missing();
  let path = firebase_json_path();
  let hint =
    "the sending is not told to leave these folders behind, so the next one puts unfinished builds on the public internet at an address anybody can guess - put each of them back in the hosting ignore list of the file named below";
  list_empty_is_assert_json(missing, {
    path,
    hint,
  });
}
