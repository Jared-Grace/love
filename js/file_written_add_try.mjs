import { arguments_assert } from "./arguments_assert.mjs";
import { file_written_add } from "./file_written_add.mjs";
export async function file_written_add_try(f_path) {
  arguments_assert(arguments, 1);
  ("Noting a change must never be able to stop the change. This sits on the one");
  ("seam every written file passes through, so a failure here is swallowed on");
  ("purpose: a missing line costs a commit its precision and it falls back to");
  ("sweeping the folder, while a thrown error would cost the write itself.");
  try {
    await file_written_add(f_path);
  } catch {
    return;
  }
}
