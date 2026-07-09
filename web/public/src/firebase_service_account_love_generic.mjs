import { folder_secret_join } from "../../../love/public/src/folder_secret_join.mjs";
import { folder_secret } from "../../../love/public/src/folder_secret.mjs";
import { folder_find_starts_with } from "../../../love/public/src/folder_find_starts_with.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export async function firebase_service_account_love_generic(name) {
  let prefix = text_combine(name, "-firebase-adminsdk-");
  let path_folder = folder_secret();
  let only = await folder_find_starts_with(path_folder, prefix);
  let file_path = folder_secret_join(only);
  return file_path;
}
