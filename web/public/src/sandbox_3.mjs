import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function sandbox_3() {
  let books = await ebible_version_books("engbsb");
  return books;
}
