import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { global_firebase_storage_download_json_decompress } from "./global_firebase_storage_download_json_decompress.mjs";
export async function firebase_storage_download_json_decompress_project_jg(
  fn,
  destination_get,
  chapter_code,
) {
  arguments_assert(arguments, 3);
  ("Read back what one of this project's generators put in storage for a chapter.");
  ("Everything that writes to storage here writes to the same project, so every");
  ("reader had to fetch that one address for itself before it could ask for");
  ("anything. Naming the project once is what leaves the four readers saying only");
  ("what actually differs between them - which generator wrote it, and where.");
  let project_url = firebase_storage_url_project_jg();
  let value = await global_firebase_storage_download_json_decompress(
    fn,
    destination_get,
    chapter_code,
    project_url,
  );
  return value;
}
