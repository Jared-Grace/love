import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_word_pictures_word_block_on_save } from "./app_g_word_pictures_word_block_on_save.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_g_word_pictures_word_block_armed(
  box,
  word,
  status_working,
  status_set,
  render,
  controls,
) {
  arguments_assert(arguments, 6);
  async function on_save() {
    let r = await app_g_word_pictures_word_block_on_save(
      box,
      word,
      status_working,
      status_set,
      render,
    );
    return r;
  }
  app_shared_button(controls, "Save wording", on_save);
  let armed = false;
  return armed;
}
