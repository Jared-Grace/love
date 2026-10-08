import { arguments_assert } from "./arguments_assert.mjs";
import { number_pad } from "./number_pad.mjs";
import { list_join_dash } from "./list_join_dash.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
export function giveaway_passage_code(chapter_code, verse_first, verse_last) {
  arguments_assert(arguments, 3);
  ("$plain chapter_code");
  ("$plain verse_first");
  ("$plain verse_last");
  ("What part of a chapter a given-away file carries, said as one word that sits where a whole chapter's code would sit.");
  ("★ A PART GOES IN ITS CHAPTER'S OWN BOX, NOT IN A BOX OF ITS OWN, WHICH IS WHY THE PART NEEDS A NAME AT ALL. Measured over the recordings on this disk: forty-one psalms are sung whole, thirty-one are sung in parts, and two of them - Psalm 147 and Psalm 149 - are sung both ways. A box per part would cut those two psalms in half and send somebody who asked for Psalm 149 away with some of its singing. So the box is the chapter and the part is carried inside the file name, which means a chapter slot has to be able to hold a part.");
  ("★ THE VERSES ARE PADDED TO THREE DIGITS BECAUSE THE LONGEST CHAPTER IN THE BIBLE HAS A HUNDRED AND SEVENTY-SIX VERSES. The ceiling is read off the text and not off the recordings, so it does not move when more singing is added. Unpadded, Psalm 119 sung in eights would list its hundred-and-fifth verse between its first and its ninth, because every place this name is read - a download page, an unzipped folder, the screen of a music player - sorts as words and none of them can be told to sort as numbers afterwards.");
  ("★ WHAT TELLS A READER THIS IS A PART IS THREE DIGITS, A DASH AND THREE DIGITS - NOT MERELY THE DASH. A whole chapter's file puts the translation straight after the chapter code and a part's file puts the range there instead, so the two shapes hold a different number of words and something has to say which word is which. The obvious test, a dash, is wrong, and was written here before being checked: three of the translation folder names carry a dash of their own - cmn-cu89s, rwo-karo and tuc-t - so a reader testing for a dash would read the translation of a whole psalm as a range of verses. The test that holds is the whole shape, because no translation folder name so much as begins with a digit, checked across every one of them. Keep the test that narrow - a looser one passes on today's files and is wrong on three translations nobody has uploaded yet.");
  ("The chapter code is joined as it is handed over, already padded by whoever spelled it, rather than padded again here. One place knows that Psalms takes three digits and every other book takes two, and a second place holding that same knowledge is a second place for it to go out of step.");
  ("Both ends of the range are written even when a part is one verse long. A single verse written once would be a fourth shape for a reader to learn, and the saving is three characters.");
  let first_padded = number_pad(verse_first, 3);
  let last_padded = number_pad(verse_last, 3);
  let range = list_join_dash([first_padded, last_padded]);
  let passage_code = list_join_underscore([chapter_code, range]);
  return passage_code;
}
