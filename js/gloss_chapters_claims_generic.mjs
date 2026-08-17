export async function gloss_chapters_claims_generic(
  fn,
  text_index,
  word_key_read,
  lambda_claims,
) {
  "Every chapter of one gloss store holding an explanation the caller's question finds something in, each named beside what was found in it.";
  "The words the explanations were written against are handed in as one reader rather than opened here, because opening a language's whole dictionary is the slow part and one opening serves every chapter.";
  async function chapter_read(chapter_code) {
    let found = await gloss_chapter_claims_generic(
      chapter_code,
      fn,
      text_index,
      word_key_read,
      lambda_claims,
    );
    return found;
  }
  let r = await gloss_chapters_offenders_generic(fn, chapter_read);
  return r;
}
