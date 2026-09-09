import { arguments_assert } from "./arguments_assert.mjs";
export function bible_usfm_interlinear_words_apart_allowed() {
  arguments_assert(arguments, 0);
  ("The thirteen chapters where the Berean read off the usfm shelf and the Berean printed in the interlinear tables do not say the same words, with exactly which words each side holds over the other, and beside each one the reason somebody opened the verse and decided the reading was not at fault.");
  ("★ EVERY ENTRY WAS OPENED AT THE VERSE THE SWEEP NAMED, ON BOTH SHELVES, WHICH IS THE ONLY THING THAT MAKES THIS AN ALLOWANCE RATHER THAN A SHRUG. A list written straight off a run says nothing except that the run happened, and a check resting on it passes because it was told to. What stands here is the reading of thirteen verses on two shelves, and three of the first reasons written down were wrong and were corrected by looking.");
  ("THE WORDS ARE WRITTEN OUT AND NOT COUNTED, AND THAT IS THE POINT OF THE SHAPE. A count would pass a chapter that had swapped one wrong word for another, which is exactly the fault this whole sweep exists to catch. Written out, a chapter may only stay allowed by disagreeing in precisely the way somebody read.");
  ("THEY FALL INTO FIVE CAUSES AND NOT ONE. Five are the publisher's own marked-up file missing a space, so the reading hands over two words welded exactly as they are printed. Three are stray page markup left inside the interlinear tables, whose letters read as words on that side. Three are the two editions wording a clause differently, or the tables leaving a supplied clause out. Two are the reading keeping the square-bracketed words the printing supplies, which the tables drop on purpose. One is a line the printing sets as a note under the last verse, and one is three stray letters in the publisher's file.");
  ("NOT ONE OF THE THIRTEEN IS THE READING ADDING OR LOSING A LINE OF ITS OWN, which is the fault this was built after - a book-division subtitle written with the psalm ascription mark was being handed to whoever copied Psalm 107, and it opened the passage with the words Psalms 107-150. Every psalm now agrees word for word except one, and that one is stray markup on the tables' side.");
  ("A CHAPTER STANDING APART WITH NO LINE HERE IS THE FAILURE THIS IS FOR. That is a chapter nobody has read at the words where the two publications differ, and a passage nobody has read is exactly the one that gets copied onto a slide with a heading in the middle of it.");
  let allowed = {
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
    NUM06: {
      reading_over: ["sonsthis"],
      english_over: ["sons", "this"],
      why: "the publisher's file itself reads Tell Aaron and his sons:This is how you are to bless, with no space after the colon, so the reading hands over what is printed and the tables, cut from the same wording set another way, keep the two words apart",
    },
    DEU32: {
      reading_over: ["adversaries", "and"],
      english_over: ["p", "classindentand", "adversariesp", "classindent"],
      why: "the tables carry stray page markup in this song, a paragraph opening with an indent class standing in the middle of a line, and its letters read as words on that side - the shelf is clean and says only adversaries and",
    },
    JDG16: {
      reading_over: ["webthen", "tightened", "she", "it"],
      english_over: ["web"],
      why: "two faults in one chapter and neither is the reading's - the publisher's file closes a footnote straight against the next word, giving web.Then with no space, and the tables leave the whole clause Then she tightened [it] with a pin out, which the printing supplies from the Greek and Latin where the Hebrew does not have it",
    },
    "1SA01": {
      reading_over: ["samuelsaying"],
      english_over: ["samuel", "saying"],
      why: "the publisher's file closes the footnote on the name Samuel straight against the next word, giving Samuel,saying with no space, where the same file leaves a space in the matching footnote three chapters later",
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
    JER22: {
      reading_over: ["evenif"],
      english_over: ["even", "if"],
      why: "the publisher's file spells it evenif with no space, and the tables keep the two words apart",
    },
    JER29: {
      reading_over: ["lordwhich"],
      english_over: ["which", "lord"],
      why: "the publisher's file spells it LORD,which with no space after the comma, and the tables keep the two words apart",
    },
    HAB03: {
      reading_over: [],
      english_over: [
        "for",
        "the",
        "choirmaster",
        "with",
        "stringed",
        "instruments",
      ],
      why: "the printing sets the line For the choirmaster. With stringed instruments. under the last verse as a section reference rather than as scripture, so the reading leaves it out along with every other heading, while the Hebrew counts it as part of the last verse and the tables carry it",
    },
    LUK09: {
      reading_over: ["vvv"],
      english_over: [],
      why: "the publisher's own file reads ( vvv He did not know what he was saying.) at verse thirty three, so the three letters are in the marked-up release and the reading hands over what is printed - the tables, set from the Greek, have nothing answering to them",
    },
    JUD01: {
      reading_over: ["profit", "for"],
      english_over: ["headlong"],
      why: "the two editions word the verse differently - the shelf says they have rushed for profit into the error of Balaam and the tables say rushed headlong - so this is the Berean disagreeing with itself between two of its own printings rather than either side being read wrongly",
    },
  };
  return allowed;
}
