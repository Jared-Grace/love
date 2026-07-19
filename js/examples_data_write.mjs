import { examples_data_json } from "./examples_data_json.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
// Write the corpus JSON to prod + dev, next to the app bundle, so the client app
// (app_examples_main) can fetch it at runtime.
export async function examples_data_write() {
  let json = await examples_data_json();
  let out = folder_public_join("examples_data.json");
  let out_dev = folder_public_join("dev/examples_data.json");
  await file_overwrite(out, json);
  await file_overwrite(out_dev, json);
  return out;
}
