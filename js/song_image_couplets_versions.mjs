import { arguments_assert } from "./arguments_assert.mjs";
export function song_image_couplets_versions() {
  "Which bible this hymn is read out of: the one its quiet passages take, and the passages whose own lines earned something else, each against the bible it is read out of and the name that bible is shown under.";
  "THE USUAL BIBLE IS NAMED HERE AND NOT INHERITED FROM THE PAGE. It used to be the page's, one answer standing behind every song on it, and a page-wide answer is the one thing two songs must not share - sixteen passages are sung by both, and a translation chosen for the page is a translation neither song chose. Written here it is this song's answer, and the song next door can move without this one moving.";
  "IT IS CHOSEN ON WHAT A TRANSLATION IS RATHER THAN ON WHAT ANY LINE ECHOES, BECAUSE IT GOVERNS THE PASSAGES WHERE NOTHING ECHOES. Sixty seven of this song's ninety three passages are retold rather than quoted, and at a retelling every translation says about as much of the line as every other - so a count taken there is a count of ties and cannot choose. What is left to choose on is what the translation is for: it renders the words of the original, it is free to hand to anybody, and a reader can understand it without help. The Berean Standard Bible is all three.";
  "WHAT IS WRITTEN BELOW ANSWERS TO THIS SONG'S OWN LINES AND NOTHING ELSE. The same passage may be quoted one way here and another way in the song next door, and that is not an inconsistency to be tidied away - the two songs echo different words of the same verse, and each is owed the wording it was written against.";
  "THREE OF THESE ARE PASSAGES THE OTHER SONG SINGS TOO. That is the whole case for these lists being separate, in the clearest examples the page has. Luke twenty three fifty three is sung here as hewn in the rock, which is Darby word for word and which every other English bible on the list says as hewn in stone; the other song sings the same verse as his body laid inside the grave, which Darby does nothing for. Acts two twenty four is sung here as the SON of GOD was raised to life, and the Free Bible Version is the only one that says raised him back to life rather than raised him up; the other song sings Christ raised to life, the vict'ry won, which echoes too little of any of them to move. John nineteen thirty is sung here as 'til all was done, and the Basic English is the only bible on the list that says all is done where the rest say it is finished. Held in one list, each of these would have had to be right for both songs or written for neither.";
  "FOUR OF THESE WERE REACHED BY READING RATHER THAN BY COUNTING, AND THE COUNT CANNOT SEE ANY OF THEM. At a passage where the sung line shares one word with every translation, the count calls the whole field level and moves on - but the word it shares is not always the word the line is made of. Mark fourteen fifty six is sung as falsely accused, and the usual bible says false witness while the Literal Text says testifying falsely, which is also the verb the original uses. First Peter two twenty three is sung as reviled, and the original repeats that word against itself - reviled, he did not revile back - which the usual bible smooths into heaped abuse and did not retaliate. Luke twenty two forty four is sung as in agony, and agony is the original's own word where the usual bible says anguish. Matthew twenty eight six is sung as was raised to life, a passive, which the Literal Text alone keeps as he was raised up where the rest say he has risen.";
  "TWO MORE PASSAGES WERE READ THE SAME WAY AND STILL TAKE THE USUAL BIBLE, BECAUSE THE ONE TRANSLATION THAT ANSWERED THEM HANDS OVER NO WORDS THERE. Matthew twenty seven sixty six is sung as to seal the grave, and of every English bible on the list only the Literal Standard Version says grave rather than tomb beside sealed the stone; Acts one eleven is sung as HE will return, and only the Unlocked Literal Bible says return rather than come back. Both were written in and both were refused by the gate, which asks each choice for its words before it believes it - so what is recorded here is not that these lines are quiet but that their answer is unshippable, and the usual bible stands at them for want of a second best.";
  "THREE MORE WERE ADDED ON THE FOURTH OF SEPTEMBER OUT OF PASSAGES WHERE THE COUNT REACHED A TIE AND HANDED THE REST OVER. The ranking's third tier is the older sounding and plainer wording, which is a judgement about how English reads and which no count gets to, so a passage that gets that far comes back tied on purpose. Matthew twenty seven sixty is sung as hewn in the rock, and Darby and the Emphasised Bible are the only two that say hewn in the rock with nothing between - the American Standard, the King James and Webster all put out in the middle of it - while of those two Darby says he rolled a great stone where the Emphasised says rolling near a large stone, so Darby is nearer the line a stone was rolled as well. Hebrews twelve twenty eight is sung as we live our lives in godly fear, and godly fear is a King James phrase the line sings unaltered; Webster is the King James with its grammar smoothed and adds nothing this line echoes, and the Majority Standard is the plainest of the four but the least old sounding. Revelation twenty one four is sung as for every tear HE'll wipe away, with no more sorrow no more pain, which is four things at once - the Literal Standard Version is the only wording at the top of that count carrying all four, since the King James and Webster say all tears rather than every tear and the Basic English drops the tear altogether for weeping.";
  "FIVE PASSAGES THE COUNT DID DECIDE WERE REFUSED BY READING THEM, AND EACH WAS WON ON A WORD THE LINE IS NOT MADE OF OR ON A WORD THE VERSE DOES NOT HAVE. Romans one four is sung as the SON of GOD was raised to life, and the Basic English took it by saying coming to life again - but it is also the one translation on the list that does not say the Son of God, which is the phrase the line actually sings and which the usual bible keeps. Matthew twenty seven sixty five to sixty six is sung as then pilate put the guard in place, and the Geneva Bible took it on the two words then Pilate alone, while saying watch where the line says guard and spelling the rest as saide vnto them, ye haue a watch, goe - so it loses the noun and fails to be understandable in the same stroke, and the usual bible says guard twice and posting the guard besides. Matthew twenty eight one is sung as near dawn's first light, and the Basic English took it on the word near, which it uses to mean dawn was approaching where the line uses it to mean at, and it gives up the tomb for the place where his body was in the bargain. The last two are refusals of a different kind and are worth keeping apart: Romans eight thirty two is sung as the FATHER gave HIS only SON and First Peter two twenty four as HIS hands HIS feet nailed to the tree, and at both the Basic English won by saying a word the verse does not say - only where the original says his own, and nailed where the original says bore in his body. Both additions are true of what happened and neither is what the verse says, and a translation is not made truer to the original by moving toward the hymn. The song already supplies those words; the verse beneath it is there to say its own.";
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
      reference: "John 19:30",
      bible_folder: "engBBE",
      name: "Bible in Basic English",
    },
    {
      reference: "Matthew 27:59-60",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "Matthew 27:60",
      bible_folder: "engDBY",
      name: "Darby Translation",
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
    {
      reference: "Hebrews 12:28",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "Revelation 21:4",
      bible_folder: "englsv",
      name: "Literal Standard Version",
    },
  ];
  let versions = {
    usual: usual,
    exceptions: exceptions,
  };
  return versions;
}
