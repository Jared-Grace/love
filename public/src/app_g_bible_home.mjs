import { marker } from "../../../love/public/src/marker.mjs";
export async function app_g_bible_home() {
  marker("1");
    async function lambda(a) {
      let p = object_property_get(a, "p");
      let chapter_code = object_property_get(a, "chapter_code");
      let p2 = html_p_text(p, chapter_code);
    }
    await app_bible_home_generic(context, lambda);
}
