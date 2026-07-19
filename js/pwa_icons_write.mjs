import { chromium } from "playwright";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
import { each_async } from "./each_async.mjs";
import { app_shared_icon_emoji } from "./app_shared_icon_emoji.mjs";
export async function pwa_icons_write(app_name) {
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
      let icon_name = text_combine_multiple([
        app_name,
        "-",
        text_to(size),
        ".png",
      ]);
      let joined = folder_public_join(icon_name);
      let icon_path = await user_repo_path_combine(joined);
      let options = {
        path: icon_path,
      };
      await page.screenshot(options);
      await page.close();
    }
    await each_async(sizes, size_each);
  } finally {
    await browser.close();
  }
}
