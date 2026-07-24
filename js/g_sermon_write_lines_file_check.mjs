import { g_sermon_write_lines_file } from "./g_sermon_write_lines_file.mjs";
import { g_verify_loop_check } from "./g_verify_loop_check.mjs";
export async function g_sermon_write_lines_file_check(chapter_code, key) {
  let saved = await g_sermon_write_lines_file(chapter_code, key);
  let next = await g_verify_loop_check();
  let r = {
    saved,
    next,
  };
  return r;
}
