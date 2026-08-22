export function word_picture_path(word, attempt) {
  "$plain word";
  "Where one attempt at a taught word's picture is saved.";
  "THE ATTEMPT IS NAMED BY A PLAIN NUMBER so that the order they were drawn in is the order they sort in, and so that the next one to write is worked out by counting the folder rather than by keeping a tally anywhere that could disagree with it.";
  let folder = word_picture_folder(word);
  let name = String(attempt) + ".png";
  let path = path_join([folder, name]);
  return path;
}
