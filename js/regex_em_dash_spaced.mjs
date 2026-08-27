export function regex_em_dash_spaced() {
  "An em dash together with whatever spaces stand on either side of it.";
  "Both sides are looked at in one go and either may be empty, so a dash spaced on one side only is found the same as a dash spaced on both. That matters because the spacing is not consistent to begin with - it is what a converter left behind, and a converter is inconsistent in a way an author is not.";
  let r = / *— */g;
  return r;
}
