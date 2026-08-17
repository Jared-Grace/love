export async function app_ceb_bible_gloss_chapter_claims_generic(
  chapter_code,
  lambda_claims,
) {
  "One authored Cebuano chapter opened, its dictionary read, and its explanations asked whatever the caller came to ask - answered with the chapter's name, how many the reading found, and the findings themselves.";
  "$plain chapter_code";
  "the code is a chapter's name, like PRO31, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "Words are matched on their root rather than on their spelling, because the explanations say both kinds of thing - this word stands again in verse fifteen, and this word's root gave the word for food in verse fourteen - and only the root answers both. Matching spellings would call every one of the second kind wrong.";
  "The sweep over every chapter is the same reading with the dictionary opened once instead of once a chapter, so anything learned here holds there.";
  let known = await binisaya_words_known();
  let word_key_read = binisaya_word_root_key_reader(known);
  let text_index = app_ceb_bible_gloss_text_index();
  let found = await gloss_chapter_claims_generic(
    chapter_code,
    app_ceb_bible_gloss_generate,
    text_index,
    word_key_read,
    lambda_claims,
  );
  let count = list_size(found);
  let r = {
    chapter_code,
    count,
    found,
  };
  return r;
}
