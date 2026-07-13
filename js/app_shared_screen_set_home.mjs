import { app_shared_home_name } from "./app_shared_home_name.mjs";
import { app_shared_refresh_screen } from "./app_shared_refresh_screen.mjs";
export async function app_shared_screen_set_home(context) {
  let home = app_shared_home_name(context);
  await app_shared_refresh_screen(context, home);
}
