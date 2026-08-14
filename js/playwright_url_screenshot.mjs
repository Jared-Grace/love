import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_screenshot(url, f_path, width, height) {
  "$plain url";
  "$plain f_path";
  "$plain width";
  "$plain height";
  "Opens a page in a browser with no screen, at a window of the size asked for, and saves a picture of what is showing to a file.";
  "The size is set before the address is opened, because a page that lays itself out for the window it was given would otherwise lay itself out for the wrong one and then be photographed mid-rearrangement.";
  async function on_page(page) {
    let viewport = {
      width,
      height,
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    let options = {
      path: f_path,
    };
    await page.screenshot(options);
  }
  await playwright_test_blank(on_page);
}
