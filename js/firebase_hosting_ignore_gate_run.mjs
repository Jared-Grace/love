import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_hosting_ignore_missing } from "./firebase_hosting_ignore_missing.mjs";
import { firebase_json_path } from "./firebase_json_path.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function firebase_hosting_ignore_gate_run() {
  "Gate: only the finished build may reach the public internet, so both testing stages stay out of what is sent. Read-only.";
  "The folder goes out whole. Everything sitting under it is served at an address whether anybody meant it to be or not, so the two testing stages are kept out by being named in the sending's list of what to leave behind - one line of settings, and nothing else anywhere makes it true.";
  "Written on the day the second stage was taken off the internet, 2026-08-27. Until then a half-finished build believed ready and not yet agreed to be was reachable by anybody who guessed the address, and nothing noticed. One line put back by hand, or lost to somebody merging that file, would put it back the same silent way.";
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
