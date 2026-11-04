import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { folder_read } from "./folder_read.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function qa_gate_reads_traced() {
  "What each traced gate read, gathered from the files a recorder left in the ignored folder, one file per process the gate ran in";
  "Traced by hand on 2026-11-04 for the twenty slowest gates, so these lists age: a gate that later starts reading something new is not told about it here. That makes any answer built on them a little too willing to skip, and the report they feed counts the verdicts it would have hidden for exactly that reason";
  "Sorted, so the same reads always give the same fingerprint however the processes happened to interleave";
  arguments_assert(arguments, 0);
  let folder = folder_gitignore_join("gate_reads");
  let names = await folder_read(folder);
  let kinds = ["files", "folders", "probes", "commands"];
  let seen = {};
  for (let name of names) {
    let b = text_ends_with(name, ".json");
    if (not(b)) {
      continue;
    }
    let file_path = path_join([folder, name]);
    let row = await file_read_json(file_path);
    let gate = property_get(row, "gate");
    let b2 = property_exists(seen, gate);
    if (not(b2)) {
      seen[gate] = {
        files: new Set(),
        folders: new Set(),
        probes: new Set(),
        commands: new Set(),
      };
    }
    for (let kind of kinds) {
      for (let path of property_get(row, kind)) {
        seen[gate][kind].add(path);
      }
    }
  }
  let traced = {};
  for (let gate of object_property_names(seen)) {
    traced[gate] = {};
    for (let kind of kinds) {
      traced[gate][kind] = [...seen[gate][kind]].sort();
    }
  }
  return traced;
}
