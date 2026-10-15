import { arguments_assert } from "./arguments_assert.mjs";
export function giveaway_psalms_rows_uploaded_defects_cases() {
  arguments_assert(arguments, 0);
  ("The written cases proving that the freeze over the boxes already given away names what it has to name and stays out of the way everywhere else.");
  ("★ THE RECORD THIS GUARDS IS A CLEAN SHEET TODAY, SO WITHOUT CASES THE FREEZE HAS NO EVIDENCE OF ANY KIND. No chapter has been uploaded, so the list of uploaded chapters is empty, so every row is free and the check says nothing - which is also exactly what it would say if it had been emptied out, or if it compared the wrong field, or if it read the chapter wrongly. These cases are the only place a frozen name is ever actually seen to be held.");
  ("★ THE CASES WITH NOTHING TO REPORT CARRY AS MUCH WEIGHT AS THE ONES WITH A FAULT, BECAUSE THE DEARER MISTAKE HERE IS A FREEZE THAT REFUSES TOO MUCH. The ordinary work on this record is rewriting it: a recording is added, a wrongly-spelled passage is repaired, and the take numbers shuffle. If that were refused for the eighty-nine boxes nobody can reach, the freeze would have stopped the work it exists to make safe. So the first case shuffles names as violently as a rewriting ever could with nothing uploaded, and expects silence.");
  ("★ ONE CASE FREEZES A WHOLE CHAPTER AND MOVES A ROW NAMED BY VERSES INSIDE IT, AND THAT CASE IS THE ONLY THING STANDING BETWEEN THIS AND A FREEZE WITH A HOLE IN IT. A box is one chapter, and most of what goes in it is named for a part of that chapter - the stanzas of Psalm 119, a twelve-verse portion, every painting cropped for a part. A check that compared a row's passage code against the uploaded list as one word would pass every other case here and leave all of those files unprotected, because PSA119_001-008 is not the word PSA119. The chapter has to be read out of the passage, and this case is where that is held.");
  ("A picture is moved in another case for the same reason from the other side. The record holds songs and paintings together and the box holds them together, so a freeze that had quietly narrowed itself to the songs would leave two thousand crops free to be renamed under a public box.");
  ("The last case changes a chapter nobody has uploaded in the same breath as leaving an uploaded one alone. Without it a check that ignored the list altogether and froze everything would still pass every case above, because none of those moves a name outside the frozen chapter.");
  ("The faults are compared as one word list rather than as whole defect objects, the same way the sibling check's cases do it: what is being held is that the right fault is named, and pinning the wording would turn every improvement to it into a red gate.");
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
  function row_picture(file_name, passage_code, mark, name_published) {
    let r = {
      file_name: file_name,
      passage_code: passage_code,
      bible_folder: "engbsb",
      kind: "picture",
      mark: mark,
      ending: ".png",
      name_published: name_published,
    };
    return r;
  }
  let take00 = row_song(
    "Psalm_59.wav",
    "PSA059",
    "take00",
    "PSA059_engbsb_song_take00.wav",
  );
  let take01 = row_song(
    "Psalm_59 (1).wav",
    "PSA059",
    "take01",
    "PSA059_engbsb_song_take01.wav",
  );
  let take00_other_file = row_song(
    "Psalm_59 (1).wav",
    "PSA059",
    "take00",
    "PSA059_engbsb_song_take00.wav",
  );
  let take01_other_file = row_song(
    "Psalm_59.wav",
    "PSA059",
    "take01",
    "PSA059_engbsb_song_take01.wav",
  );
  let take02 = row_song(
    "Psalm_59 (2).wav",
    "PSA059",
    "take02",
    "PSA059_engbsb_song_take02.wav",
  );
  let free_take00 = row_song(
    "Psalm_60.wav",
    "PSA060",
    "take00",
    "PSA060_engbsb_song_take00.wav",
  );
  let free_take00_other_file = row_song(
    "Psalm_60 (1).wav",
    "PSA060",
    "take00",
    "PSA060_engbsb_song_take00.wav",
  );
  let stanza_take00 = row_song(
    "Psalm_119_Aleph.wav",
    "PSA119_001-008",
    "take00",
    "PSA119_001-008_engbsb_song_take00.wav",
  );
  let stanza_take00_other_file = row_song(
    "Psalm_119_Aleph (1).wav",
    "PSA119_001-008",
    "take00",
    "PSA119_001-008_engbsb_song_take00.wav",
  );
  let crop = row_picture(
    "pd_titiaan_heerlijkheid.png",
    "PSA059",
    "titiaan_heerlijkheid",
    "PSA059_engbsb_picture_titiaan_heerlijkheid.png",
  );
  let crop_other_file = row_picture(
    "pd_bellini_gebed_in_de_hof_van_olijven.png",
    "PSA059",
    "titiaan_heerlijkheid",
    "PSA059_engbsb_picture_titiaan_heerlijkheid.png",
  );
  let cases = [
    {
      rows_before: [take00, take01],
      rows_after: [take00_other_file, take01_other_file],
      chapters_uploaded: [],
      faults: "",
      why: "Two recordings of Psalm 59 trading take numbers with nothing uploaded - the most violent thing an ordinary rewriting can do, and nothing to be said about it. This is the state of the whole record today, and the case that keeps the freeze from standing in the way of the work it exists to protect.",
    },
    {
      rows_before: [take00, take01],
      rows_after: [take00, take01],
      chapters_uploaded: ["PSA059"],
      faults: "",
      why: "A public box rewritten to say exactly what it said before. The ordinary refresh, after the first upload, has to come back silent or nobody will ever be able to add a recording again.",
    },
    {
      rows_before: [take00, take01],
      rows_after: [take00_other_file, take01_other_file],
      chapters_uploaded: ["PSA059"],
      faults: "name_moved,name_moved",
      why: "The harm this exists to stop. A new recording landing ahead of an old one in the folder walk renames every take after it, so two addresses that are already public, already derived from, and already bookmarked now point at different singing - and archive.org will never let either name be changed back.",
    },
    {
      rows_before: [take00, take01],
      rows_after: [take00],
      chapters_uploaded: ["PSA059"],
      faults: "name_gone",
      why: "A published name that the rewriting no longer accounts for at all. The recording behind it was deleted, or the folder holding it was not mounted, and either way a file the public can already download has stopped being recorded - which is the fault that would otherwise be absolutely silent.",
    },
    {
      rows_before: [take00, take01],
      rows_after: [take00, take01, take02],
      chapters_uploaded: ["PSA059"],
      faults: "",
      why: "A third singing added to a box that is already public, with the two already there untouched. This is allowed on purpose: adding a file to a box changes nothing anybody already has, and a freeze that refused it would mean a psalm could never be sung again once it had been given away.",
    },
    {
      rows_before: [stanza_take00],
      rows_after: [stanza_take00_other_file],
      chapters_uploaded: ["PSA119"],
      faults: "name_moved",
      why: "A stanza of Psalm 119 moved inside a public Psalm 119 box. The box is the chapter, so freezing the chapter has to freeze everything in it, and the passage here is PSA119_001-008 - a check comparing that word against the uploaded list would find no match and wave it through. Fifty-two rows of the real record are stanzas and every painting cropped for a part is named this way, so this one case is what stands between the freeze and a hole most of the box's contents would fall through.",
    },
    {
      rows_before: [crop],
      rows_after: [crop_other_file],
      chapters_uploaded: ["PSA059"],
      faults: "name_moved",
      why: "A painting's address in a public box now pointing at a different painting. The record holds the songs and the crops together and so does the box, so a freeze narrowed to the recordings would leave two thousand pictures free to be renamed under a box the public can already read.",
    },
    {
      rows_before: [take00, free_take00],
      rows_after: [take00, free_take00_other_file],
      chapters_uploaded: ["PSA059"],
      faults: "",
      why: "Psalm 60 moved while Psalm 59 stood still, with only Psalm 59 uploaded. This is the case that holds the list to doing something: a check that ignored it and froze the whole record would pass every case above this one and fail only here.",
    },
  ];
  return cases;
}
