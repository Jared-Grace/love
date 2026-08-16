export function text_unicode_normalize(text) {
  "$plain text";
  "The one agreed spelling of a piece of text, where the letters it is written with have more than one.";
  "A letter carrying an accent can be written two ways and the two look exactly alike on the screen: as a single letter that already carries its accent, or as the bare letter with the accent set down after it. Greek has a third case, where the same accented letter exists in two separate places in the alphabet at once. Nothing a reader can see tells the spellings apart, so text that was typed out again rather than copied stops matching the text it came from, and every comparison after that quietly says they are different words.";
  "So this is not for storing and not for showing - what is stored should be the letters that arrived. It is for asking whether two pieces of text are the same word, which is a question the letters underneath cannot answer on their own.";
  let r = text.normalize("NFC");
  return r;
}
