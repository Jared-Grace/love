import { equal_by_lower } from "./equal_by_lower.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { file_exists_not_assert_json } from "./file_exists_not_assert_json.mjs";
export async function file_move(old_path, new_path) {
  if (equal(old_path, new_path)) {
    return;
  }
  let a = equal_by_lower(old_path, new_path);
  if (not(a)) {
    await file_exists_not_assert_json(new_path, {
      hint: "the destination already exists and moving would overwrite it",
    });
  }
  let fs = await import("fs");
  await fs.promises.rename(old_path, new_path);
}
