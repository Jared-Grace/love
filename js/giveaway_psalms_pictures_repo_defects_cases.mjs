import { arguments_assert } from "./arguments_assert.mjs";
export function giveaway_psalms_pictures_repo_defects_cases() {
  arguments_assert(arguments, 0);
  ("The written cases proving that a picture row whose file this repo no longer holds is a fault the check names, that a row which never said where its file was is another, and that a recording is neither.");
  ("★ THESE FIRE ON THE REAL RECORD TODAY - SEVEN OF THEM - AND THAT IS EXACTLY WHY THEY ARE WRITTEN DOWN AS WELL. Six are a whole-chapter document for Psalm 94 that two part-documents have replaced, and one is a crop for Psalm 149:1-5 that has not been made; all seven are things somebody is expected to repair. The day they are repaired the real record goes quiet, and from then on a check that had stopped working would look exactly like a shelf with nothing wrong with it. A fault that is visible today is not a fault that stays visible.");
  ("★ THE ROW WITH NO PATH CANNOT BE REACHED FROM THE REAL RECORD AT ALL, SO THIS IS ITS ONLY HOME. Every picture row is written by one walk that takes the path straight out of the timing document that named the file, so a pathless picture row cannot be produced by anything in this repo - it would have to come from a hand edit or a merge of two peers' records. It still has to be watched, because a crop's name says which painting it is and never which of nearly four hundred folders it sits in: with no path there is nothing to look up, and a check that passed over such a row would report no fault for the one row it could not check.");
  ("★ THE RECORDING HAS TO COME BACK CLEAN, AND IT IS THE CASE A REWRITE WOULD GET WRONG. A wav is not in this repo and never was, so a check that forgot to ask which kind of row it had would call all five hundred and eleven recordings absent - and this report is the one asked immediately before an upload, so its answer would be five hundred faults none of which were faults, hiding the seven that were. The words of a psalm are the same case again from further off: they have no file on this disk at any moment, since they are written as a box is built.");
  ("The rows are spelled out rather than read off the record, so that a case says the same thing next year and so that a fault can be shown firing without a file having to be deleted to show it.");
  function row(kind, file_name, name_published, path_in_repo) {
    let r = {
      kind: kind,
      file_name: file_name,
      name_published: name_published,
      path_in_repo: path_in_repo,
    };
    return r;
  }
  let here = "gitignore/lyric_video_pictures/bsb_PSA_147/pd_titiaan_lof.png";
  let gone = "gitignore/lyric_video_pictures/bsb_PSA_94/pd_bosch_dwazen.png";
  let held = row(
    "picture",
    "pd_titiaan_lof.png",
    "PSA147_engbsb_picture_titiaan_lof.png",
    here,
  );
  let absent = row(
    "picture",
    "pd_bosch_dwazen.png",
    "PSA094_engbsb_picture_bosch_dwazen.png",
    gone,
  );
  let pathless = row(
    "picture",
    "pd_bosch_dwazen.png",
    "PSA094_engbsb_picture_bosch_dwazen.png",
    "",
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
  let present = [here];
  let cases = [
    {
      rows: [held],
      paths_present: present,
      faults: "",
      why: "A picture row whose file this repo still holds. The path the row carries is the path that was opened, so there is nothing to report.",
    },
    {
      rows: [absent],
      paths_present: present,
      faults: "picture_file_absent",
      why: "A picture row whose file has gone. This is the whole reason the check exists: the published name is still spelled correctly and the record is still complete, so the only way to find out is to open the file - and after an upload the name is an address forever with nothing behind it.",
    },
    {
      rows: [pathless],
      paths_present: present,
      faults: "picture_path_unwritten",
      why: "A picture row that never said where its file was. Nothing in this repo can write one, so a hand edit or a merge is the only way it arrives - and passed over rather than reported it would make the check pass by having nothing to look up.",
    },
    {
      rows: [sung, words],
      paths_present: present,
      faults: "",
      why: "A recording and the words of a psalm, neither of which has a file in this repo at any time. They have to come back clean: asked this question they would both be called absent for being exactly what they are, and five hundred false faults would hide the real ones in a report read immediately before an upload.",
    },
    {
      rows: [held, absent, pathless, sung],
      paths_present: present,
      faults: "picture_file_absent,picture_path_unwritten",
      why: "All four kinds of row handed in together, in the order the record would hold them. The two faults come out in the order the rows were read and the two clean rows are silent, which is what a report of a real shelf looks like.",
    },
  ];
  return cases;
}
