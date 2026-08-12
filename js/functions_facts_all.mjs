import { properties_size } from "./properties_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_paths } from "./functions_paths.mjs";
import { functions_facts_cache_path } from "./functions_facts_cache_path.mjs";
import { function_facts_of_parsed } from "./function_facts_of_parsed.mjs";
import { file_stamps_by_path } from "./file_stamps_by_path.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { each } from "./each.mjs";
export async function functions_facts_all() {
  arguments_assert(arguments, 0);
  ("What every function file says about itself, reading only the ones that have");
  ("changed since the last time anybody asked.");
  ("Building the index used to read and parse every file in the repo, every time,");
  ("for every question - which measured at seconds a question, on work that had");
  ("almost always been done already. Asking the disk when each file was last");
  ("written and how long it is costs a small fraction of that, and a file that");
  ("answers the same as last time cannot have anything new to say.");
  ("What is remembered is only ever trusted against the file standing beside it, so");
  ("a peer rewriting a file mid-run makes that one file be read again and leaves");
  ("the rest alone. Nothing remembered is trusted on its own, which is what keeps");
  ("this from being the kind of cache that quietly answers about a repo that no");
  ("longer exists.");
  ("An unreadable or missing record is not an error - it means everything is read,");
  ("which is exactly what happened before any of this was written.");
  let f_paths = await functions_paths();
  let cache_path = functions_facts_cache_path();
  async function remembered_read() {
    let read = await file_read_json(cache_path);
    return read;
  }
  let remembered_or_null = await catch_null_async(remembered_read);
  let remembered = {};
  if (null_not_is(remembered_or_null)) {
    remembered = remembered_or_null;
  }
  ("Every file is asked about in one pass before any of them is looked at, because the asking is the same question seven thousand times over and answering each one in its own turn cost more than the questions did.");
  let stamps = await file_stamps_by_path(f_paths);
  async function entry_of(f_path) {
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
  let entries = await list_map_unordered_async(f_paths, entry_of);
  let keeping = {};
  let read_again_count = 0;
  function record(entry) {
    let stamp = property_get(entry, "stamp");
    let facts = property_get(entry, "facts");
    if (null_is(stamp)) {
      return;
    }
    let kept = {
      written: property_get(stamp, "written"),
      size: property_get(stamp, "size"),
      facts,
    };
    let property_name = property_get(entry, "f_path");
    property_set(keeping, property_name, kept);
    let read_again = property_get(entry, "read_again");
    if (read_again) {
      read_again_count = read_again_count + 1;
    }
  }
  each(entries, record);
  let counted_before = properties_size(remembered);
  let counted_now = properties_size(keeping);
  let count_changed = not_equal(counted_before, counted_now);
  let any_read_again = not_equal(read_again_count, 0);
  let write_wanted = any_read_again || count_changed;
  if (write_wanted) {
    async function remembered_write() {
      await file_overwrite_json(cache_path, keeping);
    }
    await catch_null_async(remembered_write);
  }
  function facts_of(entry) {
    let facts = property_get(entry, "facts");
    return facts;
  }
  ("A file that was taken away while this was running says nothing, and nothing is not a thing the folding step can be handed - it reads a name off whatever it is given. So those are left out here rather than folded in as an empty answer, which would be a file claiming to hold no functions rather than a file that is not there.");
  function standing_is(entry) {
    let stamp = property_get(entry, "stamp");
    let there = null_not_is(stamp);
    return there;
  }
  let entries_standing = list_filter(entries, standing_is);
  let facts_all = list_map(entries_standing, facts_of);
  ("Whether anything actually changed is worth saying out loud, because the caller");
  ("folding these into the index can skip that fold entirely when the answer is no,");
  ("and it is the same answer that decides whether the record is worth rewriting.");
  ("The stat pass has to happen either way - that is what makes the answer true -");
  ("but folding a hundred and forty thousand names into lookups does not.");
  let changed = write_wanted;
  ("The whole-repo list is named apart from the one-file facts that three inner");
  ("readings each bind, so neither hides the other. The word given up is the outer");
  ("one because it is bound once and read once, while the inner three are each the");
  ("plain word for what they hold.");
  let r = {
    facts: facts_all,
    changed,
  };
  return r;
}
