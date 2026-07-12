import { each_async } from "./each_async.mjs";
import { list_find_property } from "./list_find_property.mjs";
export async function app_reply_love(languages, language_choose) {
  let codes = ["tgl", "ceb"];
  async function lambda(code) {
    let language = list_find_property(languages, "language_code", code);
    await language_choose(language);
  }
  await each_async(codes, lambda);
}
