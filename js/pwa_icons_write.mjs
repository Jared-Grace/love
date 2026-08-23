import { chromium } from "playwright";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { each_async } from "./each_async.mjs";
import { app_shared_icon_emoji } from "./app_shared_icon_emoji.mjs";
import { pwa_icon_name } from "./pwa_icon_name.mjs";
import { web_assets_app_img_path } from "./web_assets_app_img_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { web_assets_upload } from "./web_assets_upload.mjs";
export async function pwa_icons_write(app_name) {
  "$plain app_name";
  "Draws an installed app's icons from the emoji it is known by, saves them in the assets folder under the app's own name, and sends them up.";
  "They go up as they are drawn, because the manifest points at the copy in storage - so an icon left here alone would leave the installed app showing whatever was there before, with nothing to say so.";
  let emoji = app_shared_icon_emoji(app_name);
  let sizes = [192, 512];
  let html = text_combine_multiple([
    "<!DOCTYPE html><html><head><meta charset='utf-8'><style>",
    "html,body{margin:0;padding:0;width:100%;height:100%}",
    "body{display:flex;align-items:center;justify-content:center;background:#ffffff}",
    "span{font-size:72vh;line-height:1}",
    "</style></head><body><span>",
    emoji,
    "</span></body></html>",
  ]);
  let browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage"],
  });
  try {
    async function size_each(size) {
      let page = await browser.newPage();
      let viewport = {
        width: size,
        height: size,
      };
      await page.setViewportSize(viewport);
      await page.setContent(html);
      let icon_name = pwa_icon_name(app_name, size);
      let path = web_assets_app_img_path(app_name, icon_name);
      let icon_path = web_assets_folder_join(path);
      let options = {
        path: icon_path,
      };
      await page.screenshot(options);
      await page.close();
      await web_assets_upload(path);
    }
    await each_async(sizes, size_each);
  } finally {
    await browser.close();
  }
}
