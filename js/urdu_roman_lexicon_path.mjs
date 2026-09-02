import { arguments_assert } from "./arguments_assert.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function urdu_roman_lexicon_path() {
  "Where the list of Urdu words and the ways people write them in the Latin alphabet sits on this machine - Google Research's Dakshina lexicon for Urdu, the three sampled files run together into one, each line a word, a spelling of it, and how many people wrote it that way.";
  "★ IT IS FETCHED RATHER THAN COMMITTED, AND THIS IS THE ONE PLACE THAT SAYS WHERE FROM. This repo is given away under a waiver of every right in it, and the lexicon is somebody else's work under a licence that asks for their name and for the same freedoms to be passed on. Two licences in one folder is a claim nobody can honour, so the lexicon stays outside the history exactly as the pronouncing dictionary does, and what gets kept is the counting it made possible. Nothing of it is copied into any file here.";
  "It is Dakshina v1.0, by Google Research, under Creative Commons Attribution-ShareAlike 4.0. The words were taken from Urdu Wikipedia, keeping ones that turned up more than once, and the spellings were written by people asked to write each word the way they would type it.";
  "★ IT IS FETCHED OUT OF THE MIDDLE OF A TWO-GIGABYTE FILE WITHOUT DOWNLOADING IT. The release is one uncompressed archive whose bulk is Wikipedia text nothing here wants; the three files that are wanted come to two and a half megabytes. An uncompressed archive keeps every file at a fixed place in it and the server serving it will send any stretch of bytes asked for, so the three stretches are asked for by name of number. Fetch it again with:";
  "u=https://storage.googleapis.com/gresearch/dakshina/dakshina_dataset_v1.0.tar";
  "curl -s -r 1831772672-1833958076 $u > gitignore/dakshina-ur-lexicon.tsv";
  "curl -s -r 1833958912-1834175009 $u >> gitignore/dakshina-ur-lexicon.tsv";
  "curl -s -r 1834176000-1834389744 $u >> gitignore/dakshina-ur-lexicon.tsv";
  "★ THOSE THREE NUMBERS WERE MEASURED, NOT PUBLISHED, so a new release of the archive would move them and nothing would say so. What comes back would be the middle of some other language's Wikipedia rather than a lexicon, which is why whatever reads this file has to look at what it got. Measuring them again means walking the archive's own table of contents, which is a five-hundred-and-twelve-byte header before every file, each saying the next one's name and length.";
  arguments_assert(arguments, 0);
  let path = folder_gitignore_join("dakshina-ur-lexicon.tsv");
  return path;
}
