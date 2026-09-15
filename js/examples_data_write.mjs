import { examples_data_paths } from "./examples_data_paths.mjs";
import { list_first } from "./list_first.mjs";
import { examples_data_json } from "./examples_data_json.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
("Write the corpus JSON to prod + dev, next to the app bundle, so the client app");
("(app_examples_main) can fetch it at runtime.");
export async function examples_data_write() {
  let json = await examples_data_json();
  let paths = examples_data_paths();
  for (let path of paths) {
    await file_overwrite(path, json);
  }
  let out = list_first(paths);
  return out;
}
