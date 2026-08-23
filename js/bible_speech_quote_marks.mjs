import { text_from_code_number } from "./text_from_code_number.mjs";
export function bible_speech_quote_marks() {
  "The pair of characters that open and close direct speech in this repo's bibles - the left and right double quotation marks.";
  "★ THE DOUBLE MARKS ARE USED AND THE SINGLE ONES ARE DELIBERATELY NOT, BECAUSE THE RIGHT SINGLE MARK IS ALSO THE APOSTROPHE. The Song of Songs opens with Solomon's Song of Songs, and the mark in Solomon's is the same character that closes a nested quotation. So a stack counting single marks starts wrong on the first verse of that book and never recovers, while the double marks have no other use in English and can be trusted absolutely.";
  "★ NOTHING IS LOST BY IGNORING THE SINGLE ONES, AND THE REASON IS A RULE THAT WAS SETTLED FOR AN UNRELATED REASON. A quotation nested inside a quotation keeps the voice of whoever is doing the quoting, because that is how a person reads aloud - Jesus citing the commandment is not interrupted by God. So the inner marks were never going to change a voice, and the only mark a reading has to find is the outer one. The unreliable character is exactly the character nobody needs.";
  "That the two facts line up is luck rather than design, and it is worth writing down, because a later reader tempted to handle the single marks properly would be spending effort on a distinction the reading does not make.";
  let open = text_from_code_number(8220);
  let close = text_from_code_number(8221);
  let marks = {
    open,
    close,
  };
  return marks;
}
