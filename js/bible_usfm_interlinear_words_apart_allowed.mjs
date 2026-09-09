import { arguments_assert } from "./arguments_assert.mjs";
export function bible_usfm_interlinear_words_apart_allowed() {
  arguments_assert(arguments, 0);
  ("The nine chapters where the Berean read off the usfm shelf and the Berean printed in the interlinear tables do not say the same words, with exactly which words each side holds over the other, and beside each one the reason somebody opened the verse and decided the reading was not at fault.");
  ("★ EVERY ENTRY WAS OPENED AT THE VERSE THE SWEEP NAMED, ON BOTH SHELVES, WHICH IS THE ONLY THING THAT MAKES THIS AN ALLOWANCE RATHER THAN A SHRUG. A list written straight off a run says nothing except that the run happened, and a check resting on it passes because it was told to. What stands here is the reading of nine verses on two shelves, and three of the first reasons written down were wrong and were corrected by looking.");
  ("★ NOT ONE OF THE NINE IS THE READING HANDING OVER A WRONG WORD, OR LOSING ONE, ANY MORE, AND THAT IS WHAT CHANGED. There were thirteen, and six of them were the publisher's own marked-up file missing a space, carrying three stray letters, or putting a heading's mark on a line of scripture, so a person copying that chapter was given a word no dictionary holds, or was quietly not given the last words of the book. Those six are now put right on the way in, one place at a time, each against a second published edition of the same translation, and the list of them is kept apart. What is left here is the tables' own faults and the two editions honestly differing, which is a thing to be recorded and not a thing to be mended.");
  ("THE WORDS ARE WRITTEN OUT AND NOT COUNTED, AND THAT IS THE POINT OF THE SHAPE. A count would pass a chapter that had swapped one wrong word for another, which is exactly the fault this whole sweep exists to catch. Written out, a chapter may only stay allowed by disagreeing in precisely the way somebody read.");
  ("THEY FALL INTO FIVE CAUSES AND NOT ONE. Three are stray page markup left inside the interlinear tables, whose letters read as words on that side. Two are three stray letters the tables carry that the shelf is now mended of, so the sweep has turned round and is pointing at them. Two are the two editions wording a clause differently. One is the reading keeping the square-bracketed words the printing supplies, which the tables drop on purpose. One is a clause the printing supplies where the Hebrew has nothing and the tables leave out.");
  ("NOT ONE OF THE NINE IS THE READING ADDING OR LOSING A LINE OF ITS OWN, which is the fault this was built after - a book-division subtitle written with the psalm ascription mark was being handed to whoever copied Psalm 107, and it opened the passage with the words Psalms 107-150. Every psalm now agrees word for word except one, and that one is stray markup on the tables' side.");
  ("A CHAPTER STANDING APART WITH NO LINE HERE IS THE FAILURE THIS IS FOR. That is a chapter nobody has read at the words where the two publications differ, and a passage nobody has read is exactly the one that gets copied onto a slide with a heading in the middle of it.");
  let allowed = {
    GEN35: {
      reading_over: [],
      english_over: ["vvv"],
      why: "the tables carry three stray letters in the middle of verse eighteen, she named vvv him Ben-oni, and the shelf carried them too until they were mended out of it - the same mark stands in the publisher's material behind both editions, and eBible's release of the same translation reads she named him Ben-oni",
    },
    EXO26: {
      reading_over: ["use", "of", "gold"],
      english_over: [],
      why: "the two editions word the clause differently - the shelf says overlay them with gold, use hooks of gold, and the tables say with gold hooks, so the same instruction is three words longer on one side",
    },
    EXO38: {
      reading_over: ["silver", "of"],
      english_over: [],
      why: "the shelf keeps the square-bracketed words the printing supplies, reading with the 1,775 shekels [of silver] he made the hooks, and the tables drop bracketed text on purpose wherever it stands",
    },
    DEU32: {
      reading_over: ["adversaries", "and"],
      english_over: ["p", "classindentand", "adversariesp", "classindent"],
      why: "the tables carry stray page markup in this song, a paragraph opening with an indent class standing in the middle of a line, and its letters read as words on that side - the shelf is clean and says only adversaries and",
    },
    JDG16: {
      reading_over: ["tightened", "she", "it", "then"],
      english_over: [],
      why: "the tables leave the whole clause Then she tightened [it] with a pin out, which the printing supplies from the Greek and Latin where the Hebrew does not have it - this chapter also held a footnote closed straight against the next word, giving webthen as one word, and that half is now mended on the way in",
    },
    "1CH01": {
      reading_over: [],
      english_over: ["p", "classlist"],
      why: "the tables carry stray page markup in the genealogy, a paragraph opening with a list class, and its letters read as words on that side - the shelf holds nothing over at all",
    },
    PSA145: {
      reading_over: ["and"],
      english_over: ["p", "classindentand"],
      why: "the tables weld a stray indent-class paragraph opening onto the word and, so one word on the shelf meets one unreadable run on theirs - the only psalm of the hundred and fifty that does not agree word for word, and the disagreement is on their side",
    },
    ACT04: {
      reading_over: [],
      english_over: ["vvv"],
      why: "the tables carry three stray letters opening the parenthesis at verse thirty six, Barnabas (vvv meaning Son of Encouragement), and the shelf carried them too until they were mended out of it - eBible's release of the same translation reads Barnabas (meaning Son of Encouragement)",
    },
    JUD01: {
      reading_over: ["profit", "for"],
      english_over: ["headlong"],
      why: "the two editions word the verse differently - the shelf says they have rushed for profit into the error of Balaam and the tables say rushed headlong - so this is the Berean disagreeing with itself between two of its own printings rather than either side being read wrongly",
    },
  };
  return allowed;
}
