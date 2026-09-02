import { arguments_assert } from "./arguments_assert.mjs";
import { text_replace_multiple_to } from "./text_replace_multiple_to.mjs";
export function text_paragraph_marks_removed(text) {
  arguments_assert(arguments, 1);
  ("$plain text");
  ("One run of a bible's words with the printer's paragraph marks taken out of it and nothing else changed.");
  ("The mark is a pilcrow the publisher sets where a new paragraph opens. It is typesetting and not scripture - nobody says it aloud, and a reader shown one sees a stray character standing in front of a sentence. Twelve verses behind the two songs of the music page carry one, and John 1:29 is quoted on that page today as a pilcrow followed by the words of the verse.");
  ("THE SPACE AFTER THE MARK COMES AWAY WITH IT, WHICH IS WHY THE MARK AND ITS SPACE ARE ASKED FOR FIRST. The mark opens a verse in eleven of the twelve and stands in the middle of a sentence in the twelfth, and only taking the space along leaves both of those right: the opened verse would otherwise begin with a space, and the middle of the sentence would carry two where the publisher typed one.");
  ("A mark with nothing after it is asked for second, and has not been found in anything read so far. Asking anyway costs one more pass over the words and is what makes it true that no mark can be left behind, rather than true only of the pages that have been looked at.");
  let marks = ["¶ ", "¶"];
  let removed = text_replace_multiple_to(text, marks, "");
  return removed;
}
