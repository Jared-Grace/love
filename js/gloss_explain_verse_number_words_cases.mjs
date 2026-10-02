import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_explain_verse_number_words_cases() {
  "One word explanation, the verse numbers the chapter it sits in actually has, and for each verse the sentence names, the word it is claiming stands there.";
  "★ THE READING BESIDE THIS ONE ANSWERS WHERE AND HAD A CORPUS FOR TWO YEARS; THIS ONE ANSWERS WHAT AND HAD NONE, WHICH IS THE HALF THAT DECIDES WHO GETS ACCUSED. A verse number found and a verse number checked against the wrong word are the same row in the queue, and the sweep over every chapter cannot tell them apart - it says how many claims came back wrong, never which question was asked. So every fault this reading has ever had was found by opening one file and reading one Urdu sentence by hand. Three of them are written out below, and each one used to be an accusation against a sentence that was right.";
  "The answer is written as one word per verse so a case can be read at a glance: own where the claim is about the word being explained, none where the reading cannot tell and the number is dropped, and otherwise the word the sentence quoted.";
  "★ NONE IS AN ANSWER AND NOT A SILENCE, AND THAT IS THE DISTINCTION THE CASES EXIST TO HOLD. A number answered none is dropped before any verse is asked anything, so nobody is accused over it; a number answered own is checked against the word being explained. Both look like a quiet queue from outside, and a reading that answered none to everything would empty the queue and be called a success. The cases that must come back with a word are therefore as load-bearing as the cases that must come back with none.";
  "★ THE SAME TRAP HAS A SECOND MOUTH NOW THAT A THOUGHT NAMING A VERSE TO SAY WHAT HAPPENS IN IT IS DROPPED BEFORE THE VERSE IS ASKED ANYTHING, SO THE THREE CASES OF THAT TRIO ARE WRITTEN AS A TRIO ON PURPOSE. One must come back empty, because the sentence is about the named verse and claims nothing of the word being explained; one must come back with the word, because the only thing that changed is the verb; and one must come back with a quoted word, because quoting is an explicit claim and the verb never gets a vote on it. Delete the middle one and a reading that drops every Urdu thought alive passes; delete the last and a reading that drops the quote with it passes too.";
  "Every sentence here is one a writer actually wrote or could write in the store it belongs to, and the Urdu ones are written in the script, because a reading blind to a script passes every English case there is.";
  "★ FOUR OF THE FIRST ELEVEN OF THESE CAME BACK RED THE FIRST TIME AND ALL FOUR OF THEM WERE MINE, WHICH IS THE CORPUS DOING ITS WORK IN THE OTHER DIRECTION. Two of the Urdu sentences I invented said of rather than in - and the word for of cancels the verse it stands behind, so the sentence named no verse at all and the reading was right to answer nothing. A third followed from the first. The fourth wrote its English verse as a numeral, and English explanations write their verse numbers out in words; a digit there names nothing, and nothing is the correct answer. Not one of the four was a fault in the reading, and had I pasted back what came out, three real rules would have been recorded as whatever the code happened to do.";
  "$plain explain";
  "$plain verses";
  "$plain about";
  "$plain why";
  "they are sentences, verse numbers, expected answers and the reason each case is kept, and none of them names anything that runs.";
  arguments_assert(arguments, 0);
  let r = [
    {
      explain:
        "وُہی فعل ہے جو آیت ۳ میں آیا، پر یہاں 'to' کے ساتھ: کرنا ہی پڑے گا۔",
      verses: ["1", "2", "3", "4", "5"],
      about: "3:own",
      why: "★ the word for here turns the sentence back to the verse in front of the reader, so the quote after it is not what verse three is being asked about - read without that cut, verse three stood accused of not holding 'to'",
    },
    {
      explain: "وُہی فعل ہے جو آیت ۳ میں آیا، پر 'to' کے ساتھ۔",
      verses: ["1", "2", "3"],
      about: "3:to",
      why: "the other half of that pair: the same sentence with nothing turning it back, and then the quote really is what the claim is about",
    },
    {
      explain: "اُردُو نے یہاں آیت ۴ میں 'love' لِکھا۔",
      verses: ["1", "2", "3", "4"],
      about: "4:love",
      why: "the word for here standing before the number instead of after it must not cost the claim its quote - the cut falls in front of both and leaves them together",
    },
    {
      explain: "وُہی فعل ہے جو آیت ۲۱ میں آیا: 'be' کا اَب کا رُوپ۔",
      verses: ["20", "21", "22"],
      about: "21:own",
      why: "the colon hands over from a claim to the gloss of a claim, and a gloss is exactly where a different word gets quoted",
    },
    {
      explain: "آیت ۳ میں 'in' اَور 'out' مِل کر آیے ہیں۔",
      verses: ["1", "2", "3"],
      about: "3:none",
      why: "two quoted words in one thought say something about each, and picking the nearer would be right about half the time without ever saying which half",
    },
    {
      explain: "آیت ۱۹ میں '-ing' الگ کھڑا تھا۔",
      verses: ["18", "19"],
      about: "19:none",
      why: "a quoted piece of a word is not a word, and no verse can be asked whether it holds one",
    },
    {
      explain: "آیت ۱۵ میں 's' کے ساتھ آیا۔",
      verses: ["14", "15"],
      about: "15:none",
      why: "a single quoted letter is a piece of a word too, written without the dash that marks the others",
    },
    {
      explain: "آیت ۵ میں 'love' آیا۔ آیت ۵ میں آیا۔",
      verses: ["4", "5"],
      about: "5:none",
      why: "the same verse named twice by two thoughts that disagree is answered with nothing, rather than with whichever thought came last",
    },
    {
      explain: "آیت ۵ میں آیا۔ آیت ۵ میں بھی۔",
      verses: ["4", "5"],
      about: "5:own",
      why: "the same verse named twice by two thoughts that agree keeps what they agree on",
    },
    {
      explain: "آیت ۷ میں فرشتوں کو ہَوا کہا گیا تھا۔",
      verses: ["6", "7", "8"],
      about: "",
      why: "★ a thought naming a verse to say what happens in it claims nothing about the word being explained, and reading it as a claim accused two hundred and twenty true sentences in the Urdu store",
    },
    {
      explain: "وُہی لفظ ہے جو آیت ۷ میں آیا۔",
      verses: ["6", "7", "8"],
      about: "7:own",
      why: "the second of that trio: the same verse named by the same store, with the verb that says a word came there, and this one must still be checked",
    },
    {
      explain: "آیت ۷ میں 'wind' کہا گیا تھا۔",
      verses: ["6", "7", "8"],
      about: "7:wind",
      why: "the third of that trio: a quoted word is an explicit claim and keeps its verse whatever verb stands beside it, because the verb is only asked where the subject was being guessed",
    },
    {
      explain: "The same root as the one in verse eight.",
      verses: ["7", "8", "9"],
      about: "8:own",
      why: "English prose explaining Hebrew quotes nothing and claims the word it is explaining, which is most of the original-language store",
    },
    {
      explain: "اِسم ہے: گُناہ، خُدا کی بات نہ ماننا۔",
      verses: ["1", "2"],
      about: "",
      why: "a sentence naming no verse claims nothing, and the empty answer here is the honest one rather than the blind one",
    },
  ];
  return r;
}
