import { storage_local_get } from "./storage_local_get.mjs";
import { app_verses_draw_save } from "./app_verses_draw_save.mjs";
export function app_verses_draw_get() {
  "the drawn verses remembered by app_verses_draw_save, or null when nothing has been generated yet; keyed by the saving function so both sides name one storage key";
  let draw = storage_local_get(app_verses_draw_save, "draw");
  return draw;
}
