import { arguments_assert } from "./arguments_assert.mjs";
export function bible_usfm_verse_end_read_cases() {
  arguments_assert(arguments, 0);
  ("Ends of passages written the way people write them, each with the verse and the piece of it that reading it has to come to.");
  ("★ THE ENDS ARE THE ONES THE SUNG RECORDINGS ARE ACTUALLY NAMED BY, so what is pinned here is the reading of names that already exist rather than a shape somebody imagined. The halves of Psalm 145 are the whole reason a piece exists at all, and the plain numbers are every other passage in the folder.");
  ("A piece is naught for a bare number and one for the letter a, and those are pinned as separate cases because they are separate requests. They fall on the same first line of a verse the printing never divided, so a reading that muddled them would look right on every passage in the folder and would stop refusing the one thing this refuses.");
  ("The refusals are the ordinary contents of a download folder reaching this by way of a file name - a word, an empty end, a letter with no verse, a verse written with a space in it, a range written into one end. None of them is a fault; each of them is a name that was never an end of a passage.");
  let cases = [
    {
      end: "1",
      read: {
        number: 1,
        piece: 0,
      },
      described: "a first verse",
    },
    {
      end: "8",
      read: {
        number: 8,
        piece: 0,
      },
      described: "a stanza's last verse",
    },
    {
      end: "176",
      read: {
        number: 176,
        piece: 0,
      },
      described: "the longest psalm's last verse",
    },
    {
      end: "13a",
      read: {
        number: 13,
        piece: 1,
      },
      described: "the first half of Psalm 145 verse 13",
    },
    {
      end: "13b",
      read: {
        number: 13,
        piece: 2,
      },
      described: "the second half of Psalm 145 verse 13",
    },
    {
      end: "1a",
      read: {
        number: 1,
        piece: 1,
      },
      described: "a first piece asked for by its letter",
    },
    {
      end: "9h",
      read: {
        number: 9,
        piece: 8,
      },
      described: "the last piece letter that is known",
    },
    {
      end: "9i",
      read: null,
      described: "a piece letter past the ones that are known",
    },
    {
      end: "13A",
      read: null,
      described: "a capital letter, which no printing writes",
    },
    {
      end: "",
      read: null,
      described: "nothing at all",
    },
    {
      end: "a",
      read: null,
      described: "a letter with no verse in front of it",
    },
    {
      end: "Aleph",
      read: null,
      described: "a stanza's name rather than a verse",
    },
    {
      end: "1 3",
      read: null,
      described: "a number written with a space in it",
    },
    {
      end: "13-14",
      read: null,
      described: "a whole range written into one end",
    },
    {
      end: "13ab",
      read: null,
      described: "two piece letters at once",
    },
  ];
  return cases;
}
