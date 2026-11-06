import { arguments_assert } from "./arguments_assert.mjs";
import { folder_web_latest_absolute } from "./folder_web_latest_absolute.mjs";
import { page_route_root_from_folder } from "./page_route_root_from_folder.mjs";
export async function page_route_root_from_latest(page) {
  "from now on, whatever this page asks for at the top of this machine's server is answered out of the latest build when that build holds it, so the build waiting to go out can be opened at the address the public opens.";
  arguments_assert(arguments, 1);
  let folder = folder_web_latest_absolute();
  await page_route_root_from_folder(page, folder);
}
