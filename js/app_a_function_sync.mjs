import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_function_on_keydown_remove } from "./app_a_function_on_keydown_remove.mjs";
import { app_a_function_refresh_scroll } from "./app_a_function_refresh_scroll.mjs";
export async function app_a_function_sync(
  upload,
  download,
  context,
  app_a_function_on_keydown,
  content,
) {
  arguments_assert(arguments, 5);
  await upload();
  await download();
  app_a_function_on_keydown_remove({
    context,
    app_a_function_on_keydown,
  });
  await app_a_function_refresh_scroll(content, context);
}
