import { arguments_assert } from "./arguments_assert.mjs";
export async function app_sandbox_previews_message_private_load() {
  arguments_assert(arguments, 0);
  let m = await import("./app_message_private_preview.mjs");
  let r = m.app_message_private_preview;
  return r;
}
