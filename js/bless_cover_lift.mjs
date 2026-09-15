import { arguments_assert } from "./arguments_assert.mjs";
import { html_imgs_load_wait } from "./html_imgs_load_wait.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { sleep } from "./sleep.mjs";
import { html_remove } from "./html_remove.mjs";
export async function bless_cover_lift(container_map, cover) {
  arguments_assert(arguments, 2);
  await html_imgs_load_wait(container_map);
  html_style_opacity(cover, "0");
  await sleep(150);
  html_remove(cover);
}
