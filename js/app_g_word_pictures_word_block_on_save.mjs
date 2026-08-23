import { arguments_assert } from "./arguments_assert.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
export async function app_g_word_pictures_word_block_on_save(
  box,
  word,
  status_working,
  status_set,
  render,
) {
  arguments_assert(arguments, 5);
  let typed = html_value_get(box);
  let combined = text_combine_multiple(["saving the wording for ", word]);
  status_working(combined);
  try {
    let f_name = fn_name("word_picture_wording_set");
    await app_shared_api_named(f_name, [word, typed]);
    let combined3 = text_combine_multiple(["saved the wording for ", word]);
    status_set(combined3);
    await render();
  } catch (failed) {
    let combined4 = text_combine_multiple([
      "could not save the wording for ",
      word,
    ]);
    status_set(combined4);
  }
}
