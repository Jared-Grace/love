import { equal_by_lower } from "../../../love/public/src/equal_by_lower.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { file_exists_not_assert } from "../../../love/public/src/file_exists_not_assert.mjs";
export async function file_move(old_path, new_path) {
  if (equal(old_path, new_path)) {
    return;
  }
  let a = equal_by_lower(old_path, new_path);
  if (not(a)) {
    await file_exists_not_assert(new_path);
  }
  const fs = await import("fs");
  await fs.promises.rename(old_path, new_path);
}
