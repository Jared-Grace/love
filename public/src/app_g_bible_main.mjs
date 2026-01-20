import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_g_bible_main() {
  marker("1");
  async function lambda(a) {
    let chapter_code = object_property_get(p, "chapter_code");
  }
  await app_bible_home_generic(context, lambda);
}
