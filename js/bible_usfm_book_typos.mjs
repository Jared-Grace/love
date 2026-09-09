import { arguments_assert } from "./arguments_assert.mjs";
export function bible_usfm_book_typos() {
  arguments_assert(arguments, 0);
  ("Every place a bible on this disk is marked up wrongly in a way that hands a reader a word the translation does not say, with the exact run of the publisher's file that is wrong, the exact run that replaces it, and the reason somebody decided it was wrong.");
  ("★ NOT ONE OF THESE IS A JUDGEMENT ABOUT WHAT THE TRANSLATION SHOULD SAY, AND THAT IS THE ONLY THING THAT MAKES A LIST LIKE THIS ALLOWABLE AT ALL. Every entry was read at the verse it names in a second, separately published edition of the same translation - eBible's own release of it, fetched by a different program from a different publisher into a different folder on this disk - and every replacement is what that edition prints, letter for letter. So none of these is this repo deciding what scripture says; each is this repo declining to hand on a fault that one release has and the other does not.");
  ("THEY ARE ALL THE SAME TWO FAULTS. Five are a space that is not there, so two words arrive welded into one that no dictionary holds - a footnote closed straight against the next word, a colon or a comma with nothing after it. Three are three stray letters, v v v, standing in the middle of a sentence where the other edition has nothing at all; they are plainly a mark left in by whoever prepared the file, and every one of the three sits where a word was cut.");
  ("THE STRAY LETTERS WERE NOT FOUND BY THE CHECK, AND THAT IS WORTH KNOWING RATHER THAN HIDING. The sweep that sets this shelf beside the interlinear's English found the one in Luke, because there the tables were set from the Greek and had nothing answering to it. The two in Genesis and Acts it could not see, because the interlinear's English carries them too - the fault is upstream of both editions, so two roads that both start there arrive at the same wrong place. A check is blind to whatever is wrong in its own control, and the way past that is a third copy, which is what the eBible release is here.");
  ("A RUN IS SPELLED LONG ENOUGH TO STAND ALONE IN ITS BOOK, AND THAT IS CHECKED RATHER THAN TRUSTED. A short run would be found in places nobody looked at, and the mend would land in all of them; the gate beside this asks the shelf whether each run is still there exactly once, so a publisher fixing one of these upstream turns the entry red and somebody takes it out, rather than the mend quietly landing nowhere or landing twice.");
  let typos = [
    {
      version: "bsb",
      book_code: "GEN",
      from: "she named vvv him Ben-oni",
      to: "she named him Ben-oni",
      why: "three stray letters stand between the verb and its object at 35:18, and eBible's release of the same translation reads she named him Ben-oni",
    },
    {
      version: "bsb",
      book_code: "NUM",
      from: "sons:This",
      to: "sons: This",
      why: "the colon at 6:23 has no space after it, so the reading hands over sonsthis as one word, and eBible's release reads his sons: This is how you are to bless",
    },
    {
      version: "bsb",
      book_code: "JDG",
      from: "\\f*Then she",
      to: "\\f* Then she",
      why: "the footnote at 16:14 closes straight against the next word, so the reading hands over webthen as one word, and eBible's release reads web. Then she tightened",
    },
    {
      version: "bsb",
      book_code: "1SA",
      from: "\\f*saying,",
      to: "\\f* saying,",
      why: "the footnote on the name at 1:20 closes straight against the next word, so the reading hands over samuelsaying as one word, and eBible's release reads Samuel, saying - the same file leaves the space in the matching footnote elsewhere",
    },
    {
      version: "bsb",
      book_code: "JER",
      from: "“evenif you, Coniah",
      to: "“even if you, Coniah",
      why: "two words are welded with no space and no punctuation between them at 22:24, and eBible's release reads declares the LORD, “even if you, Coniah",
    },
    {
      version: "bsb",
      book_code: "JER",
      from: "the LORD,which I sent",
      to: "the LORD, which I sent",
      why: "the comma at 29:19 has no space after it, so the reading hands over lordwhich as one word, and eBible's release reads declares the LORD, which I sent to them again and again",
    },
    {
      version: "bsb",
      book_code: "LUK",
      from: "Elijah.” ( vvv He did not know",
      to: "Elijah.” (He did not know",
      why: "three stray letters open the parenthesis at 9:33, and eBible's release reads and for Elijah.” (He did not know what he was saying.)",
    },
    {
      version: "bsb",
      book_code: "ACT",
      from: "Barnabas (vvv meaning",
      to: "Barnabas (meaning",
      why: "three stray letters open the parenthesis at 4:36, and eBible's release reads whom the apostles called Barnabas (meaning Son of Encouragement)",
    },
  ];
  return typos;
}
