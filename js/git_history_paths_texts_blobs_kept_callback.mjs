import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function git_history_paths_texts_blobs_kept_callback(paths, blobs_kept) {
  arguments_assert(arguments, 2);
  ("The instructions a history rewrite reads to take words out of these named files only, while handing back untouched the named versions of them whose copy of the word is innocent.");
  ("★ THE OBVIOUS WAY TO WRITE THIS DESTROYS THE REPOSITORY, AND IT LOOKS RIGHT. The rewriting tool has an option naming paths and an option replacing words, and the two read as though naming a path scopes the replacing to it. They do not. Naming a path says which files survive the rewrite at all, and naming several unions them rather than narrowing, so asking for a replacement in one file would replace the words there and throw away every other file the repository has ever held. Both options take paths, which is the whole of why they read as composing, and nothing would have said a word before the history was gone.");
  ("What actually scopes a replacement is the tool's own note about this: once it is handed a body of instructions for deciding files one at a time, the replacements stop applying by themselves, and choosing which files they apply to becomes the body's job. So this asks for each file by name, and for everything else hands the file straight back untouched - and untouched means the file the rewrite already had, not a copy of it, so a file nobody named cannot be altered even by accident.");
  ("A file the history holds more than once is worked on once. The same contents can be reached by many commits, and a rewrite walks them all; remembering what each one turned into is the difference between reading a file once and reading it as many times as it was ever committed. What is remembered is only ever consulted after the name has been checked, so a file that shares its contents with one nobody named is still handed back untouched.");
  ("A path is refused unless it is made of letters, digits and the marks a path is spelled with. This is not fussiness about input: these names are written into the body of instructions the tool is handed, so a quotation mark or a backslash arriving here would stop being part of a name and start being part of the instructions.");
  ("Naming no paths is refused. A body that names nothing hands every file back untouched, which is a rewrite that rewrites nothing - it would run for an hour, report success, and mean that the words are all still there.");
  ("★ IT NAMES THE INNOCENT RATHER THAN THE GUILTY, AND WHICH SIDE IS WRITTEN DOWN IS THE WHOLE OF ITS SAFETY. A list of the versions to change is a list of things to do: a version nobody put on it is left alone, so a list that is short or stale quietly keeps the very words the rewrite was run to remove, and every other proof passes while it does. A list of the versions to keep is the same list read the other way and fails the opposite way: a version nobody put on it is changed, so the same staleness damages something instead of hiding something, and damage announces itself where an omission never does. Erasing is the default here and keeping is the exception, because the exception is the side a reader can check.");
  ("★ THE JUDGMENT BELONGS TO A READER AND IS WRITTEN DOWN, NOT GUESSED AT EACH RUN. Whether a version's copy of a word is the person or the vocabulary is not a question the rewrite can answer from the word, which is identical in both. It was answered once by reading the versions, and what is handed here is that answer. A rule invented to stand in for it - how many of its neighbours are present, how long the file is - would be a guess re-made on every run, and a guess that changes its mind is worse than a list that goes stale, because nothing about it can be checked by looking.");
  ("★ A VERSION IS NAMED BY WHAT IS IN IT, NOT BY THE NUMBER THE REWRITE HAPPENS TO CALL IT. The name a rewriting tool hands to its own instructions is its own bookkeeping and may be a running count rather than the name git gives the contents; a list written in git's names would then match nothing at all, and matching nothing here means erasing the innocent version rather than failing loudly. So the contents are weighed on the spot and git's own name for them worked out from the bytes, which is a name that means the same thing on both sides of the list.");
  ("★ THESE NAMES DIE WITH THE REWRITE THAT SPENDS THEM. They name versions of the history as it stands at the moment the list is made, and the rewrite replaces every one of them. So a list is made for one rehearsal and used by it; carried forward to a differently shaped run it names nothing, and naming nothing is the failure that does not complain.");
  ("Naming no versions to keep is allowed and means what it says - every version of the named files is worked on, which is what the plain twin of this asks for.");
  ("A version's name is refused unless it is forty letters of the alphabet git spells names in. These go into the body of instructions the tool is handed, so anything else arriving here would stop being a name and start being instructions.");
  let any = list_empty_not_is(paths);
  assert_json(any, {
    hint: "no paths were named, and a scoped replacement that names no files would hand every file back untouched and report success - would you like to name the files the words should come out of?",
  });
  function git_history_paths_texts_blobs_kept_callback_quoted(path) {
    let plain = /^[A-Za-z0-9_./-]+$/.test(path);
    assert_json(plain, {
      hint: "this is not a plain path of letters, digits and the marks a path is spelled with, and this name is written into the body of instructions the rewriting tool is handed - would you like to name the file itself?",
      path,
    });
    let quoted = 'b"' + path + '"';
    return quoted;
  }
  function git_history_paths_texts_blobs_kept_callback_named(blob) {
    let plain = /^[0-9a-f]{40}$/.test(blob);
    assert_json(plain, {
      hint: "this is not one of git's own names for the contents of a file, which is forty letters of its alphabet, and a name that matches nothing here keeps nothing - it erases the version it was written to protect",
      blob,
    });
    let quoted = '"' + blob + '"';
    return quoted;
  }
  let quoted = list_map(
    paths,
    git_history_paths_texts_blobs_kept_callback_quoted,
  );
  let joined = list_join_comma(quoted);
  let named = list_map(
    blobs_kept,
    git_history_paths_texts_blobs_kept_callback_named,
  );
  let kept = list_join_comma(named);
  let lines = [
    "named = {" + joined + "}",
    "kept = {" + kept + "}",
    "if filename not in named:",
    "  return (filename, mode, blob_id)",
    "if blob_id in value.data:",
    "  return (filename, mode, value.data[blob_id])",
    "contents = value.get_contents_by_identifier(blob_id)",
    'own = __import__("hashlib").sha1(b"blob " + str(len(contents)).encode() + b"\\x00" + contents).hexdigest()',
    "if own in kept:",
    "  value.data[blob_id] = blob_id",
    "  return (filename, mode, blob_id)",
    "replaced = value.apply_replace_text(contents)",
    "made = value.insert_file_with_contents(replaced)",
    "value.data[blob_id] = made",
    "return (filename, mode, made)",
  ];
  let text = list_join_newline(lines);
  return text;
}
