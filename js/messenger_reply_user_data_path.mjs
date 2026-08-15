import { folder_user_path } from "./folder_user_path.mjs";
import { text_combine } from "./text_combine.mjs";
export function messenger_reply_user_data_path() {
  "Where the browser profile the messenger drives is kept, so that it stays signed in from one run to the next.";
  let left = folder_user_path();
  let v = text_combine(
    left,
    "AppData\\Local\\Google\\Chrome\\User Data\\puppeteer-profile",
  );
  let left2 = folder_user_path();
  v = text_combine(left2, "puppeteer-profile");
  return v;
}
