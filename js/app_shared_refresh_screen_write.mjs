import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_history_push_if } from "./app_shared_history_push_if.mjs";
import { app_shared_screen_stored_set_context } from "./app_shared_screen_stored_set_context.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
export async function app_shared_refresh_screen_write(
  context,
  screen_name,
  write,
) {
  arguments_assert(arguments, 3);
  ("move to another screen, first writing into the address what that screen is to show. The write comes after the step of the back button is added, not before: written first, it lands on the step being left, and coming back to that step shows the page it was on under an address naming the one it went to");
  app_shared_history_push_if(context, screen_name);
  write();
  app_shared_screen_stored_set_context(context, screen_name);
  await app_shared_refresh(context);
}
