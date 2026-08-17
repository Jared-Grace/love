export async function gloss_chapter_claims_generic(
  chapter_code,
  fn,
  text_index,
  word_key_read,
  lambda_claims,
) {
  "Every explanation in one gloss chapter that the caller's question finds something in, asked against the whole chapter's words rather than against one passage.";
  "$plain chapter_code";
  "the code is a chapter's name, like PSA136, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The whole chapter is opened before any explanation is asked about, because a claim about where a word stands cannot be settled inside the one passage the claim was written in.";
  "A chapter nobody has authored yet answers with nothing, so a sweep crosses the gaps without being told where they are.";
  let chapter = await gloss_chapter_read(chapter_code, fn);
  if (null_is(chapter)) {
    let none = [];
    return none;
  }
  let passages = property_get(chapter, "passages");
  let found = lambda_claims(passages, text_index, word_key_read);
  return found;
}
