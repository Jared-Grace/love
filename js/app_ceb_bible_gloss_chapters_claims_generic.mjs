export async function app_ceb_bible_gloss_chapters_claims_generic(
  lambda_claims,
) {
  "Every authored Cebuano chapter asked whatever the caller came to ask, and only the chapters that answered with something named.";
  "The dictionary is opened once for the whole store rather than once a chapter, which is the difference between a sweep of minutes and a sweep of hours.";
  "Chapters nobody has authored yet answer with nothing and so drop out, which is why no list of what is authored has to be kept anywhere.";
  let known = await binisaya_words_known();
  let word_key_read = binisaya_word_root_key_reader(known);
  let text_index = app_ceb_bible_gloss_text_index();
  let r = await gloss_chapters_claims_generic(
    app_ceb_bible_gloss_generate,
    text_index,
    word_key_read,
    lambda_claims,
  );
  return r;
}
