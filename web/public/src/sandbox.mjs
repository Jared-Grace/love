import { each } from "../../../love/public/src/each.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { bible_interlinear_json_path } from "../../../love/public/src/bible_interlinear_json_path.mjs";
export async function sandbox() {
  let path_output = bible_interlinear_json_path();
  let data = await file_read_json(path_output);
  function lambda(word) {}
  each(list, lambda);
  return data;
}
