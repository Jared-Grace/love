import { arguments_assert } from "./arguments_assert.mjs";
export function app_music_references_versions() {
  "The passages that are quoted from some translation other than the page's usual one, each against the bible it is read out of and the name that bible is shown under.";
  "A SONG IS NOT WRITTEN AGAINST ONE TRANSLATION, IT IS WRITTEN AGAINST A WORDING. Malachi three seventeen is the case that made this exist: the line sung is make up my jewels, which is the King James, and every other English bible on the list says treasured possession or own possession or peculiar treasure there. All of them are the same verse. Only one of them is the line.";
  "ONLY THE PASSAGES THAT DIFFER ARE WRITTEN HERE. Naming a translation for all hundred passages would mean maintaining all hundred, and ninety nine of the entries would say the same word. A passage absent from this list is not undecided - it is decided the ordinary way, next door.";
  "THE NAME IS WRITTEN BESIDE THE FOLDER RATHER THAN LOOKED UP. Showing a reader which translation they are reading has to cost the page nothing, and looking a name up means fetching the thing it is written on. It is kept honest by a gate instead of by care - a name that disagrees with what the translation calls itself fails the build rather than reaching a reader.";
  "WHAT DECIDES IS THE WORDS THE LINE AND THE VERSE SHARE IN A ROW, AND NOTHING ELSE DECIDES FIRST. Every English translation on offer was read against the line that rests on the passage, and the one that says the most of that line the same way one after the other wins - counted words, not an impression. Where two of them say it equally well the older sounding one is taken, and where that still does not separate them the plainer one is. Taken in the other order the answer is the King James at every passage on the page, because it is the older sounding one everywhere, and a hundred entries all saying one word is the thing the paragraph above exists to prevent.";
  "TIED IS NOT BETTER, SO A TIE LEAVES THE PASSAGE OUT. Reading two hundred wordings by eye and keeping whichever felt right would have written an entry here for nearly all of them; only the passages where some translation genuinely says more of the line than the usual one does are written down, which is twenty one of a hundred and one.";
  arguments_assert(arguments, 0);
  let versions = [
    {
      reference: "John 6:38",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "Genesis 22:18",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "John 1:14",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "John 1:29",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "John 19:14",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "Titus 2:11",
      bible_folder: "engasvbt",
      name: "American Standard Version Byzantine Text",
    },
    {
      reference: "Revelation 15:3",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "Ephesians 2:4-5",
      bible_folder: "englsv",
      name: "Literal Standard Version",
    },
    {
      reference: "Romans 5:9",
      bible_folder: "eng-asv",
      name: "American Standard Version (1901)",
    },
    {
      reference: "Revelation 1:5",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "Matthew 27:59-60",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "Luke 24:1",
      bible_folder: "eng-asv",
      name: "American Standard Version (1901)",
    },
    {
      reference: "Philippians 3:9",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "Romans 4:5",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "Malachi 3:17",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "Isaiah 49:2",
      bible_folder: "engasvbt",
      name: "American Standard Version Byzantine Text",
    },
    {
      reference: "Exodus 28:29",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
    {
      reference: "John 13:23",
      bible_folder: "en_ult",
      name: "unfoldingWord® Literal Text",
    },
    {
      reference: "Romans 8:34",
      bible_folder: "engDBY",
      name: "Darby Translation",
    },
    {
      reference: "1 Corinthians 6:11",
      bible_folder: "engfbv",
      name: "Free Bible Version",
    },
    {
      reference: "Psalm 30:12",
      bible_folder: "eng-kjv2006",
      name: "King James (Authorized) Version",
    },
  ];
  return versions;
}
