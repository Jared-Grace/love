import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
export async function file_copy(file_path_old, file_path_new) {
  await assert_file_exists_not(file_path_new);
  let fs = await import("fs");
  await fs.promises.copyFile(file_path_old, file_path_new);
}
