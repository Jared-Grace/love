import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
export async function firebase_prod_file_names() {
  "the names of the things sitting in the folder that goes live, exactly as they sit there. every question about what shipped is answered off this one listing, so nothing downstream has to assume which pieces a page was built out of";
  let folder = folder_public_absolute();
  let files = await folder_read_files(folder);
  return files;
}
