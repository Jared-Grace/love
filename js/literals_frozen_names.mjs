import { fn_name } from "./fn_name.mjs";
export function literals_frozen_names() {
  "The named constants whose value is recorded somewhere this repo cannot reach - a key in somebody's browser storage or a word in a bookmarked address - so the value may never be changed in place.";
  "Merging two spellings that turn out to mean different things is cheap to undo everywhere else: rename the function if it helps, write a second one holding the new value, and move the sites over one at a time. Nothing already written moves, because the old function keeps its old value.";
  "That repair does not reach a value already sitting on somebody else's disk. Editing one of these in place changes what every future read looks for while every past write stays as it was, and no later split can go back and fix the data.";
  "So these are frozen rather than judged. Listing a name here is a claim that the value has escaped, and the generated record beside it is what makes an in-place edit show up as a changed file rather than as nothing at all.";
  let spelled = fn_name("app_a_app_selected_key");
  let spelled2 = fn_name("app_a_function_name_selected_key");
  let spelled4 = fn_name("browser_files_path_key");
  let spelled5 = fn_name("app_search_query_hash_key");
  let spelled6 = fn_name("app_shared_bible_mode_hash_key");
  let spelled7 = fn_name("browser_files_store");
  let spelled8 = fn_name("browser_files_database_name");
  let spelled9 = fn_name("download_cache_database_name");
  let spelled10 = fn_name("download_cache_store");
  ("The last of these is a field name rather than a key of its own, and it is here for a reason worth reading before adding another of that kind. The game is saved by copying the whole game object and writing it to json with two fields taken out, so the saving never chose a schema and every field name anywhere under it escaped the moment the first game was saved. A field named in a blanket dump is therefore as published as a storage key, and there is no list to read it off - the set is every name in the object graph.");
  let spelled11 = fn_name("app_g_conversation_key");
  ("A reader who kept bibles for reading with no internet is holding a database under this name, with one store inside it under that one - the same escape as the reader's files and the download cache beside them, which were already here. These two were not, so until now the one edit this list exists to catch could have been made to them quietly.");
  let spelled12 = fn_name("ebible_offline_database_name");
  let spelled13 = fn_name("ebible_offline_store");
  ("Every word a link carries is published the moment somebody saves or sends that link, and until now only two of them were named here while the rest were spelled out at the sites that read and wrote them. The five below are the words a bible link and a supper link stand on - which chapter, which verse, which language, which passage, which versions. Rewording one of them reads as a tidy-up and breaks every link anybody kept.");
  ("They are short because a link is read by people, and that shortness is the whole danger: a word of one letter looks like nothing to lose, so it is the one most likely to be typed over.");
  let spelled14 = fn_name("app_shared_bible_chapter_hash_key");
  let spelled15 = fn_name("app_shared_bible_verse_hash_key");
  let spelled16 = fn_name("app_shared_bible_language_hash_key");
  let spelled17 = fn_name("app_supper_passage_hash_key");
  let spelled18 = fn_name("app_supper_folders_hash_key");
  ("Two more of the same kind, found only by reading every place a hash is written rather than every place one of the known words appears. A bible link can also carry a book on its own, and a reference written out the way a person would say it, and both open a page that nothing else opens.");
  let spelled19 = fn_name("app_shared_bible_book_hash_key");
  let spelled20 = fn_name("app_shared_bible_reference_hash_key");
  ("Three the readings could not have found, because the code app builds its link as text rather than as an object - the words joined with an equals sign and an ampersand by hand, and taken apart the same way on the way back in. Nothing about that shape says an address is being made until the last line, so a reading keyed on where a field is named walks straight past it. These were found by asking who else writes an address at all.");
  let spelled21 = fn_name("app_code_lesson_hash_key");
  let spelled22 = fn_name("app_code_screen_hash_key");
  let spelled23 = fn_name("app_code_quiz_hash_key");
  ("Two of a kind this list had no example of. Every other address word here sits after the hash, and the readings that find them all look there; this one sits after the question mark, which nothing in the repo reads for words at all. A verify link is sent with a chapter in it the same way a bible link is, and it breaks the same way if the word is retyped.");
  ("Beside it is the first frozen key that nothing in this repo ever writes. It is set by hand in a browser to hold a page on one chapter, so the value lives only on that disk - which is exactly the condition this list is about, and is easier to miss than a key with a writer, because searching for what saves it finds nothing.");
  let spelled24 = fn_name("g_verify_chapter_query_key");
  let spelled25 = fn_name("g_verify_chapter_storage_key");
  ("Three field names of the bible itself, and the first entries here that were never a key of anything. Each chapter this repo has written to storage is a record of verses keyed by their number, and each language in the shipped list keeps its code and the folder its chapters sit under - so all three are already spelled inside files sitting in storage and inside every package a reader downloaded for reading with no internet. A reader who downloaded a bible last year is holding those words on their own disk, and nothing here can reach in and retype them.");
  ("They were spelled out by hand in sixty files until they were named, which is why they were invisible to this list: a value with no function holding it has nothing to freeze.");
  let spelled26 = fn_name("verse_number_key");
  let spelled27 = fn_name("language_code_key");
  let spelled28 = fn_name("bible_folder_key");
  ("The first entry here that never touched a browser, and it belongs for the same reason as the rest: the word a hand-made commit is messaged with is written into the public log, and a log cannot be retyped. Every reading of how much of this repo was built by named commands rather than by hand asks the log for exactly this word, so changing it in place would leave four readers looking for the new word while every commit already made carries the old one - and the answer would come back saying the vocabulary was used all along.");
  ("It was spelled out in six files until it was named, two writing it and four reading it, which is why nothing could watch it: a value with no function holding it has nothing to freeze.");
  let spelled29 = fn_name("git_message_hand_made");
  let names = [
    spelled,
    spelled2,
    spelled4,
    spelled5,
    spelled6,
    spelled7,
    spelled8,
    spelled9,
    spelled10,
    spelled11,
    spelled12,
    spelled13,
    spelled14,
    spelled15,
    spelled16,
    spelled17,
    spelled18,
    spelled19,
    spelled20,
    spelled21,
    spelled22,
    spelled23,
    spelled24,
    spelled25,
    spelled26,
    spelled27,
    spelled28,
    spelled29,
  ];
  return names;
}
