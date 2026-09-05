import { arguments_assert } from "./arguments_assert.mjs";
export function bible_pronunciation_choices() {
  "The seven Bible names the dictionary now says differently from the way the recordings said them, where which saying is right is a question for an ear rather than for reasoning.";
  "★ THESE ARE THE ONES REASONING RAN OUT ON, NOT THE ONES NOBODY LOOKED AT. Every other name the dictionary moved was settled on paper: a name sounded out letter by letter against a name somebody wrote down, and one of the two was plainly wrong. For these seven both sayings are defensible - one is the English the language has settled on, the other is closer to the Hebrew - and no amount of further reading decides between them.";
  "★ EACH ONE CARRIES ITS OWN VERSE, AND THE VERSE IS REAL SCRIPTURE. A name standing on its own is spoken with the prosody of a whole utterance and is heard wrongly for reasons that have nothing to do with the name. The same verse is spoken on both sides, so everything except the name cancels.";
  "★ THE COUNT IS CARRIED BESIDE EACH NAME BECAUSE THE SEVEN ARE NOT WORTH THE SAME. Israel is spoken two thousand five hundred and sixty-seven times and the other six together are spoken six hundred and four, so Israel on its own decides whether the recordings are worth making again and the rest ride along with whatever it decides.";
  "★ EACH SAYING IS ALSO WRITTEN IN ORDINARY LETTERS, WHICH IS NOT THE SAME INFORMATION TWICE. The sounds are what the voice is handed; the spelling out is what a person can read without knowing the alphabet the sounds are written in. A page that showed only the sounds would be asking the reader to learn a notation in order to answer a question about their own ear.";
  arguments_assert(arguments, 0);
  let choices = [
    {
      word: "Israel",
      times: 2567,
      was: "ˈɪzɹiəl",
      now: "ˈɪsɹAɛl",
      was_heard: "IZ-ree-ul",
      now_heard: "IS-ray-el",
      sentence:
        "Blessed be the LORD, the God of Israel, from everlasting even to everlasting.",
    },
    {
      word: "Babylon",
      times: 287,
      was: "bˈæbəlˌɑn",
      now: "bˈæbələn",
      was_heard: "BAB-uh-lon",
      now_heard: "BAB-uh-lun",
      sentence:
        "Judah was carried away captive to Babylon for their disobedience.",
    },
    {
      word: "Philistines",
      times: 252,
      was: "fˈɪləstˌinz",
      now: "fəlˈɪstɪnz",
      was_heard: "FIL-uh-steens",
      now_heard: "fuh-LIS-tinz",
      sentence:
        "The men of Israel fled from before the Philistines, and fell down slain on Mount Gilboa.",
    },
    {
      word: "Susa",
      times: 21,
      was: "sˈuzə",
      now: "sˈusə",
      was_heard: "SOO-zuh",
      now_heard: "SOO-suh",
      sentence:
        "The king and Haman sat down to drink; but the city of Susa was perplexed.",
    },
    {
      word: "Nineveh",
      times: 19,
      was: "nˈɪnəvə",
      now: "nˈɪnəvɛ",
      was_heard: "NIN-uh-vuh",
      now_heard: "NIN-uh-veh",
      sentence:
        "So Jonah arose, and went to Nineveh, according to the LORD’s word.",
    },
    {
      word: "Cush",
      times: 13,
      was: "kˈʊʃ",
      now: "kˈʌʃ",
      was_heard: "KUUSH, the vowel in push",
      now_heard: "KUSH, the vowel in hush",
      sentence:
        "He sang this to the LORD, concerning the words of Cush, the Benjamite.",
    },
    {
      word: "Bethany",
      times: 12,
      was: "bˈɛθəni",
      now: "bˈɛθənɪ",
      was_heard: "BETH-uh-nee",
      now_heard: "BETH-uh-nih",
      sentence:
        "The next day, when they had come out from Bethany, he was hungry.",
    },
  ];
  return choices;
}
