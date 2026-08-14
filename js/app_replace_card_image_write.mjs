import { app_replace_tests_run_e2e_deployed_url } from "./app_replace_tests_run_e2e_deployed_url.mjs";
import { app_shared_card_image } from "./app_shared_card_image.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { playwright_url_screenshot } from "./playwright_url_screenshot.mjs";
export async function app_replace_card_image_write() {
  "Takes the picture shown on the card a shared link to the puzzle turns into, and saves it beside the page.";
  "It photographs the page that is actually out there rather than a copy built here, so the card can never show something nobody can reach.";
  "The window is the shape those cards are cut to, so that nothing anybody is meant to read is cropped away by the program showing it.";
  let url = await app_replace_tests_run_e2e_deployed_url();
  let f_name = app_shared_card_image("replace");
  let f_path = folder_public_join(f_name);
  let width = 1200;
  let height = 630;
  await playwright_url_screenshot(url, f_path, width, height);
  let r = {
    url,
    f_path,
  };
  return r;
}
