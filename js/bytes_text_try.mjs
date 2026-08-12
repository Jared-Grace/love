import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null } from "./catch_null.mjs";
export function bytes_text_try(bytes) {
  "The text these bytes spell, or nothing at all if they spell none - which is how a file that was never text says so";
  "Text is bytes under an agreement about which byte stands for which letter, and not every run of bytes keeps that agreement. Asking for the text back is therefore the same question as asking whether this is text, so it is one question here rather than two: a picture has no text to give, and a file that does give text was text.";
  "The reader is told to stop rather than to carry on, which is the whole point. Left to itself it hands back one stand-in character for each byte it could not read and never fails, so the failure has to be asked for; and the stand-in it hands back is an ordinary character that a text file may perfectly well contain on purpose, so looking for one afterwards calls a file about encodings a picture.";
  "It leans toward calling things text, and that is the right way to lean. Calling a picture text costs a search almost nothing - a file with no words in it holds none of the word being looked for - while calling a text file a picture drops every line in it out of the answer without saying so.";
  "Only the one agreement is read, the one the whole repo is written under. Text kept under an older agreement is not read, and is treated the same as a picture.";
  arguments_assert(arguments, 1);
  function lambda() {
    let decoder = new TextDecoder("utf-8", {
      fatal: true,
    });
    let decoded = decoder.decode(bytes);
    return decoded;
  }
  let text = catch_null(lambda);
  return text;
}
