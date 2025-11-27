import { assert_file_exists_not } from "../../../love/public/src/assert_file_exists_not.mjs";
export async function file_move(old_path, new_path) {
  await assert_file_exists_not(new_path);
  const fs = await import("fs");
  await fs.promises.rename(old_path, new_path);
}
