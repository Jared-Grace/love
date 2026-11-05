import { folder_user_storage_path } from "./folder_user_storage_path.mjs";
export function g_generate_upload_hashes_root() {
  "The folder holding, for each store, the record of what its files looked like when last sent up. Its children are named after the store's function, so a rename has to move them too.";
  let root = folder_user_storage_path("uploaded");
  return root;
}
