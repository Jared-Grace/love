import { equal_by_lower } from "../../../love/public/src/equal_by_lower.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { assert_file_exists_not } from "../../../love/public/src/assert_file_exists_not.mjs";
export async function file_move(old_path, new_path) {
  if (equal(old_path, new_path)) {
    return;
  }
  let a = equal_by_lower(old_path, new_path);
  if (not(a)) {
    await assert_file_exists_not(new_path);
  }
  const fs = await import("fs");
  await fs.promises.rename(old_path, new_path);
}
