import { bible_storage_books_measure } from "./bible_storage_books_measure.mjs";
import { bible_storage_books_path } from "./bible_storage_books_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function bible_storage_books_write() {
  "Asks storage what it holds for every bible and writes the answer down.";
  "The asking reaches the network; the writing is what makes it worth doing once. Everything that checks this afterwards reads the file.";
  "It overwrites rather than refusing to, because a record of what is on a server is only worth having when it says what is there now. The change standing in the commit is how anybody sees what moved.";
  let measured = await bible_storage_books_measure();
  let path = bible_storage_books_path();
  await file_overwrite_json(path, measured);
  return measured;
}
