import { gloss_write_file_path_generic } from "./gloss_write_file_path_generic.mjs";
export function gloss_write_file_path(chapter_code, verse_key, fn) {
  "Where one passage's authored word explanations are handed over: gloss, then the chapter code, then the verses it covers, joined by underscores, with any comma in the verses turned into a dash.";
  "Naming the file is one piece of knowledge shared by the one who writes it and the one who reads it back, so it is answered here rather than spelled at both ends, where the two spellings could drift and the read would simply find nothing.";
  "Which store the explanations are for is asked as well, because the chapter and the verses do not say it and two stores explain the same verses in different languages. It decides the folder rather than the name, so what an author sees at the end of the path is still the passage.";
  let path = gloss_write_file_path_generic(chapter_code, verse_key, fn, "gloss_");
  return path;
}
