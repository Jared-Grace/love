import { arguments_assert } from "./arguments_assert.mjs";
import { positive_is } from "./positive_is.mjs";
export function urdu_glued_words_control_verdict_keep(glued) {
  "$plain glued";
  "What the second translation says about a ruling that a run of letters is a real word and wants no space put in it, given how many times that translation writes those letters run together.";
  "Writing the word at all is agreement, because a ruling to leave a word alone claims only that the word exists as it stands. Another publisher using the same spelling is the whole of what that claim needs.";
  "It can only ever agree or say nothing, and that is a real difference from a ruling to split. A ruling to split names the two words it would make, so the control can be asked about the alternative and can contradict; a ruling to keep names no alternative, so there is nothing to look for and nothing that could come back the other way.";
  "So a silence here is weaker evidence than a silence there, and it is worth knowing which kind of silence a row is showing before anybody reads it as a settled question.";
  arguments_assert(arguments, 1);
  let together = positive_is(glued);
  if (together) {
    let r = "agrees";
    return r;
  }
  let r2 = "silent";
  return r2;
}
