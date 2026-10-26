import { fn_name } from "./fn_name.mjs";
import { functions_names } from "./functions_names.mjs";
import { functions_paths } from "./functions_paths.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { file_stamps_by_path } from "./file_stamps_by_path.mjs";
import { equal } from "./equal.mjs";
import { function_dependencies } from "./function_dependencies.mjs";
import { functions_flow_reads_cache_path } from "./functions_flow_reads_cache_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { js_flow_read_revive } from "./js_flow_read_revive.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_function_flow_read } from "./js_function_flow_read.mjs";
import { js_flow_read_plain } from "./js_flow_read_plain.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function functions_flow_reads() {
  ("What the flow check needs from every function, as a map from name to what ",
    fn_name("js_function_flow_read"),
    " gave back.");
  ("A function whose file does not parse, or does not hold an exported function of its own name, is left out. Being left out is never read as being safe: whoever asks about one function insists it is here.");
  ("What was read last time is kept, and a function is walked again only when its own file, or the reading code, or the answer to any is-this-a-repo-function question the reading asked, has changed since. Those three are everything a reading depends on, so a kept one says exactly what a fresh one would - measured 2026-10-11, walking every function took half a minute per guarded edit.");
  ("An unreadable or missing record is not an error - it means everything is read, which is exactly what happened before any of this was written.");
  let f_names = await functions_names();
  let known = new Set(f_names);
  let f_paths = await functions_paths();
  let path_of = new Map();
  for (let f_path of f_paths) {
    let f_name2 = function_path_to_name(f_path);
    path_of.set(f_name2, f_path);
  }
  let stamps = await file_stamps_by_path(f_paths);
  function stamp_of(f_name) {
    let f_path = path_of.get(f_name);
    if (equal(f_path, undefined)) {
      return null;
    }
    let stamp = stamps[f_path] ?? null;
    return stamp;
  }
  let reader_name = fn_name("js_function_flow_read");
  let reader_names = await function_dependencies([reader_name]);
  let reader_parts = [];
  for (let f_name of [...new Set([reader_name, ...reader_names])].sort()) {
    let stamp = stamp_of(f_name);
    if (equal(stamp, null)) {
      reader_parts.push(f_name + " missing");
    } else {
      reader_parts.push(f_name + " " + stamp.written + " " + stamp.size);
    }
  }
  let reader = reader_parts.join("\n");
  let cache_path = functions_flow_reads_cache_path();
  async function remembered_read() {
    let r = await file_read_json(cache_path);
    return r;
  }
  let remembered = await catch_null_async(remembered_read);
  let entries_before = {};
  if (not_equal(remembered, null) && equal(remembered.reader, reader)) {
    entries_before = remembered.entries;
  }
  function kept_holds(f_name, stamp) {
    if (equal(stamp, null) || not(Object.hasOwn(entries_before, f_name))) {
      return false;
    }
    let before = entries_before[f_name];
    if (
      not_equal(before.written, stamp.written) ||
      not_equal(before.size, stamp.size)
    ) {
      return false;
    }
    let asked = before.asked;
    for (let i = 0; less_than(i, asked.length); i++) {
      let left = known.has(asked[i]);
      if (not_equal(left, before.asked_known[i])) {
        return false;
      }
    }
    return true;
  }
  async function read_one(f_name) {
    let stamp = stamp_of(f_name);
    if (kept_holds(f_name, stamp)) {
      let kept_inner = entries_before[f_name];
      let read_kept = null;
      if (not_equal(kept_inner.read, null)) {
        read_kept = js_flow_read_revive(kept_inner.read);
      }
      let r2 = {
        f_name,
        read: read_kept,
        kept: kept_inner,
        read_again: false,
      };
      return r2;
    }
    async function lambda() {
      let r = await function_ast(f_name);
      return r;
    }
    let ast = await catch_null_async(lambda);
    if (equal(ast, null)) {
      let r3 = {
        f_name,
        read: null,
        kept: null,
        read_again: false,
      };
      return r3;
    }
    let read = js_function_flow_read(f_name, ast, known);
    let kept = null;
    if (not_equal(stamp, null)) {
      ("A file holding no exported function of its own name reads as nothing before any name is asked about, so nothing is asked and the file alone decides it.");
      let asked = [];
      let plain = null;
      if (not_equal(read, null)) {
        asked = read.asked;
        plain = js_flow_read_plain(read);
      }
      let asked_known = [];
      for (let name of asked) {
        let v = known.has(name);
        asked_known.push(v);
      }
      kept = {
        written: stamp.written,
        size: stamp.size,
        asked,
        asked_known,
        read: plain,
      };
    }
    let r4 = {
      f_name,
      read,
      kept,
      read_again: true,
    };
    return r4;
  }
  let all = await list_map_unordered_async(f_names, read_one);
  let reads = new Map();
  let entries = {};
  let read_again_any = false;
  let entries_count = 0;
  for (let one of all) {
    if (not_equal(one.read, null)) {
      reads.set(one.f_name, one.read);
    }
    if (not_equal(one.kept, null)) {
      ("A kept entry, not a reading, is what is counted, so a file that reads as nothing is remembered as nothing rather than walked again every time.");
      entries[one.f_name] = one.kept;
      entries_count = entries_count + 1;
    }
    if (one.read_again) {
      read_again_any = true;
    }
  }
  let count_changed = not_equal(
    entries_count,
    object_property_names(entries_before).length,
  );
  if (read_again_any || count_changed) {
    async function remembered_write() {
      await file_overwrite_json(cache_path, {
        reader,
        entries,
      });
    }
    await catch_null_async(remembered_write);
  }
  return reads;
}
