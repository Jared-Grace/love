import { arguments_assert } from "./arguments_assert.mjs";
import { bible_versions_english_choices_usable } from "./bible_versions_english_choices_usable.mjs";
import { app_music_songs } from "./app_music_songs.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { app_music_song_versions_faults_add } from "./app_music_song_versions_faults_add.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_music_songs_versions_gate_run() {
  "QA gate: every song on the music page names a usual translation and a short list of passages quoted from something else, and each of those names a translation we may lawfully ship, calls it what that translation calls itself, names a passage that song actually rests on, and gets words back from it there.";
  "THE NAME IS A SECOND COPY, AND THIS IS WHAT KEEPS IT HONEST. The chosen translation is written down twice on purpose - once as the folder its chapters sit in, and once as the name shown to a reader - so that labelling a verse costs the page no fetch. Two copies of one fact drift, and this one would drift silently: the page would show the King James under whatever word was typed beside it, and a wrong label on a right verse looks exactly like a right label.";
  "IT ALSO ASKS WHETHER THE TRANSLATION MAY BE QUOTED AT ALL. Choosing a wording is done by reading translations side by side, and that reading includes ones we may not ship - so the way a forbidden wording gets onto the page is somebody copying the folder name of the one that read best. There is nothing about a folder name that says which of the two it was.";
  "EACH SONG'S USUAL TRANSLATION IS CHECKED AS ITS OWN ANSWER, BECAUSE IT NOW IS ONE. There used to be a single usual bible for the whole page and one check of it here. A page-wide default is a translation neither song chose standing behind the sixteen passages both of them sing, so each song names its own - and a song that names an unshippable one, or calls it by a word it does not answer to, is wrong in exactly the way an exception would be, at every passage it did not write an exception for.";
  "WHICH TRANSLATIONS MAY BE SHIPPED IS ASKED OF BOTH SHELVES. It used to ask only eBible, which was right while that was the only shelf and became silently wrong the moment a second one was added: a wording chosen out of a comparison that offered both would be refused here as unshippable, and the refusal would blame the wording rather than the question.";
  "EACH SONG IS CHECKED AGAINST ITS OWN PASSAGES, not against everything the page names. The choices used to be one list for the page, and the same list is now one per song, because which bible a verse is quoted from is a fact about the song rather than about the verse. Checked page-wide, a choice written under the wrong song passed whenever some other song happened to sing that verse - and the song that wrote it went on being shown the wording it had rejected.";
  "A BIBLE THAT SHIPS AND ANSWERS TO ITS NAME CAN STILL HAVE NOTHING TO SAY AT THE PASSAGE. Two of the translations on offer are published a book at a time and hold fifty-six of the sixty-six, so a bible can be shippable, correctly named, and still have nothing to say at this passage. Nothing downstream raises on that: the words come back empty and the page draws that passage with none, among ninety-nine that have theirs.";
  "WHETHER THE PASSAGE IS REALLY SUNG, AND WHETHER THERE ARE WORDS THERE, ARE ASKED OF THE EXCEPTIONS AND NOT OF THE USUAL TRANSLATION. The usual one answers for every passage the song rests on, so asking it those two questions would be fetching the whole song rather than checking it - it is a whole bible on the shelf where an exception is one verse.";
  arguments_assert(arguments, 0);
  let usable = await bible_versions_english_choices_usable();
  let songs = app_music_songs();
  let wrong = [];
  function version_check(title, version) {
    let property_name = bible_folder_key();
    let bible_folder = property_get(version, property_name);
    let name = property_get(version, "name");
    let record = list_find_property_or_null(
      usable,
      property_name,
      bible_folder,
    );
    let unusable = null_is(record);
    if (unusable) {
      list_add(wrong, {
        song: title,
        bible_folder,
        name,
        fault:
          "this bible is not one of the complete English translations we may ship and earn from",
      });
      return;
    }
    let called = property_get(record, "name");
    let agrees = equal(called, name);
    if (agrees) {
      return;
    }
    list_add(wrong, {
      song: title,
      bible_folder,
      name,
      called,
      fault: "the name shown to a reader is not what this bible calls itself",
    });
  }
  let exceptions_count = 0;
  for (let song of songs) {
    let title = property_get(song, "title");
    let versions = song.versions();
    let usual = property_get(versions, "usual");
    let exceptions = property_get(versions, "exceptions");
    version_check(title, usual);
    let right = list_size(exceptions);
    exceptions_count = add(exceptions_count, right);
    for (let version of exceptions) {
      version_check(title, version);
    }
    await app_music_song_versions_faults_add(song, wrong);
  }
  let f_name = fn_name("bible_versions_english_choices_usable");
  list_empty_is_assert_json(wrong, {
    hint: text_combine_multiple([
      "each of these choices fails in the way its own fault line says - unshippable bible, a name it does not answer to, a passage its own song rests on nowhere, or a bible with no words there - and every one of them reaches a reader as an ordinary looking page; the folders and the names both come from ",
      f_name,
      ", so copy them from there rather than typing them",
    ]),
  });
  ("Says how much it looked at, because a gate that answers nothing cannot be told apart from one that did nothing.");
  let r = {
    songs: list_size(songs),
    exceptions: exceptions_count,
    wrong: 0,
  };
  return r;
}
