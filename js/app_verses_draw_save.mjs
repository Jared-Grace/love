import { storage_local_set } from "./storage_local_set.mjs";
export function app_verses_draw_save(draw) {
  "remember the drawn verses (count + references) so changing language re-renders the same verses, and reopening the app shows them again until New verses is tapped";
  storage_local_set(app_verses_draw_save, "draw", draw);
}
