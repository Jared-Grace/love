import { ebible_offline_folders_get } from "./ebible_offline_folders_get.mjs";
import { ebible_offline_get } from "./ebible_offline_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function ebible_offline_kept_any_get(name) {
  "one piece that any bible kept on this device holds under this name, or nothing - for a piece every saved bible keeps a copy of, where it does not matter whose copy answers";
  let folders = ebible_offline_folders_get();
  for (let bible_folder of folders) {
    let value = await ebible_offline_get(bible_folder, name);
    if (null_not_is(value)) {
      return value;
    }
  }
  return null;
}
