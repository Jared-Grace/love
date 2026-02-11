import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
export async function sandbox_2() {
  let languages = ebible_languages();
  await each_async(list, async function lambda(item) {});
}
