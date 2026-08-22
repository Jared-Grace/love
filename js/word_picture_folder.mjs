export function word_picture_folder(word) {
  "$plain word";
  "The folder holding every picture ever drawn for one taught word, one folder per word, the attempts numbered inside it from one.";
  "A WORD HAS MANY PICTURES RATHER THAN ONE, for the same reason a hymn couplet does: what a drawing machine hands back for a wording is not knowable before asking, and a wording is settled by trying it several ways and looking at what came back together. A draw that wrote over the last one left nothing to compare against.";
  "IT IS THE WORD ITSELF THAT NAMES THE FOLDER, not a number, because the word is already the key everything else about it is filed under - the gloss, the explain, the wording. A number here would be a second name for the same thing and the two would drift.";
  "IT SITS IN THE IGNORED FOLDER rather than in the repo's history. A repo keeps every copy of every picture forever, and the ones that were only tried should cost nothing; a picture is moved somewhere lasting once the game actually shows it.";
  let folder = folder_repo_love();
  let path = path_join([folder, "gitignore", "word_pictures", word]);
  return path;
}
