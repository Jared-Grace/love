import { arguments_assert } from "./arguments_assert.mjs";
export function giveaway_psalms_songs_rows_defects_cases() {
  arguments_assert(arguments, 0);
  ("The written cases proving that every fault the giveaway record check can name is a fault it does name.");
  ("★ A CHECK WHOSE WRONG ANSWER NOBODY HAS EVER SEEN READS AS WORKING WHETHER IT WORKS OR NOT. The record it guards is clean, and a clean record exercises none of the branches that catch something - so running the check against the real record proves only that it says nothing, which is also what a broken check says. Each case here is a row built wrong on purpose, and the cases holding a correct row are here for the same reason from the other side: a check that answered with a fault for everything would pass every one of the others.");
  ("★ A CASE IS BUILT SO THAT ONLY THE ONE FAULT IT IS FOR CAN FIRE, AND THE TWO REPEAT CASES HAD TO BE REBUILT TO KEEP THAT TRUE. They were first written with a passage code that did not match their own disk name, which was invisible while the only questions asked were about the record agreeing with itself. The moment the passage was put to the disk name as well, both of them named two faults, and a case naming two faults cannot say which branch it is holding. The repeated name is now made the way it really happened - Psalm 150.wav and Psalm_150.wav are one space apart and both read as the same chapter and the same take - so the rows are each correct on their own and collide only with one another.");
  ("The faults are compared as one word list rather than as whole defect objects. What is being held is that the right fault is named for the right row; the exact wording of a defect is for somebody reading a failure, and pinning it here would turn every improvement to that wording into a red gate.");
  ("The rows are spelled out rather than read off the real record. A case that read the record would change its own meaning every time a song was added, and the whole point of a case is that it says the same thing next year.");
  function row_song(file_name, passage_code, mark, name_published) {
    let r = {
      file_name: file_name,
      passage_code: passage_code,
      bible_folder: "engbsb",
      kind: "song",
      mark: mark,
      ending: ".wav",
      name_published: name_published,
    };
    return r;
  }
  let good = row_song(
    "Psalm 150.wav",
    "PSA150",
    "take00",
    "PSA150_engbsb_song_take00.wav",
  );
  let named_twice = row_song(
    "Psalm_150.wav",
    "PSA150",
    "take00",
    "PSA150_engbsb_song_take00.wav",
  );
  let file_twice = row_song(
    "Psalm 150.wav",
    "PSA150",
    "take01",
    "PSA150_engbsb_song_take01.wav",
  );
  let name_typed = row_song(
    "Psalm_149.wav",
    "PSA149",
    "take00",
    "PSA149_engbsb_song_take00_by_hand.wav",
  );
  let pieces_gone = {
    file_name: "Psalm_150.wav",
    name_published: "PSA150_engbsb_song_take01.wav",
  };
  let part_as_whole = row_song(
    "Psalm_88_6-12.wav",
    "PSA088",
    "take00",
    "PSA088_engbsb_song_take00.wav",
  );
  let titled = row_song(
    "Search_Me,_O_God.wav",
    "PSA139",
    "take00",
    "PSA139_engbsb_song_take00.wav",
  );
  let stanza = row_song(
    "Psalm_119_Aleph.wav",
    "PSA119_001-008",
    "take00",
    "PSA119_001-008_engbsb_song_take00.wav",
  );
  let cases = [
    {
      rows: [good],
      faults: "",
      why: "A row whose pieces spell its own name exactly is what every row of the real record looks like, and nothing is to be said about it.",
    },
    {
      rows: [pieces_gone],
      faults: "pieces_missing",
      why: "A record written before the pieces were kept beside the name. It has to be reported as a row, because the first version of the check threw out of an assert four functions down instead and named a check rather than a row.",
    },
    {
      rows: [name_typed],
      faults: "name_rebuilt_differs",
      why: "A name that no longer follows from its own pieces - what a hand edit of the record, or a change to the naming rule after the record was frozen, would leave behind.",
    },
    {
      rows: [good, named_twice],
      faults: "name_repeated",
      why: "Two different recordings landing on one given-away name. This is the fault that actually happened: Psalm 150.wav and Psalm_150.wav are one space apart and both read as take nought, and an upload does not refuse a repeated name - it replaces the file and leaves the record looking complete.",
    },
    {
      rows: [good, file_twice],
      faults: "file_repeated",
      why: "One recording on disk claimed by two rows, which would send the same singing up twice under two names and tell a listener there are two songs where there is one.",
    },
    {
      rows: [part_as_whole],
      faults: "passage_code_differs",
      why: "A recording of six verses filed under its whole chapter. Everything inside the record agrees with itself here - the name follows exactly from the passage stored beside it - and only the name on disk says the passage is wrong, which is why a check that read nothing but the record could never find this.",
    },
    {
      rows: [titled],
      faults: "file_name_unread",
      why: "A recording whose name is a song title rather than a passage. Six of these are on the disk, titled in the music tool after the fact, and a row built for one carries a passage that nothing on disk supports - so a passage is reported as unsupported rather than quietly taken on trust.",
    },
    {
      rows: [stanza],
      faults: "",
      why: "A stanza of Psalm 119, named by its Hebrew letter rather than by verses. This is the third shape of name and the one that most needs holding: fifty-two rows of the record are stanzas, their verse numbers appear nowhere in their own file names, and a reader that stopped accepting a letter would call every one of them unreadable.",
    },
  ];
  return cases;
}
