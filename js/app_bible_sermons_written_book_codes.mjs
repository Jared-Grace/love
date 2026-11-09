import { arguments_assert } from "./arguments_assert.mjs";
export function app_bible_sermons_written_book_codes() {
  arguments_assert(arguments, 0);
  ("The books whose sermons were written verse by verse in the sermon loop and finished there, every line approved as it was written. This app offers them beside the approved generated books.");
  ("Kept apart from the generated books' list because the two kinds are stored in different places, and because the game reads that other list for purposes of its own - adding a book here changes what a reader of this app sees and nothing else.");
  ("A book goes here only once every verse of every chapter has a sermon, because a reader is offered whole chapters.");
  let book_codes = ["1JN"];
  return book_codes;
}
