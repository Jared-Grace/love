import { arguments_assert } from "./arguments_assert.mjs";
export async function app_sandbox_previews_phone_photos_load() {
  arguments_assert(arguments, 0);
  let m = await import("./phone_photos_preview.mjs");
  let r = m.phone_photos_preview;
  return r;
}
