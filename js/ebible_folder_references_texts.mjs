import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_version_books_browser_or_node } from "./ebible_version_books_browser_or_node.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_reference_books_text } from "./ebible_reference_books_text.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { property_set } from "./property_set.mjs";
export async function ebible_folder_references_texts(bible_folder, references) {
  "$plain bible_folder";
  "$plain references";
  "The words one bible holds at each of a list of references, answered as each reference against its words.";
  "The books are asked for in a way that knows which of the two places it is running in, so this is the same question in a browser as on a build machine. Asked the build machine's way it ends in downloading and unpacking a bible release, which a page cannot do - and a page that could reach it carried that whole tree in its bundle whether or not it ever walked it.";
  "THE LIST OF BOOKS IS FETCHED ONCE FOR THE WHOLE LIST. That fetch is the slow half of answering even one reference, so asking a hundred references one at a time costs a hundred times what asking them together does.";
  "A reference this bible does not carry is answered with null and the rest are still answered, so one mistyped reference in a hand-written list cannot take the other thirty down with it.";
  "ONE REFERENCE RAISING IS CAUGHT WHERE IT IS ASKED, WHICH IS WHAT MAKES THE LINE ABOVE TRUE. It said so before anything held it to it, and one reference raising emptied the whole list: a bible spelling a book so that the chapter-and-verse came out as the letter s raised on that one passage and answered none of the other hundred, and the caller above catches for its own reasons and so read the whole translation as carrying nothing. Four translations looked exactly like that. A bible that cannot be read at all still reads as nothing here - but as a hundred separate nothings, which is a thing a gate can see.";
  "SEVERAL AT A TIME RATHER THAN ONE AFTER ANOTHER, because each reference that is not in a chapter already on this disk has to wait for that chapter to come down, and waiting for one is no reason to stop asking for the next. A few at a time and not all at once, because the answer is a set of chapters and asking for a hundred at once would only queue them somewhere else.";
  "It takes the bible as well as the references because the thing above it that only ever asks the English one is one line, and a page that wants a passage in the reader's own language is the same question with a different first word.";
  arguments_assert(arguments, 2);
  let books = await ebible_version_books_browser_or_node(bible_folder);
  async function lambda$pair(reference) {
    async function lambda$text() {
      let found = await ebible_reference_books_text(
        bible_folder,
        books,
        reference,
      );
      return found;
    }
    let text = await catch_null_async(lambda$text);
    let pair = {
      reference: reference,
      text: text,
    };
    return pair;
  }
  let pairs = await list_map_limited_async(references, lambda$pair, 8);
  let texts = {};
  for (let pair of pairs) {
    property_set(texts, pair.reference, pair.text);
  }
  return texts;
}
