import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { ebible_bible_folder_apart_maximum } from "./ebible_bible_folder_apart_maximum.mjs";
import { texts_nearest } from "./texts_nearest.mjs";
export function ebible_bible_folder_suggestions(bible_folder) {
  "The real bible folders closest in spelling to one a link named and this repo does not ship - what to offer somebody whose link will not open.";
  "It may come back empty, and an empty answer is an answer: nothing here is spelled anything like what the link says, so there is nothing honest to offer and the page should say so rather than name its least unlike bible.";
  let folders = ebible_bible_folders_sorted();
  let apart_maximum = ebible_bible_folder_apart_maximum();
  let suggestions = texts_nearest(folders, bible_folder, apart_maximum);
  return suggestions;
}
