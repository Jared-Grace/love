import { path_name } from "./path_name.mjs";
import { list_map } from "./list_map.mjs";
import { apps_page_file_names } from "./apps_page_file_names.mjs";
export async function apps_names() {
  arguments_assert(arguments, 0);
  ("The name of every app there is - read off the dev folder, because a dev build is the");
  ("first moment an app can be opened at all, and a thing nobody can open is not yet an app.");
  ("It used to be read off the folder that gets SENT, and that made existing and being");
  ("published one single fact. An app being worked on had to leave a page standing at a");
  ("public address in order to be admitted here; the page held no bytes, because there was");
  ("nothing to publish yet; and a tidy-up rightly deleted an address that served nothing -");
  ("which silently took the app out of this list and stopped its build from running at all.");
  ("The published question is answered by apps_published_names now, and the two readings");
  ("share one body, so that they cannot drift apart.");
  let folder = folder_public_dev();
  let names = await apps_names_folder_generic(folder);
  return names;
}
