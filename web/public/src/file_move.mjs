import { equal } from "../../../love/public/src/equal.mjs";
import { assert_file_exists_not } from "../../../love/public/src/assert_file_exists_not.mjs";
export async function file_move(old_path, new_path) {
  if (equal(old_path, new_path)) {
    return;
  }
  await assert_file_exists_not(new_path);
  const fs = await import("fs");
  await fs.promises.rename(old_path, new_path);
}
