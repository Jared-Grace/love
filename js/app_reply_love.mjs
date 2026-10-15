import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { each_async } from "./each_async.mjs";
export async function app_reply_love(languages, language_choose) {
  let v = ebible_language_en_code();
  let codes = ["tgl", "ceb", v];
  async function lambda(code) {
    let property_name = language_code_key();
    let language = list_find_property(languages, property_name, code);
    await language_choose(language);
  }
  await each_async(codes, lambda);
}
