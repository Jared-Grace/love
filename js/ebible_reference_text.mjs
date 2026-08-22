import { ebible_reference_books_text } from "./ebible_reference_books_text.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
export async function ebible_reference_text(reference) {
  "$plain reference";
  "The words the English bible holds at one reference written the way a person writes one - 'John 3:16' or 'Matthew 26:59-60' - as a single line, or null when the reference names nothing this bible carries.";
  "A REFERENCE COVERING SEVERAL VERSES COMES BACK AS ONE FLOWING LINE, without the verse numbers in it. The reason for wanting the words at all is usually to put them in front of somebody who has just been given the reference, and a reader in that position is reading a sentence, not consulting a table.";
  "It is the plain-words twin of the reader the apps use, which goes through the browser's own fetching. This one goes through the same store the songs' verses come from, so anything running outside a page - a description being written, a prompt being built - can ask the same question without a page around it.";
  "NULL RATHER THAN A THROW for a reference this bible does not carry, because a list of references is a thing a person wrote by hand and one of them being wrong must not stop the other thirty being answered.";
  "ASKING FOR SEVERAL AT ONCE IS A DIFFERENT NAME, not this one in a loop: the slow half is fetching the list of books, which is the same answer every time, so a loop around this pays it once per reference instead of once.";
  arguments_assert(arguments, 1);
  let folder = ebible_folder_english();
  let books = await ebible_version_books(folder);
  let text = await ebible_reference_books_text(folder, books, reference);
  return text;
}
