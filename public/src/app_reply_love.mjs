import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export async function app_reply_love(languages, language_choose) {
  let codes = ["tgl", "ceb"];
  async function lambda4(code) {
    let language = list_find_property(languages, "language_code", code);
    await language_choose(language);
  }
  await each_async(codes, lambda4);
}
