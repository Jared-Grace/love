import { arguments_assert } from "./arguments_assert.mjs";
export function song_image_couplets_versions() {
  "Which bible this hymn is read out of: the one its quiet passages take, and the passages whose own lines earned something else, each against the bible it is read out of and the name that bible is shown under.";
  "THE USUAL BIBLE IS NAMED HERE AND NOT INHERITED FROM THE PAGE. It used to be the page's, one answer standing behind every song on it, and a page-wide answer is the one thing two songs must not share - sixteen passages are sung by both, and a translation chosen for the page is a translation neither song chose. Written here it is this song's answer, and the song next door can move without this one moving.";
  "IT IS CHOSEN ON WHAT A TRANSLATION IS RATHER THAN ON WHAT ANY LINE ECHOES, BECAUSE IT GOVERNS THE PASSAGES WHERE NOTHING ECHOES. Sixty seven of this song's ninety three passages are retold rather than quoted, and at a retelling every translation says about as much of the line as every other - so a count taken there is a count of ties and cannot choose. What is left to choose on is what the translation is for: it renders the words of the original, it is free to hand to anybody, and a reader can understand it without help. The Berean Standard Bible is all three.";
  "WHAT IS WRITTEN BELOW ANSWERS TO THIS SONG'S OWN LINES AND NOTHING ELSE. The same passage may be quoted one way here and another way in the song next door, and that is not an inconsistency to be tidied away - the two songs echo different words of the same verse, and each is owed the wording it was written against.";
  "TWO OF THESE ARE PASSAGES THE OTHER SONG SINGS TOO, AND IT KEEPS ITS OWN USUAL BIBLE AT BOTH OF THEM. That is the whole case for these lists being separate, in the two clearest examples the page has. Luke twenty three fifty three is sung here as hewn in the rock, which is Darby word for word and which every other English bible on the list says as hewn in stone; the other song sings the same verse as his body laid inside the grave, which Darby does nothing for. Acts two twenty four is sung here as the SON of GOD was raised to life, and the Free Bible Version is the only one that says raised him back to life rather than raised him up; the other song sings Christ raised to life, the vict'ry won, which echoes too little of any of them to move. Held in one list, each of these would have had to be right for both songs or written for neither.";
  "FOUR OF THESE WERE REACHED BY READING RATHER THAN BY COUNTING, AND THE COUNT CANNOT SEE ANY OF THEM. At a passage where the sung line shares one word with every translation, the count calls the whole field level and moves on - but the word it shares is not always the word the line is made of. Mark fourteen fifty six is sung as falsely accused, and the usual bible says false witness while the Literal Text says testifying falsely, which is also the verb the original uses. First Peter two twenty three is sung as reviled, and the original repeats that word against itself - reviled, he did not revile back - which the usual bible smooths into heaped abuse and did not retaliate. Luke twenty two forty four is sung as in agony, and agony is the original's own word where the usual bible says anguish. Matthew twenty eight six is sung as was raised to life, a passive, which the Literal Text alone keeps as he was raised up where the rest say he has risen.";
  "TWO MORE PASSAGES WERE READ THE SAME WAY AND STILL TAKE THE USUAL BIBLE, BECAUSE THE ONE TRANSLATION THAT ANSWERED THEM HANDS OVER NO WORDS THERE. Matthew twenty seven sixty six is sung as to seal the grave, and of every English bible on the list only the Literal Standard Version says grave rather than tomb beside sealed the stone; Acts one eleven is sung as HE will return, and only the Unlocked Literal Bible says return rather than come back. Both were written in and both were refused by the gate, which asks each choice for its words before it believes it - so what is recorded here is not that these lines are quiet but that their answer is unshippable, and the usual bible stands at them for want of a second best.";
  "A PASSAGE ABSENT FROM THE EXCEPTIONS IS NOT UNDECIDED, IT IS QUIET. Nothing in the line that rests on it echoes one translation more than another, so it takes the usual one above - and that is a decision about the passage, reached by reading it, rather than a gap where nobody looked.";
  arguments_assert(arguments, 0);
  let usual = {
    bible_folder: "engbsb",
    name: "Berean Standard Bible",
  };
  let exceptions = [
    {
      reference: "Mark 14:56",
      bible_folder: "en_ult",
      name: "unfoldingWord® Literal Text",
    },
    {
      reference: "1 Peter 2:23",
      bible_folder: "engDBY",
      name: "Darby Translation",
    },
    {
      reference: "Luke 22:44",
      bible_folder: "eng-asv",
      name: "American Standard Version (1901)",
    },
    {
      reference: "Matthew 27:59-60",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "Luke 23:53",
      bible_folder: "engDBY",
      name: "Darby Translation",
    },
    {
      reference: "Luke 24:1",
      bible_folder: "eng-asv",
      name: "American Standard Version (1901)",
    },
    {
      reference: "Matthew 28:6",
      bible_folder: "en_ult",
      name: "unfoldingWord® Literal Text",
    },
    {
      reference: "Acts 2:24",
      bible_folder: "engfbv",
      name: "Free Bible Version",
    },
  ];
  let versions = {
    usual: usual,
    exceptions: exceptions,
  };
  return versions;
}
