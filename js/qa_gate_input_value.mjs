import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_skip } from "./text_skip.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { file_exists } from "./file_exists.mjs";
import { folder_read } from "./folder_read.mjs";
import { file_modified_ms } from "./file_modified_ms.mjs";
import { file_size } from "./file_size.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function qa_gate_input_value(kind, path, blobs, beside) {
  "$plain kind";
  "$plain path";
  "$plain blobs";
  "$plain beside";
  "What one thing a gate read stands for right now, so that two runs can be asked whether it was the same";
  "A path in this repo is answered from the commit rather than the disk, because the gates read a frozen copy of the commit and the working folder has moved on. A path in a neighbouring repo is answered by that neighbour's commit, whole, because the copy freezes neighbours at their commits. Anything else - storage, installed packages - is outside every commit, so its date and size are all there is, and those are read when the run files: a file that changes during a run then looks unchanged next time, and the gate's next verdict shows up as hidden, which errs against skipping";
  "A folder is answered by its names, because a gate that lists a folder sees a new file before it reads it. A probe only asked whether a thing exists, so that is all it stands for - a folder's date moves whenever anything inside it does, and that was never the question";
  arguments_assert(arguments, 4);
  let aside = "/dev/shm/qa_gate_aside/repos/";
  let love = "love/";
  if (equal(path + "/", aside)) {
    return null;
  }
  let inside = text_starts_with(path, aside);
  let left = text_starts_with(path, "/");
  let local = equal(left, false);
  if (
    inside &&
    equal(text_starts_with(text_skip(path, aside.length), love), false)
  ) {
    let item = text_skip(path, aside.length);
    let name = text_split_first(item, "/");
    let value = property_get_or_null(beside, name);
    return value;
  }
  if (inside || local) {
    let relative = inside ? text_skip(path, aside.length + love.length) : path;
    if (equal(kind, "folders")) {
      let root = equal(relative, ".") || equal(relative, "");
      let prefix = root
        ? ""
        : text_ends_with(relative, "/")
          ? relative
          : relative + "/";
      let children = [];
      for (let tracked of object_property_names(blobs)) {
        if (text_starts_with(tracked, prefix)) {
          let item2 = text_skip(tracked, prefix.length);
          let taken = text_split_first(item2, "/");
          children.push(taken);
        }
      }
      let r = [...new Set(children)].sort();
      return r;
    }
    let value2 = property_get_or_null(blobs, relative);
    return value2;
  }
  if (equal(kind, "probes")) {
    let r2 = await file_exists(path);
    return r2;
  }
  async function listed() {
    let names = await folder_read(path);
    let r3 = [...names].sort();
    return r3;
  }
  async function dated() {
    let modified = await file_modified_ms(path);
    let size = await file_size(path);
    let r4 = [modified, size];
    return r4;
  }
  let asked = equal(kind, "folders") ? listed : dated;
  let r5 = await catch_null_async(asked);
  return r5;
}
