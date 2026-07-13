import { file_exists_not_assert_json } from "./file_exists_not_assert_json.mjs";
export async function file_write_generic(f_path, overwrite, contents) {
  await file_exists_not_assert_json(f_path, {
    hint: "this file already exists and writing fresh would overwrite it — use an overwrite path if that's intended",
  });
  await overwrite(f_path, contents);
}
