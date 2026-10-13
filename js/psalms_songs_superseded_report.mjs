import { arguments_assert } from "./arguments_assert.mjs";
import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
import { audio_left_channel_difference_db } from "./audio_left_channel_difference_db.mjs";
import { divide } from "./divide.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { audio_paths_durations } from "./audio_paths_durations.mjs";
import { ardour_sessions_imports } from "./ardour_sessions_imports.mjs";
import { file_size } from "./file_size.mjs";
import { equal } from "./equal.mjs";
import { ardour_sessions_exports } from "./ardour_sessions_exports.mjs";
import { files_same_bytes_is } from "./files_same_bytes_is.mjs";
import { durations_near_each } from "./durations_near_each.mjs";
import { psalms_songs_superseded_settled } from "./psalms_songs_superseded_settled.mjs";
import { less_than } from "./less_than.mjs";
import { path_base } from "./path_base.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
export async function psalms_songs_superseded_report() {
  arguments_assert(arguments, 0);
  ("Which downloaded recordings an editing session has already replaced - measured from the sound itself, and answering the ones still being given away as if they were the only take.");
  ("★ IT TAKES NOTHING, BECAUSE THE QUESTION HAS NO ARGUMENTS. Asked by hand, this was a folder listing, a table of lengths on each side, a join, and then one comparison per surviving pair, every time with the two controls re-run - which is a session's work and was done twice before anybody thought to write it down. Finding its own list also means it cannot drift from what is actually on the disk: a recording that arrived this morning is in the answer without anybody adding it to a list.");
  ("★ THE TWO CONTROLS ARE RUN EVERY TIME AND THEY ARE THE WHOLE SCALE. A residue of minus forty-eight decibels means nothing on its own. So one pair known to be the same singing and one pair known to be two different singings go through the very same comparison on every run, and the line between them is the midpoint of what they answered - never a number written down here. Pinning a threshold instead would be the one mistake that makes this look like it works forever: the first attempt at this comparison was wrong by twenty-six decibels and separated the two controls by only ten, which a fixed threshold would have hidden.");
  ("★ A LENGTH THAT AGREES IS NEVER THE ANSWER, ONLY THE SHORTLIST. Over the real folder two recordings of different psalms agreed to within a thousandth of a second, and the session's own notes name the file it imported, which points into a folder where a freed name gets taken by a later download. Both of those cheap joins over-report. The sound is what decides, so every pair the lengths put forward is then compared properly.");
  ("★ WHAT IT WILL NOT DECIDE: WHICH OF THE TWO THE PERSON WANTS. A session proves an edit of that singing was made; it does not prove the edit was kept. Twice the person kept the raw and set the edit aside instead, and nothing measurable says so - so those sessions are listed as settled, by name, and this subtracts them. A session nobody has settled, whose source is still being given away, and whose edit has reached the folder the giveaway reads, comes back as wanted - which is a question rather than an instruction.");
  ("★ A RAW IS ONLY NAMED FOR MARKING IF THE EDIT THAT REPLACED IT HAS ACTUALLY BEEN HANDED OVER. This is the condition the first version of this left out, and leaving it out was not a near miss: the three recordings it named were the three whose edit never reached the folder the giveaway is built from, so following it would have taken away the only recording of those three psalms anybody can be given. Proved an edit exists, proved the raw was its source, and then quietly assumed the edit was available - which it was not. So what a session wrote out is compared, byte for byte, against the folder the giveaway reads; a session with nothing written out, or whose written-out copy never travelled, keeps its raw and comes back under the edits that are missing instead.");
  ("★ THE HANDING OVER IS PROVED BY BYTES AND NOT BY ANY OF THE CHEAPER TESTS. Within one folder a copy really is a copy, so this one crossing admits the test that cannot disagree with itself - and it is cheap, because lengths are asked first and almost never agree. Note the direction of the only mistake it can still make: a session that was written out again after its copy travelled reads as never handed over, which keeps a raw that could have been marked. That is the harmless way round, and it is the way round to keep.");
  ("The slack on the lengths is a twentieth of a second, which is wide. Narrow would halve the expensive comparisons and would also be a guess about how far a resampling moves a length; wide costs a handful of extra comparisons and cannot hide a pair.");
  ("A control file that has been renamed makes the comparison fail loudly rather than quietly scoring everything against nothing, which is the right failure: the scale is gone, so no answer here is readable.");
  let home = folder_home();
  let folder_audio = path_join([home, "Downloads"]);
  let folder_ardour = path_join([home, "ardour"]);
  let path_control_import = path_join([
    folder_ardour,
    "92_1_8/interchange/92_1_8/audiofiles/Psalm_92_1-8%L.wav",
  ]);
  let path_control_same = path_join([
    folder_audio,
    "superceded_Psalm_92_1-8.wav",
  ]);
  let path_control_different = path_join([folder_audio, "Psalm_92_1-8.wav"]);
  let db_same = await audio_left_channel_difference_db(
    path_control_same,
    path_control_import,
  );
  let db_different = await audio_left_channel_difference_db(
    path_control_different,
    path_control_import,
  );
  let db_middle = divide(db_same + db_different, 2);
  let file_names = await folder_read_files(folder_audio);
  let paths_audio = [];
  for (let file_name of file_names) {
    let sound_is = text_ends_with(file_name, ".wav");
    if (not(sound_is)) {
      continue;
    }
    let item = path_join([folder_audio, file_name]);
    list_add(paths_audio, item);
  }
  let rows_audio = await audio_paths_durations(paths_audio);
  let imports = await ardour_sessions_imports(folder_ardour);
  let paths_import = [];
  let sessions_by_path = {};
  for (let one of imports) {
    list_add(paths_import, one.path_audio);
    sessions_by_path[one.path_audio] = one.session;
  }
  let paths_by_size = {};
  for (let path_audio of paths_audio) {
    let size = await file_size(path_audio);
    let held = paths_by_size[size];
    let first_is = equal(held, undefined);
    if (first_is) {
      held = [];
      paths_by_size[size] = held;
    }
    list_add(held, path_audio);
  }
  let exports_written = await ardour_sessions_exports(folder_ardour);
  let sessions_handed = {};
  for (let one of exports_written) {
    let size = await file_size(one.path_audio);
    let candidates = paths_by_size[size];
    let none_is = equal(candidates, undefined);
    if (none_is) {
      continue;
    }
    for (let path_audio of candidates) {
      let copy_is = await files_same_bytes_is(one.path_audio, path_audio);
      if (copy_is) {
        sessions_handed[one.session] = true;
      }
    }
  }
  let rows_import = await audio_paths_durations(paths_import);
  let shortlists = durations_near_each(rows_import, rows_audio, 0.05);
  let settled = psalms_songs_superseded_settled();
  let sames = [];
  let sources_absent = [];
  let mark_wanted = [];
  let edits_absent = [];
  for (let shortlist of shortlists) {
    let session = sessions_by_path[shortlist.row.path_audio];
    let none_is = equal(shortlist.near.length, 0);
    if (none_is) {
      list_add(sources_absent, session);
      continue;
    }
    for (let candidate of shortlist.near) {
      let db = await audio_left_channel_difference_db(
        candidate.path_audio,
        shortlist.row.path_audio,
      );
      let same_is = less_than(db, db_middle);
      if (not(same_is)) {
        continue;
      }
      let file_name = path_base(candidate.path_audio);
      let read = psalms_song_file_read_or_null(file_name);
      let b = equal(read, null);
      let given = not(b);
      let settled_is = list_includes(settled, session);
      let handed_is = equal(sessions_handed[session], true);
      let row = {
        session,
        file_name,
        db,
        given,
        settled: settled_is,
        handed: handed_is,
      };
      list_add(sames, row);
      let open_is = given && not(settled_is);
      let wanted_is = open_is && handed_is;
      if (wanted_is) {
        list_add(mark_wanted, file_name);
      }
      let stranded_is = open_is && not(handed_is);
      if (stranded_is) {
        list_add(edits_absent, {
          session,
          file_name,
        });
      }
    }
  }
  let report = {
    db_same,
    db_different,
    db_middle,
    mark_wanted,
    edits_absent,
    sources_absent,
    sames,
  };
  return report;
}
