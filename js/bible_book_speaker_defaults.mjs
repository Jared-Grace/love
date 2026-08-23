export function bible_book_speaker_defaults() {
  "For each of the sixty-six books, who is speaking when nothing marks a speaker - the voice a reading falls back to outside every quotation - together with what kind of book it is, since the kind decides how much of the book that default actually covers.";
  "★ THIS EXISTS BECAUSE A QUOTE MARKS SPEECH EMBEDDED IN SOMETHING ELSE, SO WHAT GOES UNMARKED IS NOT UNSPOKEN - IT IS THE BOOK'S OWN VOICE. A parser handed Romans finds no quotation marks and would conclude nobody speaks, when in fact one man speaks from the first word to the last. The quotes and this table are two halves of one answer, and neither is usable alone.";
  "★ IT IS AUTHORED AND NOT DERIVED, AND THAT IS NOT A DEFECT TO BE FIXED LATER. Nothing in the text of Romans says Paul is speaking it; that is knowledge about the book rather than a mark inside it. The same judgement was made for the Gospel scene kinds, for the same reason, and it should be re-decided by a reader rather than trusted if it ever seems wrong.";
  "★ THE KINDS MATTER MORE THAN THE NAMES, BECAUSE THEY SAY HOW MUCH WORK THE DEFAULT IS DOING. In a narrative the default covers the connective tissue and the quotes carry most of the speaking. In a letter the default covers everything and there is no narrator at all - which means a reading of Romans has no second voice to fall back to, and casting has nothing to do there.";
  "★ THE LETTER TO THE HEBREWS IS ENTERED WITHOUT A NAME ON PURPOSE. Its author is not stated in it and has never been settled, so naming one here would be this table asserting something the text does not. An unnamed voice is castable exactly as well as a named one, so nothing is lost by declining to guess.";
  "★ THE SONG OF SONGS IS THE ONLY BOOK WHERE THE DEFAULT IS FALSE, AND IT IS ENTERED AS ALTERNATING SO THAT NOBODY TREATS IT AS SOLVED. Its speakers change - bride, groom, daughters of Jerusalem - with no quotation marks and no attribution anywhere in the text, and the headings printed in some editions are an editor's judgement rather than Scripture. A single default there would put the groom's lines in the bride's voice. So the entry names the difficulty instead of hiding it under a name.";
  "★ PSALMS AND PROVERBS NAME A ROLE RATHER THAN A PERSON, BECAUSE THE PERSON CHANGES AND THE TEXT SAYS SO. The psalms are David's and Asaph's and the sons of Korah's, and the superscription that says which is held as verse zero, so a reading can be more specific than this table wherever that verse is present. The role is the floor, not the ceiling.";
  "★ THE PROPHETS TAKE THE PROPHET AND NOT THE LORD, WHICH IS THE OPPOSITE OF WHAT THE CONTENT SUGGESTS. Most of Isaiah is God speaking, but it is God speaking INSIDE a quotation the prophet opens, usually after a formula the text supplies - this is what the LORD says. So the prophet is what the book falls back to and the divine speech is marked, which is the same shape as a narrative rather than an exception to it.";
  let books = [
    {
      code: "GEN",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "EXO",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "LEV",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "NUM",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "DEU",
      speaker: "Moses",
      kind: "address",
    },
    {
      code: "JOS",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "JDG",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "RUT",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "1SA",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "2SA",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "1KI",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "2KI",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "1CH",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "2CH",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "EZR",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "NEH",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "EST",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "JOB",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "PSA",
      speaker: "the psalmist",
      kind: "song",
    },
    {
      code: "PRO",
      speaker: "the teacher",
      kind: "sayings",
    },
    {
      code: "ECC",
      speaker: "the Preacher",
      kind: "sayings",
    },
    {
      code: "SNG",
      speaker: "unmarked",
      kind: "alternating",
    },
    {
      code: "ISA",
      speaker: "Isaiah",
      kind: "prophecy",
    },
    {
      code: "JER",
      speaker: "Jeremiah",
      kind: "prophecy",
    },
    {
      code: "LAM",
      speaker: "the lamenter",
      kind: "song",
    },
    {
      code: "EZK",
      speaker: "Ezekiel",
      kind: "prophecy",
    },
    {
      code: "DAN",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "HOS",
      speaker: "Hosea",
      kind: "prophecy",
    },
    {
      code: "JOL",
      speaker: "Joel",
      kind: "prophecy",
    },
    {
      code: "AMO",
      speaker: "Amos",
      kind: "prophecy",
    },
    {
      code: "OBA",
      speaker: "Obadiah",
      kind: "prophecy",
    },
    {
      code: "JON",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "MIC",
      speaker: "Micah",
      kind: "prophecy",
    },
    {
      code: "NAM",
      speaker: "Nahum",
      kind: "prophecy",
    },
    {
      code: "HAB",
      speaker: "Habakkuk",
      kind: "prophecy",
    },
    {
      code: "ZEP",
      speaker: "Zephaniah",
      kind: "prophecy",
    },
    {
      code: "HAG",
      speaker: "Haggai",
      kind: "prophecy",
    },
    {
      code: "ZEC",
      speaker: "Zechariah",
      kind: "prophecy",
    },
    {
      code: "MAL",
      speaker: "Malachi",
      kind: "prophecy",
    },
    {
      code: "MAT",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "MRK",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "LUK",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "JHN",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "ACT",
      speaker: "narrator",
      kind: "narrative",
    },
    {
      code: "ROM",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "1CO",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "2CO",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "GAL",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "EPH",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "PHP",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "COL",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "1TH",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "2TH",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "1TI",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "2TI",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "TIT",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "PHM",
      speaker: "Paul",
      kind: "letter",
    },
    {
      code: "HEB",
      speaker: "the writer to the Hebrews",
      kind: "letter",
    },
    {
      code: "JAS",
      speaker: "James",
      kind: "letter",
    },
    {
      code: "1PE",
      speaker: "Peter",
      kind: "letter",
    },
    {
      code: "2PE",
      speaker: "Peter",
      kind: "letter",
    },
    {
      code: "1JN",
      speaker: "John",
      kind: "letter",
    },
    {
      code: "2JN",
      speaker: "John",
      kind: "letter",
    },
    {
      code: "3JN",
      speaker: "John",
      kind: "letter",
    },
    {
      code: "JUD",
      speaker: "Jude",
      kind: "letter",
    },
    {
      code: "REV",
      speaker: "John",
      kind: "vision",
    },
  ];
  return books;
}
