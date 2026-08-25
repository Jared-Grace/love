import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { baseline_paths_names } from "./baseline_paths_names.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { function_import_unalias } from "./function_import_unalias.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_is } from "./list_is.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
export async function baselines_known_holding(name) {
  "$plain name";
  arguments_assert(arguments, 1);
  ("Every ratchet whose record holds this exact name, each with the file it is kept in and everything else that record holds - and, beside them, the records that could not be asked at all.");
  ("A ratchet keeps names, not the things the names point at, so one thing renamed goes stale in every record that mentions it at once. Nothing in the repo could say which records those were: each ratchet knows its own file and no ratchet knows its neighbours. This is that question asked once.");
  ("The records that could not be read are handed back rather than passed over in silence. A record kept in some other shape, or one not written yet, is a place a rename would not reach - and a sweep that dropped those would report a clean rename over a file it never opened.");
  let path_names = await baseline_paths_names();
  let holders = [];
  let unread = [];
  for (let f_name of path_names) {
    let fn = await function_import_unalias(f_name);
    ("a path that has to be told something is not one file but a family of them, and the sweep has nothing to tell it");
    let wants_arguments = greater_than(fn.length, 0);
    if (wants_arguments) {
      list_add(unread, f_name);
      continue;
    }
    let path = fn();
    async function read_step() {
      let read = await baseline_known_read(path);
      return read;
    }
    let known = await catch_null_async(read_step);
    let missing = null_is(known);
    let flat = list_is(known);
    let unreadable = missing || not(flat);
    if (unreadable) {
      list_add(unread, f_name);
      continue;
    }
    let holds = list_includes(known, name);
    if (holds) {
      list_add(holders, {
        f_name,
        path,
        known,
      });
    }
  }
  let r = {
    holders,
    unread,
  };
  return r;
}
