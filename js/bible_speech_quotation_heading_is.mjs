import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function bible_speech_quotation_heading_is(quotation) {
  "$plain quotation";
  "Whether a quotation stands in a chapter's heading rather than in the chapter - which is to say, whether it sits in verse zero, where the verse numbering has not started yet.";
  "★ THIS IS A FALSE POSITIVE AND NOT A MISS, WHICH MAKES IT WORSE THAN THE THING IT WAS FOUND BESIDE. Psalm 9, Psalm 22 and Psalm 45 open with For the choirmaster. To the tune of and then a quoted name - The Death of the Son, The Doe of the Dawn, The Lilies. A parser reading the marks calls that a quotation and a cast reading the parser would give a tune title to a voice and say it out loud. A missed attribution costs someone a minute; this would put a piece of a manuscript's apparatus into the recording as speech.";
  "★ THE RULE IS ABOUT THE VERSE NUMBER AND NOT ABOUT THE WORDS, BECAUSE THE NUMBER IS THE PART THAT IS RELIABLE. Anything printed before verse one is kept as verse zero by the reader that supplies these verses, and everything that lands there is apparatus - a superscription, a musical direction, an editorial title. None of it is ever read aloud in the product, so none of it can contain speech that needs casting, whatever it looks like.";
  "★ IT IS A SEPARATE QUESTION FROM WHETHER SOMETHING IS ATTRIBUTED, AND MIXING THE TWO WOULD HIDE IT. Counted as unattributed, a tune title looks like work waiting for a person; counted as a heading, it is work that must never be done. The report keeps them in different buckets for that reason.";
  arguments_assert(arguments, 1);
  let is = equal(quotation.verse_number, "0");
  return is;
}
