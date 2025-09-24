import { string_starts_with } from "./string_starts_with.mjs";
import { list_any } from "./list_any.mjs";
import { file_read } from "./file_read.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  let file_path = folder_user_docs_path("bible_references.hopenation.org.txt");
  let contents = await file_read(file_path);
  let digits = "1234567890";
  function lambda(item) {
    let sw = string_starts_with(s, item);
    return sw;
  }
  let any = list_any(list, lambda);
}
