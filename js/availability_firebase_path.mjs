import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function availability_firebase_path(uid) {
  "the Storage file base (without extension) holding one owner's weekly availability windows, under their own user folder";
  let path = text_combine_multiple(["user/", uid, "/availability"]);
  return path;
}
