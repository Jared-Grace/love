import { arguments_assert } from "./arguments_assert.mjs";
export function song_image_couplets_versions() {
  "The passages this hymn quotes from some translation other than the page's usual one, each against the bible it is read out of and the name that bible is shown under.";
  "IT STARTED AS TWO ENTRIES BECAUSE TWO IS WHAT THIS SONG WAS ALREADY BEING SHOWN. The page used to keep one list keyed by the passage alone, so a passage decided for the other song was silently decided for this one as well; sixteen passages are sung by both. Two of those sixteen had an entry, and writing exactly those two down here left every reader looking at what they were looking at yesterday. The other fourteen were never in that list and so were already coming out of the page's usual bible.";
  "WHAT IS WRITTEN HERE ANSWERS TO THIS SONG'S OWN LINES AND NOTHING ELSE. The same passage may be quoted one way here and another way in the song next door, and that is not an inconsistency to be tidied away - the two songs echo different words of the same verse, and each is owed the wording it was written against.";
  "THE TWO ENTRIES ADDED AFTERWARDS ARE BOTH PASSAGES THE OTHER SONG SINGS TOO, AND IT KEEPS THE USUAL BIBLE AT BOTH OF THEM. That is the whole case for these lists being separate, in the two clearest examples the page has. Luke twenty three fifty three is sung here as hewn in the rock, which is Darby word for word and which every other English bible on the list says as hewn in stone; the other song sings the same verse as his body laid inside the grave, which Darby does nothing for. Acts two twenty four is sung here as the SON of GOD was raised to life, and the Free Bible Version is the only one that says raised him back to life rather than raised him up; the other song sings Christ raised to life, the vict'ry won, which echoes too little of any of them to move. Held in one list, each of these would have had to be right for both songs or written for neither.";
  "ONLY THE PASSAGES THAT DIFFER ARE WRITTEN HERE. A passage absent from this list is not undecided - it is decided the ordinary way, by the page's usual translation.";
  arguments_assert(arguments, 0);
  let versions = [
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
      reference: "Acts 2:24",
      bible_folder: "engfbv",
      name: "Free Bible Version",
    },
  ];
  return versions;
}
