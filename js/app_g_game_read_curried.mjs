import { file_read_json } from "./file_read_json.mjs";
import { app_g_rows_ensure } from "./app_g_rows_ensure.mjs";
import { app_g_coordinates_ensure } from "./app_g_coordinates_ensure.mjs";
export function app_g_game_read_curried(file_path) {
  async function app_g_game_read_curried_result() {
    let g = await file_read_json(file_path);
    await app_g_rows_ensure(g);
    app_g_coordinates_ensure(g);
    return g;
  }
  return app_g_game_read_curried_result;
}
