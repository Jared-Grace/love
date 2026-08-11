import { app_shared_home_name_context } from "./app_shared_home_name_context.mjs";
import { app_shared_refresh_screen } from "./app_shared_refresh_screen.mjs";
export async function app_shared_screen_set_home(context) {
  let home = app_shared_home_name_context(context);
  await app_shared_refresh_screen(context, home);
}
