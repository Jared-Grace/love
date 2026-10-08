import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_above_vague_pattern() {
  arguments_assert(arguments, 0);
  ("Words in a lesson's telling that point at code without showing it: the first, the outer part, that line. Each one makes the reader work out which code is meant. The human's rule, 2026-10-08: name the code - show if (a) { ... }, else { ... }, or the whole statement - since a pronoun is a step the reader has to compute.");
  ("Kept to words that point. Left out: the lines and the line, because the screens say the lines inside if (a) { ... } and the code then follows; both and neither, because both sides and both lines inside { and } have one meaning on the screens they are on; and it and they, which match too much ordinary writing to say anything.");
  let r =
    /\b(the first|the second|the third|the last|the other|outer|inner|the part|this part|that part|this line|that line|the one|it runs|so it)\b/i;
  return r;
}
