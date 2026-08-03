export function app_ceb_bible_gloss_generate_upload_namespace() {
  "The word the Cebuano glosses are uploaded under, which is the folder they are already sitting in on the shared bucket.";
  "It spells a function because that function is what wrote them, and it is frozen anyway. A rename would move the code and not the files, so the word has to be free to stop matching the function the moment the function is given a new name.";
  let v = text_frozen("app_ceb_bible_gloss_generate_upload");
  return v;
}
