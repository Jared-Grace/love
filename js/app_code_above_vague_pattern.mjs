import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_above_vague_pattern() {
  arguments_assert(arguments, 0);
  ("Words in a lesson's telling that point at code without showing it: the first, the outer part, that line. Each one makes the reader work out which code is meant. The human's rule, 2026-10-08: name the code - show if (a) { ... }, else { ... }, or the whole statement - since a pronoun is a step the reader has to compute.");
  ("Kept to words that point. Left out: the lines and the line, because the screens say the lines inside if (a) { ... } and the code then follows; both and neither, because both sides and both lines inside { and } have one meaning on the screens they are on; and it and they, which match too much ordinary writing to say anything.");
  ("An ordinal counts only when nothing is named after it - the first runs, only the second, the last is - never the first seat or the last digit, which name a thing in the world and point at no code. Measured 2026-10-08: with every the first counted, over a hundred pieces were found and almost none pointed at code. The other is left out for the same reason: one after the other, the other way.");
  let r =
    /\b(the (first|second|third|last)( one)?( (runs?|is|does|never|comes|changes|asks)\b|[ ,.:;]*$)|(outer|inner|the|this|that) part\b|(this|that) line\b|it runs\b)/i;
  return r;
}
