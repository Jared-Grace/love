import { playwright_url_texts_click_screenshot_generic } from "./playwright_url_texts_click_screenshot_generic.mjs";
export async function playwright_url_texts_click_screenshot_window(
  url,
  texts,
  f_path,
  width,
  height,
) {
  "open a page, press the first thing showing each of the texts in turn, and save a picture of only the window as it is scrolled then - so a press that should bring something into view can be seen doing it";
  await playwright_url_texts_click_screenshot_generic(
    url,
    texts,
    f_path,
    width,
    height,
    false,
  );
}
