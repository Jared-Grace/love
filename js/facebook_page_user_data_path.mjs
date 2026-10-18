import { folder_user_path } from "./folder_user_path.mjs";
import { text_combine } from "./text_combine.mjs";
export function facebook_page_user_data_path() {
  "Where the browser profile that the facebook page is posted to from is kept, so a person signs in once and every post after that finds them still signed in.";
  "It is its own profile rather than youtube studio's, because two jobs sharing one profile would let one of them quietly sign the other out.";
  let left = folder_user_path();
  let v = text_combine(left, "facebook-page-profile");
  return v;
}
