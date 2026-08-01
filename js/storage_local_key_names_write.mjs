import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_key_names_found } from "./storage_local_key_names_found.mjs";
import { storage_local_key_names_path } from "./storage_local_key_names_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function storage_local_key_names_write() {
  "Writes the record of which function names reach a browser storage key today, exactly as the source has them now.";
  "Run this only when a published name is deliberately being abandoned. That is a heavy thing to do - somebody's saved setting is still sitting under the old name and nothing here can reach it - so the shrunken record is meant to stand in the commit as the visible sign that it was chosen rather than done by accident.";
  "Recording a name that has newly escaped is the other, harmless half, and it has its own command. This one cannot tell the two apart, which is exactly why it is not the one to reach for by default: it would clear a rename as quietly as it records an arrival.";
  arguments_assert(arguments, 0);
  let found = await storage_local_key_names_found();
  let path = storage_local_key_names_path();
  await file_overwrite_json(path, found);
  return path;
}
