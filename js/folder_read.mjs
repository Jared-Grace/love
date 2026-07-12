import { property_get } from "./property_get.mjs";
import { folder_read_browser } from "./folder_read_browser.mjs";
import { browser_is } from "./browser_is.mjs";
export async function folder_read(path_folder) {
  if (browser_is()) {
    let v = await folder_read_browser(path_folder);
    let unique = property_get(v, "unique");
    return unique;
  }
  let fs = await import("fs");
  let all = await fs.promises.readdir(path_folder);
  return all;
}
