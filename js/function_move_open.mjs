import { function_move } from "./function_move.mjs";
import { file_open } from "./file_open.mjs";
export async function function_move_open(f_name_before, f_name_after) {
  let f_path_new = await function_move(f_name_before, f_name_after);
  await file_open(f_path_new);
}
