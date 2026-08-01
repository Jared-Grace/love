import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { list_add } from "./list_add.mjs";
export async function folder_pointers_out(folder) {
  arguments_assert(arguments, 1);
  ("every place under a folder that is a pointer at something else rather than a thing of its own, each given as where it stands and what it stands for");
  ("what is pointed at is never stepped into. A pointer is the one entry whose contents are not under this folder at all, so following one would walk somewhere else and report what it found there as though it belonged here - which is the very thing a caller asks this in order to find out about.");
  let fs = await import("fs");
  let found = [];
  async function walk(here) {
    let entries = await fs.promises.readdir(here, {
      withFileTypes: true,
    });
    for (let entry of entries) {
      let path = path_join([here, entry.name]);
      let pointer = entry.isSymbolicLink();
      if (pointer) {
        let stands_for = await fs.promises.readlink(path);
        let record = {
          path,
          stands_for,
        };
        list_add(found, record);
        continue;
      }
      let deeper = entry.isDirectory();
      if (deeper) {
        await walk(path);
      }
    }
  }
  await walk(folder);
  return found;
}
