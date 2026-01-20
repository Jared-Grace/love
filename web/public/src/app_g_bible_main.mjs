import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_g_bible_main() {
  marker("1");
  await app_bible_home_generic(context, async function lambda(a) {});
}
