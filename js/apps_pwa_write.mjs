import { apps_pwa } from "./apps_pwa.mjs";
import { pwa_public_write } from "./pwa_public_write.mjs";
import { pwa_icons_write } from "./pwa_icons_write.mjs";
import { each_async } from "./each_async.mjs";
export async function apps_pwa_write() {
  "generate the .webmanifest + icon PNGs for every app opted in via apps_pwa()";
  async function app_each(app_name) {
    await pwa_public_write(app_name);
    await pwa_icons_write(app_name);
  }
  await each_async(apps_pwa(), app_each);
}
