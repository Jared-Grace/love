import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_book_speaker_default } from "./bible_book_speaker_default.mjs";
export function bible_speech_quotation_citation_is(book_code) {
  "$plain book_code";
  "Whether a quotation in this book is a citation rather than a change of speaker - which is to say, whether the book is a letter.";
  "★ A LETTER HAS NO SECOND VOICE IN IT, SO EVERY QUOTATION IN ONE IS THE AUTHOR CITING SOMETHING. When Paul writes that it is written and then quotes Isaiah, Paul is the one still speaking; he is doing exactly what Jesus does when he cites the commandment inside his own speech, and the rule that a quoter keeps his voice was settled for that case first. Nothing about a letter needs casting.";
  "★ THIS TURNS EIGHTY-EIGHT OF THE FOUR HUNDRED AND TEN UNATTRIBUTED QUOTATIONS INTO NO WORK AT ALL. Romans, both Corinthians, Galatians, Ephesians, Colossians, Second Thessalonians, both to Timothy, Hebrews, James and both of Peter were the books with the worst attribution ratios in the whole Bible, and they were the worst for a reason that means they need nothing: nobody is being quoted as a speaker, so nobody is missing.";
  "★ IT ASKS THE SPEAKER TABLE RATHER THAN LISTING THE LETTERS, WHICH IS WHAT KEEPS THE TWO FROM DRIFTING. The table already records the kind of every book, and a second list of which books are letters would be a copy that could disagree with it. A book whose kind is corrected there is corrected here at the same moment.";
  arguments_assert(arguments, 1);
  let book = bible_book_speaker_default(book_code);
  if (equal(book, null)) {
    return false;
  }
  let is = equal(book.kind, "letter");
  return is;
}
