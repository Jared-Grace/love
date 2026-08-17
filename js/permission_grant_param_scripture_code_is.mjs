import { permission_grant_words_scripture } from "./permission_grant_words_scripture.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
export function permission_grant_param_scripture_code_is(p_name) {
  "whether a parameter name says the code it carries is a place in the Bible - a book, a chapter or a verse - rather than something a function could be made to run";
  "this is the one shape read off a parameter name that is allowed to clear a refusal instead of raising one, and it is narrow on purpose. Every other reading here treats a word in a name as a reason to say no, which is safe to get wrong; this one says yes, so getting it wrong hands out a rule nobody weighed";
  "the whole repository was read before this was written and there is no counterexample: three hundred and eighty-one functions carry a name containing chapter_code and ninety-one carry book_code, and every single one of them means a place in scripture. That is the evidence for saying yes here, and it is the thing to re-measure before widening the word list";
  "only the code refusal is lifted, never the parameter. A name that also reads as a path or a file keeps that refusal, because a Bible chapter identifier is ordinary data and a place to write is not, and a name can carry both";
  let coded = text_includes(p_name, "code");
  if (not(coded)) {
    return false;
  }
  let scripture = false;
  for (let word of permission_grant_words_scripture()) {
    let matches = text_includes(p_name, word);
    if (matches) {
      scripture = true;
    }
  }
  return scripture;
}
