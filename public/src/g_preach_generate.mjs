import { g_preach_generate_book } from "../../../love/public/src/g_preach_generate_book.mjs";
export async function g_preach_generate() {
  let book_code = "JAS";
  await g_preach_generate_book(book_code);
}
