import { arguments_assert } from "./arguments_assert.mjs";
export function giveaway_psalms_record_documents_defects_cases() {
  arguments_assert(arguments, 0);
  ("The written cases proving that a picture row the timing documents no longer choose is a fault, that a picture the documents do choose and the record leaves out is another, that one published name over two different files is a third, and that a recording is none of them.");
  ("★ THE TWO DIRECTIONS ARE WRITTEN AS SEPARATE CASES BECAUSE A CHECK THAT ASKED ONLY ONE OF THEM WOULD PASS BOTH OF THE REAL FAULTS BY HALF. On the real record a Bol crop sits in the record that no document names, and a Ribera crop is named by the documents and missing from the record - the same recutting of one line of Psalm 103, seen from each side. A check looking only at what the record points at finds the Bol and never learns the Ribera exists; a check looking only at what the documents choose finds the Ribera and leaves the dead row in the record. Each case fails on its own, so neither direction can quietly stop working.");
  ("★ THE RECORDING HAS TO COME BACK CLEAN AND IT IS THE CASE A REWRITE WOULD GET WRONG. The timing documents choose pictures and nothing else, so every one of the five hundred and eleven recordings in the record is a row no document will ever name. A check that forgot to ask which kind of row it had would call all of them undocumented, and the answer would be five hundred faults none of which were faults, hiding the handful that were. The words of a psalm are the same case from further off: they are written as a box is built and no document mentions them either.");
  ("★ THE MOVED PATH IS THE ONE FAULT THE REAL RECORD HAS NONE OF, SO THIS IS THE ONLY PLACE IT IS EVER SEEN FIRING. A published name is an address somebody bookmarked, and the fault here is that name coming to stand over a different file - which is not a thing that can be shown by deleting anything or waiting for it to happen, because the day it happens is the day it is already too late. It is written down instead.");
  ("The rows on both sides are spelled out rather than read off the record and the documents, so that a case says the same thing next year, and so that each fault can be shown firing without a crop having to be recut to show it.");
  function row(kind, file_name, name_published, path_in_repo) {
    let r = {
      kind: kind,
      file_name: file_name,
      name_published: name_published,
      path_in_repo: path_in_repo,
    };
    return r;
  }
  let path_bol =
    "gitignore/lyric_video_pictures/bsb_PSA_103_1-11/pd_bol_mozes.png";
  let path_ribera =
    "gitignore/lyric_video_pictures/bsb_PSA_103_1-11/pd_ribera_mozes.png";
  let path_lof =
    "gitignore/lyric_video_pictures/bsb_PSA_147/pd_titiaan_lof.png";
  let name_mozes = "PSA103_001-011_engbsb_picture_mozes.png";
  let agreed = row(
    "picture",
    "pd_titiaan_lof.png",
    "PSA147_engbsb_picture_titiaan_lof.png",
    path_lof,
  );
  let bol = row(
    "picture",
    "pd_bol_mozes.png",
    "PSA103_001-011_engbsb_picture_bol_mozes.png",
    path_bol,
  );
  let ribera = row(
    "picture",
    "pd_ribera_mozes.png",
    "PSA103_001-011_engbsb_picture_ribera_mozes.png",
    path_ribera,
  );
  let named_bol = row("picture", "pd_bol_mozes.png", name_mozes, path_bol);
  let named_ribera = row(
    "picture",
    "pd_ribera_mozes.png",
    name_mozes,
    path_ribera,
  );
  let sung = row(
    "song",
    "Psalm 147.wav",
    "PSA147_engbsb_song_take00.wav",
    undefined,
  );
  let words = row(
    "text",
    "PSA147_engbsb_text_words.txt",
    "PSA147_engbsb_text_words.txt",
    undefined,
  );
  let cases = [
    {
      rows: [agreed],
      rows_documented: [agreed],
      faults: "",
      why: "A picture the record holds and the documents choose, under one name and one path. The two agree, so there is nothing to report.",
    },
    {
      rows: [bol],
      rows_documented: [],
      faults: "picture_row_undocumented",
      why: "A picture row the timing documents no longer choose, which is what a recut line leaves behind. The row is still spelled correctly and its file may still be on the disk, so no check about the disk would ever mention it - and it would be offered to the public as part of a psalm that no longer uses it.",
    },
    {
      rows: [],
      rows_documented: [ribera],
      faults: "picture_row_unrecorded",
      why: "A picture the documents choose that the record leaves out, which is the other half of the same recutting. This is the silent one: nothing is broken and nothing is missing, the giveaway is simply short of a crop that was chosen, and nothing that checks what the record points at could notice a thing the record never mentioned.",
    },
    {
      rows: [named_bol],
      rows_documented: [named_ribera],
      faults: "picture_row_path_differs",
      why: "One published name standing over two different files. There is none of this on the real record, and it is the fault that cannot be taken back once it has been uploaded: the name is the address and the only words a music player shows, so it must never come to point at a different picture quietly.",
    },
    {
      rows: [sung, words],
      rows_documented: [],
      faults: "",
      why: "A recording and the words of a psalm, with the documents choosing nothing. Both have to come back clean: the documents choose pictures only, so every recording in the record is a row no document will ever name, and asked this question carelessly all five hundred and eleven would be called undocumented at once.",
    },
    {
      rows: [agreed, bol, sung],
      rows_documented: [agreed, ribera],
      faults: "picture_row_undocumented,picture_row_unrecorded",
      why: "Both sides handed in together as a real pair of lists would be. The faults come out in the order the two walks run - everything the record holds first, then everything the documents choose - and the agreeing picture and the recording are both silent.",
    },
  ];
  return cases;
}
