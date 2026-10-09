import { folder_user_path } from "./folder_user_path.mjs";
import { text_combine } from "./text_combine.mjs";
export function youtube_studio_user_data_path() {
  "Where the browser profile that youtube studio is driven from is kept, so a person signs in once and every upload after that finds them still signed in.";
  "It is its own profile rather than the messenger's, because a sign-in is a person's choice of account and two jobs sharing one profile would let one of them quietly sign the other out.";
  let left = folder_user_path();
  let v = text_combine(left, "youtube-studio-profile");
  return v;
}
