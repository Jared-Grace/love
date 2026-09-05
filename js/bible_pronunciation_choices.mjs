import { arguments_assert } from "./arguments_assert.mjs";
export function bible_pronunciation_choices() {
  "The seven Bible names the dictionary now says differently from the way the recordings said them, where which saying is right is a question for an ear rather than for reasoning.";
  "★ THESE ARE THE ONES REASONING RAN OUT ON, NOT THE ONES NOBODY LOOKED AT. Every other name the dictionary moved was settled on paper: a name sounded out letter by letter against a name somebody wrote down, and one of the two was plainly wrong. For these seven both sayings are defensible - one is the English the language has settled on, the other is closer to the Hebrew - and no amount of further reading decides between them.";
  "★ EACH ONE CARRIES ITS OWN VERSE, AND THE VERSE IS REAL SCRIPTURE. A name standing on its own is spoken with the prosody of a whole utterance and is heard wrongly for reasons that have nothing to do with the name. The same verse is spoken on both sides, so everything except the name cancels.";
  "Israel is the whole of the weight here: it is spoken two thousand five hundred and sixty-seven times, more than the other six together many times over, so it alone decides whether the chapters are worth recording again.";
  arguments_assert(arguments, 0);
  let choices = [
    {
      word: "Israel",
      was: "ˈɪzɹiəl",
      now: "ˈɪsɹAɛl",
      sentence:
        "Blessed be the LORD, the God of Israel, from everlasting even to everlasting.",
    },
    {
      word: "Babylon",
      was: "bˈæbəlˌɑn",
      now: "bˈæbələn",
      sentence:
        "Judah was carried away captive to Babylon for their disobedience.",
    },
    {
      word: "Philistines",
      was: "fˈɪləstˌinz",
      now: "fəlˈɪstɪnz",
      sentence:
        "The men of Israel fled from before the Philistines, and fell down slain on Mount Gilboa.",
    },
    {
      word: "Susa",
      was: "sˈuzə",
      now: "sˈusə",
      sentence:
        "The king and Haman sat down to drink; but the city of Susa was perplexed.",
    },
    {
      word: "Nineveh",
      was: "nˈɪnəvə",
      now: "nˈɪnəvɛ",
      sentence:
        "So Jonah arose, and went to Nineveh, according to the LORD’s word.",
    },
    {
      word: "Cush",
      was: "kˈʊʃ",
      now: "kˈʌʃ",
      sentence:
        "He sang this to the LORD, concerning the words of Cush, the Benjamite.",
    },
    {
      word: "Bethany",
      was: "bˈɛθəni",
      now: "bˈɛθənɪ",
      sentence:
        "The next day, when they had come out from Bethany, he was hungry.",
    },
  ];
  return choices;
}
