import { arguments_assert } from "./arguments_assert.mjs";
export function psalms_song_file_chapter_take_cases() {
  "Song file names taken off the download folder as they were actually written there, each with the chapter and take its name says, or nothing where it says neither.";
  "★ MOST OF THE CORPUS IS NAMES THAT MUST BE REFUSED, BECAUSE THE COSTLY MISTAKE IS ACCEPTING ONE. A name wrongly read as a whole chapter sends a song to the address of a document somebody has already corrected by ear, and the drafting overwrites those numbers with an even spread. Nothing goes red; the fault appears as a video whose words drift, minutes of rendering later. A name wrongly refused costs a song that never gets timed, which anyone notices at once by its absence.";
  "The refusals are near misses on purpose. A song of a stanza, a song of half a chapter, a song of another book, and a name that mentions a psalm without singing it are the four ways a name in this folder comes close, and a shape loose enough to take any of them would take all four.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      name: "a whole chapter with an underscore between the word and the number, which is how nearly every one of them is written",
      file_name: "Psalm_120.wav",
      read: {
        chapter: 120,
        take: 0,
      },
    },
    {
      name: "the same chapter sung again, marked by the browser with a number because a file of that name was already there",
      file_name: "Psalm_120 (3).wav",
      read: {
        chapter: 120,
        take: 3,
      },
    },
    {
      name: "a whole chapter written with a space and kept as the other kind of sound file, which is the same song by another route and must read the same",
      file_name: "Psalm 148.mp3",
      read: {
        chapter: 148,
        take: 0,
      },
    },
    {
      name: "one stanza of the hundred and nineteenth psalm, which has no address of its own and so must not be answered with the chapter",
      file_name: "Psalm_119_Aleph.wav",
      read: null,
    },
    {
      name: "the second half of a chapter, whose verses are written after the number and would otherwise be read as the whole of it",
      file_name: "Psalms_147_12-20.wav",
      read: null,
    },
    {
      name: "half a verse to half a verse, marked by a letter, which is the finest division any of these songs is cut to",
      file_name: "Psalm 145_1_13a.mp3",
      read: null,
    },
    {
      name: "a song that names a psalm in its title without being that psalm sung, which is the nearest miss in the folder",
      file_name: "Inspired by Psalm 148.mp3",
      read: null,
    },
    {
      name: "a chapter of another book entirely, which is what stops the reading being about a number after any word at all",
      file_name: "Genesis 1:1-5.wav",
      read: null,
    },
    {
      name: "a whole chapter with nothing on the end to say it is a sound file, which is a folder entry rather than a song",
      file_name: "Psalm_120",
      read: null,
    },
  ];
  return cases;
}
