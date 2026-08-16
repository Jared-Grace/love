import { functions_facts_remembered_write } from "./functions_facts_remembered_write.mjs";
import { functions_facts_entry } from "./functions_facts_entry.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_paths } from "./functions_paths.mjs";
import { functions_facts_cache_path } from "./functions_facts_cache_path.mjs";
import { file_stamps_by_path } from "./file_stamps_by_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
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
    let r2 = await functions_facts_entry(f_path, stamps, remembered);
    return r2;
  }
  let entries = await list_map_unordered_async(f_paths, entry_of);
  let write_wanted = await functions_facts_remembered_write(
    entries,
    remembered,
    cache_path,
  );
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
  ("The whole-repo list is named apart from the one-file facts that the inner");
  ("reading binds, so neither hides the other. The word given up is the outer one");
  ("because it is bound once and read once, while the inner one is the plain word");
  ("for what it holds.");
  let r = {
    facts: facts_all,
    changed,
  };
  return r;
}
