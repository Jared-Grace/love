import { word_picture_folder_parts } from "./word_picture_folder_parts.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function word_picture_url(word, attempt) {
  "$plain word";
  "The address one attempt at a taught word's picture can be fetched at while working locally.";
  "THE LOCAL SERVER HANDS OUT THE WHOLE FOLDER THE REPOS SIT IN, so a picture deliberately kept out of git is still reachable by name - which is what lets it stay out of a history that is already too heavy and still be looked at on a phone.";
  "SO THIS ADDRESS IS FOR REVIEWING AND NOT FOR PLAYING. A picture that has been chosen is moved somewhere the deployed site serves; until then it exists only where the dev server can reach it, and a screen built on this address is a dev screen by construction rather than by anybody remembering.";
  "THE WAY DOWN TO THE FOLDER IS ASKED FOR RATHER THAN SPELLED OUT HERE. This and the place on disk are the same folder reached from two different tops, and while each wrote the steps out for itself a move would have been made in one of them and nothing would have complained: pictures written in one place, looked for in another, and the only symptom a review sheet showing nothing.";
  let parts = word_picture_folder_parts(word);
  let steps = ["", "love"];
  list_add_multiple(steps, parts);
  let folder = list_join_slash_forward(steps);
  let url = folder + "/" + String(attempt) + ".png";
  return url;
}
