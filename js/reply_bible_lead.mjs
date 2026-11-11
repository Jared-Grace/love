import { reply_words } from "./reply_words.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_bible_reference } from "./reply_bible_reference.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_bible_lead() {
  "What may come before any verse the rules read: words saying a passage is coming, where it is, both, or neither - for in the word of the Lord it is written in the first John verses 7 through 10; Today's Verse Philippians 4:6-7.";
  "★ EVERY PART IS OPTIONAL, BECAUSE IT IS ONLY EVER READ IN FRONT OF A VERSE. Said alone it is followed by nothing, so the verse that must come next is what keeps a bare heading from being answered.";
  "★ ONE LEAD FOR EVERY VERSE, NOT ONE PER PASSAGE. Each lead was first written for the passage it arrived with, so the same heading in front of a different verse went unheard; the words saying a verse is coming do not depend on which verse it is.";
  let written = reply_words("for in the word of the lord it is written in");
  let today = reply_words("today's verse");
  let saying = reply_choice([written, today]);
  let saying_optional = reply_optional(saying);
  let reference = reply_bible_reference();
  let reference_optional = reply_optional(reference);
  let lead = reply_sequence([saying_optional, reference_optional]);
  return lead;
}
