import { folder_read_async } from "../../../love/public/src/folder_read_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
export async function sandbox() {
  const path = "D:\\user\\storage\\function\\g_objection_generate";
  let files = await folder_read_async(path_folder);
  async function lambda2(item) {
    async function lambda(data) {}
    await file_json_transform(f_path, lambda);
  }
  await each_async(list, lambda2);
}
