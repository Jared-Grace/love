import { g_verify_queue_path } from "./g_verify_queue_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function g_verify_next_books_clear() {
  ("Empty the sermon-loop queue file next_books.txt - every queued book already");
  ("preached by hand. Replaces the manual printf empty-redirect; writes ONLY");
  ("that one bounded file.");
  let path = g_verify_queue_path();
  let empty = "";
  await file_overwrite(path, empty);
}
