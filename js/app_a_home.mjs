import { app_a_functions } from "./app_a_functions.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
export async function app_a_home(context) {
  await app_shared_screen_set(context, app_a_functions);
}
