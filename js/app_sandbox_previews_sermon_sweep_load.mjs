import { arguments_assert } from "./arguments_assert.mjs";
export async function app_sandbox_previews_sermon_sweep_load() {
  arguments_assert(arguments, 0);
  let m = await import("./g_sermon_sweep_preview.mjs");
  let r = m.g_sermon_sweep_preview;
  return r;
}
