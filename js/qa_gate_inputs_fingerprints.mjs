import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { git_object_name_path } from "./git_object_name_path.mjs";
import { qa_gate_reads_traced } from "./qa_gate_reads_traced.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { qa_gate_input_value } from "./qa_gate_input_value.mjs";
import { text_slice } from "./text_slice.mjs";
import { sha256_hash } from "./sha256_hash.mjs";
import { json_to } from "./json_to.mjs";
export async function qa_gate_inputs_fingerprints(commit, beside) {
  "$plain commit";
  "$plain beside";
  "One short word per traced gate standing for everything it read, as things stand for this commit. The same word in two runs means skipping that gate would have been allowed";
  "A gate that runs commands gets no word at all, because what a command looks at cannot be listed: the one traced gate that does asks git about the whole history, which every commit changes";
  "The answers are kept across gates, because most of what these gates read is the same files, and twenty-eight thousand of them were being looked at again for every gate";
  arguments_assert(arguments, 2);
  let folder = folder_repo_love();
  let printed = await git_folder_run(folder, [
    "ls-tree",
    "-r",
    commit,
    "--format=%(objectname) %(path)",
  ]);
  let blobs = {};
  for (let line of text_split_newline(printed)) {
    let b = text_empty_is(line);
    if (not(b)) {
      let entry = git_object_name_path(line);
      blobs[entry.path] = entry.name;
    }
  }
  let traced = await qa_gate_reads_traced();
  let known = new Map();
  let fingerprints = {};
  for (let gate of object_property_names(traced)) {
    let reads = property_get(traced, gate);
    let list = property_get(reads, "commands");
    if (list_empty_not_is(list)) {
      fingerprints[gate] = null;
      continue;
    }
    let parts = [];
    for (let kind of ["files", "folders", "probes"]) {
      for (let path of property_get(reads, kind)) {
        let key = kind + " " + path;
        let b2 = known.has(key);
        if (not(b2)) {
          let r = await qa_gate_input_value(kind, path, blobs, beside);
          known.set(key, r);
        }
        let v = known.get(key);
        parts.push([key, v]);
      }
    }
    let value = json_to(parts);
    let s = sha256_hash(value);
    fingerprints[gate] = text_slice(s, 0, 12);
  }
  return fingerprints;
}
