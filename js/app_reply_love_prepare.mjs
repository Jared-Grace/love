import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { app_reply_love } from "./app_reply_love.mjs";
import { app_reply_verses_prepare } from "./app_reply_verses_prepare.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function app_reply_love_prepare(
  languages,
  prepared_held,
  encouragement,
  encouragement_singles,
) {
  "Fetches the heart button's first verses while the page opens, so its very first press copies at once.";
  arguments_assert(arguments, 4);
  let languages_love = [];
  function language_add(language) {
    list_add(languages_love, language);
  }
  await app_reply_love(languages, language_add);
  async function prepare() {
    await app_reply_verses_prepare(
      prepared_held,
      3,
      encouragement,
      encouragement_singles,
      false,
      languages_love,
    );
  }
  await catch_null_async(prepare);
}
