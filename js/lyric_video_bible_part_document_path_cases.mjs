import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_bible_part_document_path_cases() {
  arguments_assert(arguments, 0);
  ("Song file names taken off the download folder as they were actually written there, each with the timing document its part of a chapter belongs in, or nothing where the name is not a part of a chapter at all.");
  ("★ THE POINT OF EVERY CASE IS WHICH NAMES MUST MEET AND WHICH MUST NOT, RATHER THAN WHAT ANY ONE ADDRESS LOOKS LIKE. One singing is written three ways in this folder - a dash or an underscore between the verses, the book word singular or plural, a browser's take marker on the end - and all of them are one song. Three addresses for it would mean the second draft written over the first, and what would be lost is the one thing no command can put back: somebody's evening moving each line onto the beat it is sung on. Nothing goes red when that happens; it shows up as a video whose words drift.");
  ("★ THE OTHER HALF IS THAT TWO DIFFERENT PASSAGES MUST NOT MEET, which is why both halves of Psalm 145 are here and why the half verse keeps its letter. An address that rounded 13a to 13 would put the two halves of that psalm in one file, and the second would take the first one's times away just as surely.");
  ("Every name here is one that is on the disk, except the two that say what must be refused. The folder is somebody's download folder and its names are written by whatever made the files, so an address tried against imagined names would be an address tried against nothing. The refusals are the exception because the folder cannot be relied on to hold an example of every mistake.");
  ("The translation is written as bsb throughout because which translation it is has nothing to do with which passage it is, and one word repeated is one fewer thing for a reader to hold while comparing the addresses.");
  let cases = [
    {
      name: "a half chapter written with a dash between its verses, which is the mark the address itself uses",
      file_name: "Psalm_147_1-11.wav",
      document_path: "data/given/lyric_videos/bsb_PSA_147_1-11.json",
    },
    {
      name: "the same singing written with an underscore instead, which must reach the file the dash spelling reaches",
      file_name: "Psalm 147_1_11.mp3",
      document_path: "data/given/lyric_videos/bsb_PSA_147_1-11.json",
    },
    {
      name: "the other half of that chapter, written with the book word in the plural, which is a difference in the file name and not in the passage",
      file_name: "Psalms 147_12_20.mp3",
      document_path: "data/given/lyric_videos/bsb_PSA_147_12-20.json",
    },
    {
      name: "that same half again in the other spelling, so the plural and the dash together still land where the first one did",
      file_name: "Psalms_147_12-20.wav",
      document_path: "data/given/lyric_videos/bsb_PSA_147_12-20.json",
    },
    {
      name: "a half chapter cut inside a verse, whose letter has to survive into the address or the two halves become one file",
      file_name: "Psalm 145_1_13a.mp3",
      document_path: "data/given/lyric_videos/bsb_PSA_145_1-13a.json",
    },
    {
      name: "the other half of that same chapter, which must be a different file from the one above and not the same one",
      file_name: "Psalm 145_13b_21.mp3",
      document_path: "data/given/lyric_videos/bsb_PSA_145_13b-21.json",
    },
    {
      name: "that half sung a third time and marked by the browser, because a further rendition of a passage is the same passage",
      file_name: "Psalm_145_13b-21 (2).wav",
      document_path: "data/given/lyric_videos/bsb_PSA_145_13b-21.json",
    },
    {
      name: "the first stanza of Psalm 119, named by its hebrew letter, which has to arrive at an address written in verses",
      file_name: "Psalm_119_Aleph.wav",
      document_path: "data/given/lyric_videos/bsb_PSA_119_1-8.json",
    },
    {
      name: "a stanza well into that psalm, which is what proves the verses are counted from the letter's place rather than looked up for the first few",
      file_name: "Psalm_119_Samekh.wav",
      document_path: "data/given/lyric_videos/bsb_PSA_119_113-120.json",
    },
    {
      name: "a whole chapter, which has an address of its own and must never be given a part's",
      file_name: "Psalm_120.wav",
      document_path: null,
    },
    {
      name: "a finished video sitting in the same folder, which is a perfectly good file this question is simply not about",
      file_name: "Psalm 148 (BSB) pictured.mp4",
      document_path: null,
    },
  ];
  return cases;
}
