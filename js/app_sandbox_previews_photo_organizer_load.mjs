import { arguments_assert } from "./arguments_assert.mjs";
export async function app_sandbox_previews_photo_organizer_load() {
  arguments_assert(arguments, 0);
  let m = await import("./photo_organizer_preview.mjs");
  let r = m.photo_organizer_preview;
  return r;
}
