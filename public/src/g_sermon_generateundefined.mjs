import { marker } from "../../../love/public/src/marker.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { g_sermon_generate_bookundefined } from "../../../love/public/src/g_sermon_generate_bookundefined.mjs";
export async function g_sermon_generateundefined() {
  marker("1");
  const bible_folder = "engbsb";
  let books = await ebible_version_books(bible_folder);
  async function lambda(b) {
    let { book_code } = b;
    await g_sermon_generate_bookundefined(bible_folder, book_code);
  }
  await each_async(books, lambda);
}
