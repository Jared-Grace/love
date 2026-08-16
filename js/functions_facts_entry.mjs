import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { not } from "./not.mjs";
import { file_stamps_by_path } from "./file_stamps_by_path.mjs";
import { function_facts_of_parsed } from "./function_facts_of_parsed.mjs";
export async function functions_facts_entry(f_path, stamps, remembered) {
  arguments_assert(arguments, 3);
  let stamp = property_get_or_null(stamps, f_path);
  let before = property_get_or_null(remembered, f_path);
  let unchanged = false;
  if (null_not_is(stamp) && null_not_is(before)) {
    let left = property_get(before, "written");
    let right = property_get(stamp, "written");
    let written_same = equal(left, right);
    let left2 = property_get(before, "size");
    let right2 = property_get(stamp, "size");
    let size_same = equal(left2, right2);
    unchanged = written_same && size_same;
  }
  if (unchanged) {
    let entry_before = {
      f_path,
      stamp: before,
      facts: property_get(before, "facts"),
      read_again: false,
    };
    return entry_before;
  }
  if (null_is(stamp)) {
    ("The file was listed and then asked about, and by the time it was asked about it was already gone. A peer deleting or renaming one mid-run is the ordinary way that happens here, and reading it now could only throw. It is answered as a file with nothing to say, which is what the recording step below already does with one.");
    let entry_gone = {
      f_path,
      stamp: null,
      facts: null,
      read_again: false,
    };
    return entry_gone;
  }
  async function parse_lambda() {
    let read = await file_js_parse(f_path);
    return read;
  }
  ("Between being asked about and being read a peer can still take the file away, and that window is the whole of the reading pass rather than an instant - which is how one deleted file came to end every command in the repo, including the one that decides whether a permission rule is safe to write.");
  let attempt = await catch_message_async(parse_lambda);
  let parsed_is = property_get(attempt, "ok");
  if (not(parsed_is)) {
    ("Whether the file was taken away is settled by asking the disk again rather than by guessing it from the failure. Gone means there is nothing to read and nothing to say about it. Still there means the file is genuinely unreadable, and that must be raised rather than swallowed - one command dying is better than the index quietly missing a file that everything reading it believes is in there.");
    let stamps_again = await file_stamps_by_path([f_path]);
    let stamp_again = property_get_or_null(stamps_again, f_path);
    if (null_not_is(stamp_again)) {
      let value = property_get(attempt, "message");
      throw new Error(value);
    }
    let entry_taken = {
      f_path,
      stamp: null,
      facts: null,
      read_again: false,
    };
    return entry_taken;
  }
  let parsed = property_get(attempt, "value");
  let facts = function_facts_of_parsed(parsed);
  let entry_read = {
    f_path,
    stamp,
    facts,
    read_again: true,
  };
  return entry_read;
}
