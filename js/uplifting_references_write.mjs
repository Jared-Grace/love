import { bible_verses_uplifting } from "./bible_verses_uplifting.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { json_to } from "./json_to.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { web_assets_bible_uplifting_path } from "./web_assets_bible_uplifting_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { web_assets_upload } from "./web_assets_upload.mjs";
export async function uplifting_references_write() {
  "Writes the deduped list of uplifting verse references into the assets folder and sends it up, so the verses app fetches which verses to draw from instead of baking the list into its bundle. Run this whenever the authored uplifting-verses list changes.";
  "It goes up in the same breath as being written, because the copy the app reads is the one in storage - written here alone it would look done and change nothing for anybody.";
  let all = bible_verses_uplifting();
  let unique = list_unique(all);
  let file_name = "references.json";
  let path = web_assets_bible_uplifting_path(file_name);
  let file_path = web_assets_folder_join(path);
  let json = json_to(unique);
  await file_overwrite(file_path, json);
  await web_assets_upload(path);
  let count = list_size(unique);
  return count;
}
