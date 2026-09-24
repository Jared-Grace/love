import { app_shared_refresh_screen_write } from "./app_shared_refresh_screen_write.mjs";
import { noop } from "./noop.mjs";
export async function app_shared_refresh_screen(context, without) {
  await app_shared_refresh_screen_write(context, without, noop);
}
