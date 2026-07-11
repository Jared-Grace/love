import { playwright_session_save_facebook_name } from "../../../love/public/src/playwright_session_save_facebook_name.mjs";
import { playwright_session_save } from "../../../love/public/src/playwright_session_save.mjs";
export async function playwright_session_save_facebook() {
  let url = "https://www.facebook.com/login";
  let session_name = playwright_session_save_facebook_name();
  await playwright_session_save(url, session_name);
}
