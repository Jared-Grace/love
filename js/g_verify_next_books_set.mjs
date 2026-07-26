import { g_verify_queue_path } from "./g_verify_queue_path.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_join } from "./list_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function g_verify_next_books_set(codes) {
  "$plain codes";
  "Set the sermon-loop queue file next_books.txt to codes - a comma-joined list";
  "of book codes - written one per line in curated order. Replaces the manual";
  "printf redirect the user kept getting prompted for; writes ONLY that one";
  "bounded file, so it is safe to allow-list.";
  let list = text_split_comma(codes);
  let joined = list_join(list, "\n");
  let text = joined + "\n";
  let path = g_verify_queue_path();
  await file_overwrite(path, text);
}
