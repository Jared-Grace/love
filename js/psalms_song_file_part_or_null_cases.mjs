import { arguments_assert } from "./arguments_assert.mjs";
export function psalms_song_file_part_or_null_cases() {
  arguments_assert(arguments, 0);
  ("Song file names taken off the download folder as they were actually written there, each with the chapter, verses and take its name says, or nothing where it names no part of a chapter.");
  ("★ EVERY NAME HERE IS ONE THAT IS ON THE DISK, EXCEPT THE FOUR THAT SAY WHAT MUST BE REFUSED. The folder is somebody's download folder and its names are written by whatever made the files, so a shape invented against imagined names would be a shape tested against nothing. The refusals are the exception because the folder cannot be relied on to hold an example of every mistake, and a reading that is too loose fails by accepting rather than by complaining.");
  let cases = [
    {
      name: "the first stanza of Psalm 119, named by its hebrew letter, which is how every stanza song in this folder is written",
      file_name: "Psalm_119_Aleph.wav",
      read: {
        chapter: 119,
        verse_first: "1",
        verse_last: "8",
        take: 0,
      },
    },
    {
      name: "a stanza well into the psalm, which is what proves the verses are counted from the letter's place rather than looked up for the first few",
      file_name: "Psalm_119_Samekh.wav",
      read: {
        chapter: 119,
        verse_first: "113",
        verse_last: "120",
        take: 0,
      },
    },
    {
      name: "the shortest letter name of them all, which must not be read as the longer name it opens",
      file_name: "Psalm_119_He.wav",
      read: {
        chapter: 119,
        verse_first: "33",
        verse_last: "40",
        take: 0,
      },
    },
    {
      name: "that longer name itself, sung again and marked by the browser, so the pair of them stand together",
      file_name: "Psalm_119_Heth (1).wav",
      read: {
        chapter: 119,
        verse_first: "57",
        verse_last: "64",
        take: 1,
      },
    },
    {
      name: "a stanza sung a third time, which is a third rendition rather than a third copy",
      file_name: "Psalm_119_Gimel (2).wav",
      read: {
        chapter: 119,
        verse_first: "17",
        verse_last: "24",
        take: 2,
      },
    },
    {
      name: "the first half of a chapter that is cut in the middle of a verse, which is the finest division any of these songs is made at",
      file_name: "Psalm 145_1_13a.mp3",
      read: {
        chapter: 145,
        verse_first: "1",
        verse_last: "13a",
        take: 0,
      },
    },
    {
      name: "the other half of that chapter, opening on the rest of the verse the first half stopped inside",
      file_name: "Psalm_145_13b-21 (2).wav",
      read: {
        chapter: 145,
        verse_first: "13b",
        verse_last: "21",
        take: 2,
      },
    },
    {
      name: "half a chapter with the verses joined by an underscore",
      file_name: "Psalms 147_12_20.mp3",
      read: {
        chapter: 147,
        verse_first: "12",
        verse_last: "20",
        take: 0,
      },
    },
    {
      name: "the same half of the same chapter joined by a dash instead, which must read identically or the two spellings would be timed as two passages",
      file_name: "Psalms_147_12-20.wav",
      read: {
        chapter: 147,
        verse_first: "12",
        verse_last: "20",
        take: 0,
      },
    },
    {
      name: "a whole chapter, which has an address of its own already and must not be read here as well",
      file_name: "Psalm_120.wav",
      read: null,
    },
    {
      name: "a whole chapter sung again, whose marker sits where a part would be written",
      file_name: "Psalm_120 (3).wav",
      read: null,
    },
    {
      name: "a finished video of a psalm rather than a singing of one, which is in the same folder and is not a song at all",
      file_name: "Psalm 148 (BSB) lyric video.mp4",
      read: null,
    },
    {
      name: "a song that names a psalm in its title without being that psalm sung",
      file_name: "Inspired by Psalm 148.mp3",
      read: null,
    },
    {
      name: "a passage of another book written as a range, which is what stops the reading being about a number after any word at all",
      file_name: "Genesis 1:1-5.wav",
      read: null,
    },
    {
      name: "a stanza name with nothing on the end to say it is a sound file, which is a folder entry rather than a song",
      file_name: "Psalm_119_Aleph",
      read: null,
    },
    {
      name: "a letter name against a chapter that is not cut into named stanzas, which is a name this does not understand rather than a stanza of that chapter",
      file_name: "Psalm_23_Aleph.wav",
      read: null,
    },
    {
      name: "a real hebrew letter spelled outside the family these songs use, refused rather than placed at somebody else's eight verses",
      file_name: "Psalm_119_Tzadi.wav",
      read: null,
    },
  ];
  return cases;
}
