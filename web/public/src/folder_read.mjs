import { property_get } from "../../../love/public/src/property_get.mjs";
import { folder_read_browser } from "../../../love/public/src/folder_read_browser.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function folder_read(path_folder) {
  if (browser_is()) {
    let v = await folder_read_browser(path_folder);
    let unique = property_get(v, "unique");
    return unique;
  }
  let fs = await import("fs");
  const all = await fs.promises.readdir(path_folder);
  return all;
}
