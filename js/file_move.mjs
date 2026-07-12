import { equal_by_lower } from "./equal_by_lower.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { file_exists_not_assert } from "./file_exists_not_assert.mjs";
export async function file_move(old_path, new_path) {
  if (equal(old_path, new_path)) {
    return;
  }
  let a = equal_by_lower(old_path, new_path);
  if (not(a)) {
    await file_exists_not_assert(new_path);
  }
  let fs = await import("fs");
  await fs.promises.rename(old_path, new_path);
}
