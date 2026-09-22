import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function git_history_paths_texts_callback(paths) {
  arguments_assert(arguments, 1);
  ("The instructions a history rewrite reads to take words out of these named files only, and to leave every other file in the repository exactly as it found it.");
  ("★ THE OBVIOUS WAY TO WRITE THIS DESTROYS THE REPOSITORY, AND IT LOOKS RIGHT. The rewriting tool has an option naming paths and an option replacing words, and the two read as though naming a path scopes the replacing to it. They do not. Naming a path says which files survive the rewrite at all, and naming several unions them rather than narrowing, so asking for a replacement in one file would replace the words there and throw away every other file the repository has ever held. Both options take paths, which is the whole of why they read as composing, and nothing would have said a word before the history was gone.");
  ("What actually scopes a replacement is the tool's own note about this: once it is handed a body of instructions for deciding files one at a time, the replacements stop applying by themselves, and choosing which files they apply to becomes the body's job. So this asks for each file by name, and for everything else hands the file straight back untouched - and untouched means the file the rewrite already had, not a copy of it, so a file nobody named cannot be altered even by accident.");
  ("A file the history holds more than once is worked on once. The same contents can be reached by many commits, and a rewrite walks them all; remembering what each one turned into is the difference between reading a file once and reading it as many times as it was ever committed. What is remembered is only ever consulted after the name has been checked, so a file that shares its contents with one nobody named is still handed back untouched.");
  ("A path is refused unless it is made of letters, digits and the marks a path is spelled with. This is not fussiness about input: these names are written into the body of instructions the tool is handed, so a quotation mark or a backslash arriving here would stop being part of a name and start being part of the instructions.");
  ("Naming no paths is refused. A body that names nothing hands every file back untouched, which is a rewrite that rewrites nothing - it would run for an hour, report success, and mean that the words are all still there.");
  let any = list_empty_not_is(paths);
  assert_json(any, {
    hint: "no paths were named, and a scoped replacement that names no files would hand every file back untouched and report success - would you like to name the files the words should come out of?",
  });
  function git_history_paths_texts_callback_quoted(path) {
    let plain = /^[A-Za-z0-9_./-]+$/.test(path);
    assert_json(plain, {
      hint: "this is not a plain path of letters, digits and the marks a path is spelled with, and this name is written into the body of instructions the rewriting tool is handed - would you like to name the file itself?",
      path,
    });
    let quoted = 'b"' + path + '"';
    return quoted;
  }
  let quoted = list_map(paths, git_history_paths_texts_callback_quoted);
  let joined = list_join_comma(quoted);
  let lines = [
    "named = {" + joined + "}",
    "if filename not in named:",
    "  return (filename, mode, blob_id)",
    "if blob_id in value.data:",
    "  return (filename, mode, value.data[blob_id])",
    "contents = value.get_contents_by_identifier(blob_id)",
    "replaced = value.apply_replace_text(contents)",
    "made = value.insert_file_with_contents(replaced)",
    "value.data[blob_id] = made",
    "return (filename, mode, made)",
  ];
  let text = list_join_newline(lines);
  return text;
}
