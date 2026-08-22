export function word_picture_url(word, attempt) {
  "$plain word";
  "The address one attempt at a taught word's picture can be fetched at while working locally.";
  "THE LOCAL SERVER HANDS OUT THE WHOLE FOLDER THE REPOS SIT IN, so a picture deliberately kept out of git is still reachable by name - which is what lets it stay out of a history that is already too heavy and still be looked at on a phone.";
  "SO THIS ADDRESS IS FOR REVIEWING AND NOT FOR PLAYING. A picture that has been chosen is moved somewhere the deployed site serves; until then it exists only where the dev server can reach it, and a screen built on this address is a dev screen by construction rather than by anybody remembering.";
  let folder = "/love/gitignore/word_pictures/" + word;
  let url = folder + "/" + String(attempt) + ".png";
  return url;
}
