import { folder_public } from "./folder_public.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
export async function firebase_prod_file_names() {
  "the names of the things sitting in the folder that goes live, exactly as they sit there. every question about what shipped is answered off this one listing, so nothing downstream has to assume which pieces a page was built out of";
  let fop = folder_public();
  let combined = await user_repo_path_combine(fop);
  let files = await folder_read_files(combined);
  return files;
}
