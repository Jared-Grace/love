import { arguments_assert } from "./arguments_assert.mjs";
export function giveaway_psalms_songs_rows_defects_cases() {
  arguments_assert(arguments, 0);
  ("The written cases proving that every fault the giveaway record check can name is a fault it does name.");
  ("★ A CHECK WHOSE WRONG ANSWER NOBODY HAS EVER SEEN READS AS WORKING WHETHER IT WORKS OR NOT. The record it guards is clean, and a clean record exercises none of the four branches that catch something - so running the check against the real record proves only that it says nothing, which is also what a broken check says. Each case here is a row built wrong on purpose, and the case holding a correct row is here for the same reason from the other side: a check that answered with a fault for everything would pass all four of the others.");
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
    "Psalm_148.wav",
    "PSA150",
    "take00",
    "PSA150_engbsb_song_take00.wav",
  );
  let file_twice = row_song(
    "Psalm 150.wav",
    "PSA147",
    "take00",
    "PSA147_engbsb_song_take00.wav",
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
  ];
  return cases;
}
