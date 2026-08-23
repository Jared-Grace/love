import { app_replace_tests_run_e2e_deployed_url } from "./app_replace_tests_run_e2e_deployed_url.mjs";
import { app_shared_card_image } from "./app_shared_card_image.mjs";
import { playwright_url_screenshot } from "./playwright_url_screenshot.mjs";
import { web_assets_app_img_path } from "./web_assets_app_img_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { web_assets_upload } from "./web_assets_upload.mjs";
export async function app_replace_card_image_write() {
  "Takes the picture shown on the card a shared link to the puzzle turns into, saves it in the assets folder, and sends it up.";
  "It photographs the page that is actually out there rather than a copy built here, so the card can never show something nobody can reach.";
  "The window is the shape those cards are cut to, so that nothing anybody is meant to read is cropped away by the program showing it.";
  "IT SENDS THE PICTURE UP IN THE SAME BREATH AS TAKING IT, because that is the copy every link ever pasted asks for. Saved here alone, the new picture sits in the repo looking done while the old one is what the world keeps being shown.";
  let url = await app_replace_tests_run_e2e_deployed_url();
  let app_name = "replace";
  let f_name = app_shared_card_image(app_name);
  let path = web_assets_app_img_path(app_name, f_name);
  let f_path = web_assets_folder_join(path);
  let width = 1200;
  let height = 630;
  await playwright_url_screenshot(url, f_path, width, height);
  let destination = await web_assets_upload(path);
  let r = {
    url,
    f_path,
    destination,
  };
  return r;
}
