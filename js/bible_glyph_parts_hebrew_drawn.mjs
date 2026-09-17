import { bible_glyph_silent_name } from "./bible_glyph_silent_name.mjs";
export function bible_glyph_parts_hebrew_drawn() {
  "The pictures for the small Hebrew words that are joined letters rather than words of their own, keyed by the interlinear's parsing code for each.";
  "THE FIRST FOUR ARE PICTURES THE GREEK TABLE ALREADY GAVE THE SAME WORD: joined and is the plus Greek kai draws, joined in is the tray in of Greek en, joined from is the tray out that both Greek ek and the Hebrew word min already draw, and a joined he, she, it or they at a word's end is the pointing back of Greek autos.";
  "THE REST WERE BOUGHT FOR THESE PARTS, because the goal is pictures only and each of them was showing its word's letters beside the picture of its stem. Joined my, me, our and us draw the person with no face, joined your and you draw the hand pointing out of the picture, joined to and for draw the target, and joined like and as draw the mirror. Like the pointing back, none of them says how many; the reasons for each picture are with the picture.";
  "THE ARTICLE DRAWS THE PUSHPIN, the same mark Greek ho draws (2026-09-17). It was silent at first, to keep the page as it had been, and that was overruled by the goal that every word of the original has a picture: silence erases a real word, and which nouns carry the article can carry a verse, which a reader can only see where every present article is drawn.";
  "THE EXTRA NUN SOME VERBS CARRY AT THEIR END STAYS SILENT, and it is the one thing here that may. It is a letter and not a word - it adds no meaning a translation could render - so there is nothing under it for a picture to be faithful to.";
  "It is its own table rather than lines in the root table because the root table seats Strong's numbers and these words have none.";
  let silent = bible_glyph_silent_name();
  let r = {
    "Conj-w": "plus",
    "Prep-b": "tray_in",
    "Prep-m": "tray_out",
    "Prep-l": "toward",
    "Prep-k": "likeness",
    Art: "pin",
    Pn: silent,
    "3ms": "pointing_back",
    "3fs": "pointing_back",
    "3mp": "pointing_back",
    "3fp": "pointing_back",
    "1cs": "me",
    "1cse": "me",
    "1cp": "me",
    "1cp2": "me",
    "1cpe": "me",
    "2ms": "you",
    "2ms2": "you",
    "2fs": "you",
    "2fs2": "you",
    "2mp": "you",
    "2fp": "you",
  };
  return r;
}
