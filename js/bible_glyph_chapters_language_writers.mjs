import { bible_glyph_chapters_tagalog_write } from "./bible_glyph_chapters_tagalog_write.mjs";
import { bible_glyph_chapters_urdu_write } from "./bible_glyph_chapters_urdu_write.mjs";
export function bible_glyph_chapters_language_writers() {
  "Every reveal language shown beside the pictures, named as the command that rebuilds that whole language from the picture chapter list.";
  "IT IS THE ONE PLACE A THIRD LANGUAGE IS ADDED, and until it existed there were two. Both the single chapter band writer and the repair that finds its own set called the Tagalog writer and then the Urdu writer, spelled out by hand, and a language added to one of them and forgotten in the other is not a crash: the band simply never gets rebuilt on that path, which is the exact failure those two commands exist to prevent.";
  "IT NAMES THE COMMANDS AND NOT THE LANGUAGES, because what varies between two reveal languages is more than a code. Tagalog is three letters and Urdu is two, they sit in differently named folders, and each has a written file of its own; those choices already have a named place each, so what is left to collect here is which of those named places exist.";
  "A LIST OF FUNCTIONS RATHER THAN OF NAMES IS DELIBERATE. A list of names would have to be looked up before it could be run, which is a second way for an entry to be wrong that says nothing until the moment it runs; a name read here that answers to nothing fails to load at all, which is the loudest a mistake in this list can be made to be.";
  let writers = [
    bible_glyph_chapters_tagalog_write,
    bible_glyph_chapters_urdu_write,
  ];
  return writers;
}
