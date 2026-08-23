import { bible_speech_colon_attribution } from "./bible_speech_colon_attribution.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_speech_narration_words } from "./bible_speech_narration_words.mjs";
import { bible_speech_words_attribution } from "./bible_speech_words_attribution.mjs";
export function bible_speech_text_attribution(text) {
  "What attributes the quotation that follows a run of narration - a speaking verb near the end of it, or a colon closing it - and null where neither is there.";
  "★ THE COLON IS ASKED ABOUT FIRST AND SHORT-CIRCUITS, BECAUSE IT IS EXACT WHERE THE VERB SEARCH IS A PROXY. A colon in that position means one thing; a verb within twelve words means probably. Where both are present the answer is the same either way, so nothing is lost by taking the certain one.";
  "★ ONLY THE TAIL OF THE NARRATION IS LOOKED AT, BECAUSE ATTRIBUTION IS ADJACENT TO THE SPEECH AND ANYTHING FURTHER BACK IS COINCIDENCE. Mark 7 has a verse reading Jesus ordered them not to tell anyone, followed later by unrelated speech; a search over the whole run would credit that speech to the earlier order.";
  "★ THE TAIL IS TWENTY-FIVE WORDS AND NOT TWELVE, BECAUSE WHAT SITS BETWEEN THE VERB AND THE SPEECH IS THE PERSON BEING SPOKEN TO AND THAT CAN BE A LIST. Twelve was chosen as about a clause and it is about a clause; the trouble is that Luke 22 reads Jesus SAID to the chief priests, temple officers, and elders who had come for Him, which puts the verb fourteen words back, and Daniel 1 reads Daniel SAID to the steward whom the chief official had appointed over Daniel, Hananiah, Mishael, and Azariah, which puts it sixteen. Naming who is addressed is normal and naming several is normal, so the window has to clear a list of names rather than a clause.";
  "★ WIDENING IT IS SAFE IN THE ONE DIRECTION THAT MATTERS, WHICH IS WHY THE WIDER NUMBER WINS THE ARGUMENT. A window too narrow MISSES an attribution and sends a verse to a person; a window too wide finds the wrong verb and still answers the only question being asked, which is whether anything nearby says who speaks. The count has always been declared an upper bound on attribution, so the error a wider window can make is the error already accounted for.";
  arguments_assert(arguments, 1);
  let colon = bible_speech_colon_attribution(text);
  if (colon) {
    let r = ":";
    return r;
  }
  let words = bible_speech_narration_words(text);
  let tail = words.slice(-25);
  let found = bible_speech_words_attribution(tail);
  return found;
}
