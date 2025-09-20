import { file_open } from "./file_open.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  let file_path = folder_user_docs_path("nations_mentioned.carm.org.txt");
  await file_open(f_path);
}
