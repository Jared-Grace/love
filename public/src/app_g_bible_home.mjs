import { g_sermon_generate_download } from "../../../love/public/src/g_sermon_generate_download.mjs";
import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_g_bible_home(context) {
  marker("1");
  async function lambda(a) {
    let p = object_property_get(a, "p");
    let chapter_code = object_property_get(a, "chapter_code");
    let value = await g_sermon_generate_download(chapter_code);
    let p2 = html_p_text(p, value);
  }
  await app_bible_home_generic(context, lambda);
}
