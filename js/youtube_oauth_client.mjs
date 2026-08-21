import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { folder_secret_join_json } from "./folder_secret_join_json.mjs";
import { property_get } from "./property_get.mjs";
export async function youtube_oauth_client() {
  "The name and password this machine signs in to Google as when it edits the channel, read from the folder of keys that sits outside every repo.";
  "It lives out there rather than in the repo because this repo is public and a dozen commands sweep the whole working folder into a commit without being told what is in it. A secret inside the tree is one forced add away from the open web; a secret outside the tree cannot be reached by any of them.";
  "Google files a desktop sign-in under the word installed, so the useful half is fetched by that name rather than the whole file handed on. A web sign-in would be filed under a different word, which is how a client of the wrong kind announces itself here instead of failing later against a redirect nobody registered.";
  arguments_assert(arguments, 0);
  let file_path = folder_secret_join_json(fn_name("youtube_oauth_client"));
  let whole = await file_read_json(file_path);
  let installed = property_get(whole, "installed");
  return installed;
}
