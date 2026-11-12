import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_storage_function_path } from "./folder_user_storage_function_path.mjs";
import { g_sermon_write } from "./g_sermon_write.mjs";
import { path_join } from "./path_join.mjs";
import { json_extension } from "./json_extension.mjs";
import { g_generate_upload_single_recorded } from "./g_generate_upload_single_recorded.mjs";
import { g_sermon_write_upload_path } from "./g_sermon_write_upload_path.mjs";
export async function g_sermon_write_upload_chapter(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("Send up the one chapter of written sermons that a save has just changed, rather than every chapter in the store.");
  ("★ MEASURED 2026-11-12: SENDING THE WHOLE STORE TOOK 45 SECONDS A SAVE, FOR 44 CHAPTERS OF WHICH ONE HAD CHANGED. Every save goes through the same publish step, so each chapter is sent by the save that changed it, and the other 43 were being sent again unchanged every time.");
  let folder = folder_user_storage_function_path(g_sermon_write);
  let file = path_join([folder, chapter_code + json_extension()]);
  await g_generate_upload_single_recorded(
    g_sermon_write,
    g_sermon_write_upload_path,
    file,
  );
}
