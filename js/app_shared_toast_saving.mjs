import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_toast } from "./app_shared_game_toast.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
export async function app_shared_toast_saving(save) {
  arguments_assert(arguments, 1);
  ("Shows 'Saving...' while save runs, then swaps it for the words save hands back - 'Saved.' or what went wrong. save is an async function that returns those words.");
  ("The waiting pill is removed by hand the moment save finishes; its own long timer then removes nothing, so two pills never sit on top of each other.");
  let wait = app_shared_game_toast("Saving...", 60000);
  let text = await save();
  html_remove(wait);
  app_shared_toast(text);
  return text;
}
