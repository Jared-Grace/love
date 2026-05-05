import { playwright_session_save } from "../../../love/public/src/playwright_session_save.mjs";
export async function playwright_session_save_facebook() {
  const url = "https://www.facebook.com/login";
  const session_name = "fb-session";
  await playwright_session_save(url, session_name);
}
