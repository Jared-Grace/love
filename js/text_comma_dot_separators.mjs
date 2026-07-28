import { process_ai_seam_is } from "./process_ai_seam_is.mjs";
export function text_comma_dot_separators() {
  ("What counts as the break between two words of a joined list, which is not the");
  ("same answer on both seams.");
  ("A full stop was only ever there to forgive a typo: the human types these lists");
  ("by hand at a keyboard and the two keys sit beside each other, so a list meant");
  ("as one thing and typed as another should still do what was meant.");
  ("Claude does not type - it writes the command out whole - so on that seam there");
  ("is no typo to forgive and the full stop costs everything it forgives nothing");
  ("for. A value with a full stop in it arrives torn in half and the transform");
  ("refuses on argument count, which rules out font sizes, versions and file");
  ("names, and those are the values most likely to be spelled out in several");
  ("places and so most in need of the transforms that cannot reach them.");
  let ai_seam = process_ai_seam_is();
  if (ai_seam) {
    let comma_only = [","];
    return comma_only;
  }
  let both = [",", "."];
  return both;
}
