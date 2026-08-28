import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_button_back } from "./app_g_button_back.mjs";
import { app_shared_game_container } from "./app_shared_game_container.mjs";
export function app_g_view_render_study_fresh_container(overlay, close) {
  arguments_assert(arguments, 2);
  app_g_button_back(overlay, close);
  let container = app_shared_game_container(overlay);
  return container;
}
