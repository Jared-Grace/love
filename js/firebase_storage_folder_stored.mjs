import { firebase_storage_stored_query } from "./firebase_storage_stored_query.mjs";
export async function firebase_storage_folder_stored(folder) {
  "$plain folder";
  "What storage already holds directly inside one folder, leaving out every folder inside it.";
  "THE FOLDERS INSIDE ARE LEFT OUT ON PURPOSE. The English search index keeps every other language in a folder inside its own, so asking for everything under it would be millions of files to answer a question about tens of thousands.";
  let query = {
    prefix: folder + "/",
    delimiter: "/",
  };
  let stored = await firebase_storage_stored_query(query);
  return stored;
}
