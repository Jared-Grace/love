import { path_extension } from "./path_extension.mjs";
export function path_extension_replace(path, extension) {
  "$plain path";
  "$plain extension";
  "Answers the same path with a different ending on it, so a file made out of another file can be named after it.";
  "IT CUTS OFF WHAT IS ACTUALLY THERE RATHER THAN GUESSING WHERE THE ENDING STARTS. A name like 'Inspired by Psalm 148.mp3' holds no dot but the one that matters, yet plenty of real names hold several, and a folder above the file may hold one too. Asking the reader that already knows how to find an ending, and removing exactly as many letters as it found, is the only way this is right for a path that carries dots in more than one place.";
  "A path with no ending at all keeps its whole self and simply gains one, because there is nothing to take away.";
  let extension_before = path_extension(path);
  let stem = path.slice(0, path.length - extension_before.length);
  let r = stem + extension;
  return r;
}
