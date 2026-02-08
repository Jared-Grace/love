import { app_ceb_bible_gloss_generate_code } from "../../../love/public/src/app_ceb_bible_gloss_generate_code.mjs";
import { app_ceb_bible_home_generic } from "../../../love/public/src/app_ceb_bible_home_generic.mjs";
import { app_ceb_bible_gloss_generate_download } from "../../../love/public/src/app_ceb_bible_gloss_generate_download.mjs";
export async function app_ceb_bible_home(context) {
  let download = app_ceb_bible_gloss_generate_download;
  let language_code = g_sermon_generate_book_generic_property();
  await app_ceb_bible_home_generic(context, download, language_code, true);
}
