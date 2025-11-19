import { folder_user_path } from "../../../love/public/src/folder_user_path.mjs";
export function messenger_reply_user_data_path() {
  let v =
    folder_user_path() +
    "AppData\\Local\\Google\\Chrome\\User Data\\puppeteer-profile";
  return v;
}
