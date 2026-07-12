import { folder_user_path } from "./folder_user_path.mjs";
import { text_combine } from "./text_combine.mjs";
export function messenger_reply_user_data_path() {
  let v = text_combine(
    folder_user_path(),
    "AppData\\Local\\Google\\Chrome\\User Data\\puppeteer-profile",
  );
  v = text_combine(folder_user_path(), "puppeteer-profile");
  return v;
}
