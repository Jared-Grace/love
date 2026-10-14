import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
import { lyric_video_bible_document_name_read_or_null } from "./lyric_video_bible_document_name_read_or_null.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { lyric_video_passage_recording_document_path } from "./lyric_video_passage_recording_document_path.mjs";
import { path_join } from "./path_join.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function lyric_video_document_names_read_gate_run() {
  "Checks that every timing document's name can be read back into the passage it stands for, and that the address rebuilt from that reading is the address the file is actually at.";
  "★ IT IS A ROUND TRIP AND NOT A LIST OF EXPECTED ANSWERS, WHICH IS THE ONLY THING THAT MAKES READING AN ADDRESS SAFE. A reading is a second statement of the rule that spelled the name, and two statements of one rule drift - the way they drift is that somebody changes how an address is built, every document is written to the new address, and the reading goes on understanding the old one and quietly stops finding anything. Asking the builder to spell the name again from what was read catches that on the first run, because the two halves are checked against each other rather than against a copy of either.";
  "★ A NAME THAT CANNOT BE READ IS A FAILURE HERE, THOUGH THE READING ITSELF PASSES OVER ONE. The reading is used by walks that have to put up with a folder holding anything; this folder holds nothing but documents, each one named by the same function. So a name that does not read means either a document was named by hand or the naming changed, and both of those lose whatever that document holds - its paintings are dropped from a giveaway and its times are drafted afresh at an address nothing reads again. Dropping is silent, which is exactly why the count of what was dropped is asserted rather than reported.";
  "It refuses to pass without having looked at anything, because the folder is read off the disk and a gate runs against a frozen copy of the tree: a root pointing at nothing would hand back no documents and no documents cannot disagree with their own names.";
  "The names are read off the folder rather than out of the documents, because the question is entirely about names and opening five hundred files to ask it would make the gate slow for nothing.";
  let folder = data_given_lyric_videos_folder();
  let files = await folder_read_files(folder);
  let names_json = list_filter_ends_with(files, ".json");
  let any = list_empty_not_is(names_json);
  assert_json(any, {
    hint: "no timing documents were found at all, so this gate is looking at nothing",
  });
  let unread = [];
  let wrong = [];
  for (let file_name of names_json) {
    let name = text_without_ending(file_name, ".json");
    let read = lyric_video_bible_document_name_read_or_null(name);
    if (equal(read, null)) {
      list_add(unread, file_name);
      continue;
    }
    let path_rebuilt = lyric_video_passage_recording_document_path(
      read.version,
      read.book_code,
      read.chapter_number,
      read.verse_first,
      read.verse_last,
      read.mark,
    );
    let path_held = path_join([folder, file_name]);
    if (not_equal(path_rebuilt, path_held)) {
      list_add(wrong, {
        file_name,
        path_rebuilt,
        read,
      });
    }
  }
  let unread_none = list_empty_is(unread);
  assert_json(unread_none, {
    unread,
    hint: "a timing document is named in a way nothing can read back, so whatever it holds is silently dropped by every walk that reads names",
  });
  let wrong_none = list_empty_is(wrong);
  assert_json(wrong_none, {
    wrong,
    hint: "a document's name read back and spelled again is the address of a different file, so the reading and the naming have come apart",
  });
  let r = {
    documents: names_json.length,
  };
  return r;
}
