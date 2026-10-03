import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { bible_search_folder } from "./bible_search_folder.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
export function bible_search_languages_prefix() {
  "The start of every storage name the search index keeps for a language other than English, a folder to a language.";
  "It stands inside the English index's folder because storage lets readers read that folder and no new one, and changing who may read storage is a step of its own. A word is kept under its own spelling and a word cannot hold a slash, so no English word can reach into a folder.";
  "The English sweep that takes down words its index no longer knows lists everything under that folder, and so it must be told to leave this one alone - it asks for this prefix by name. Left to itself it would take down every other language at the next English rebuild.";
  arguments_assert(arguments, 0);
  let folder2 = bible_search_folder();
  let folder = list_join_slash_forward([folder2, "language"]);
  let s = text_slash_forward();
  let prefix = list_join_empty([folder, s]);
  return prefix;
}
