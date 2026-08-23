import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function bible_speech_quotation_gloss_is(quotation) {
  "$plain quotation";
  "Whether a quotation is the translator saying what a foreign word means rather than anybody speaking - the bracketed English standing beside a Hebrew or Aramaic name.";
  "★ THIS IS THE SECOND FALSE POSITIVE CLASS AND IT IS THE MORE EMBARRASSING ONE, BECAUSE IT WOULD HAVE PUT AN ENGLISH DICTIONARY ENTRY IN A CHARACTER'S MOUTH. Matthew 1:23 has Immanuel and then, in brackets, which means God with us. Mark 3:17 names the sons of Zebedee Boanerges, meaning Sons of Thunder. Mark 7:34 has Ephphatha, which means Be opened. John 9:7 has Siloam, which means Sent. John 20:16 has Rabboni, which means Teacher. Every one of those is quoted, and not one of them is spoken.";
  "★ IT IS RECOGNISED BY THE BRACKET CLOSING IMMEDIATELY AFTER IT, WHICH IS WHAT SEPARATES IT FROM A REAL QUOTATION INTRODUCED BY THE SAME WORDS. A narrator may perfectly well write that a name means something and then quote a person; what he cannot do is close a parenthesis on the very next character. The gloss is inside the brackets and the speech never is, so the closing bracket is the whole test and it is exact rather than probable.";
  "★ FIVE OF THESE EXIST IN THE BEREAN AND ALL FIVE ARE IN THE GOSPELS, WHICH IS WHERE THE ARAMAIC SURVIVES. That is a small number and it is worth a rule anyway, for the same reason the tune titles were: a miss costs a person a minute and a false positive reaches the ears of whoever is listening. The two kinds of error are not comparable and should never be traded against each other by counting them.";
  arguments_assert(arguments, 1);
  let announced = quotation.before.trim();
  let means_is = text_ends_with(announced, "means");
  let meaning_is = text_ends_with(announced, "meaning");
  let introduced = means_is || meaning_is;
  if (!introduced) {
    return false;
  }
  let closing = quotation.after.trim();
  let is = text_starts_with(closing, ")");
  return is;
}
