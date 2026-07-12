import { app_g_main } from "./app_g_main.mjs";
import { firebase_promote_function } from "./firebase_promote_function.mjs";
export async function firebase_promote_function_app_g_main() {
  let v = await firebase_promote_function(app_g_main.name);
  return v;
}
