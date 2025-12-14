import { ebible_languages_chapters } from "../../../love/public/src/ebible_languages_chapters.mjs";
import { app_api } from "../../../love/public/src/app_api.mjs";
import { app_reply_main } from "../../../love/public/src/app_reply_main.mjs";
export async function app_reply_local_main() {
  let result = await app_api(ebible_languages_chapters.name, []);
  await app_reply_main();
}
