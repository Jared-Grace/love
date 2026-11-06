import { server_url } from "./server_url.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
export async function page_route_root_from_folder(page, folder) {
  "from now on, whatever this page asks this machine's server for at the top level - a page or a script with no folder in front of it - is answered out of folder when folder holds a file of that name, and asked of the server as usual when it does not. Anything in a folder, and anything from another host, is never touched.";
  "This exists so a build can be opened at the address people are served from without first being put there. A page decides what it is by the address it was opened at - the built one everybody opens, or one of the copies kept beside it - so the only honest way to see what the public will see is to open it at the top, and putting the files at the top first would be the very move up this is meant to come before.";
  let left = server_url();
  let root = text_combine(left, "/");
  async function answer(route) {
    let request = route.request();
    let url = request.url();
    let here = text_starts_with(url, root);
    if (here) {
      let rest = text_prefix_without(url, left);
      let pieces = text_split(rest, "?");
      let name = list_first(pieces);
      let parts = text_split(name, "/");
      let left2 = list_size(parts);
      let top = equal(left2, 2);
      if (top) {
        let file_path = path_join([folder, name]);
        let present = await file_exists(file_path);
        if (present) {
          await route.fulfill({
            path: file_path,
          });
          return;
        }
      }
    }
    await route.continue();
  }
  await page.route("**/*", answer);
}
