export function bible_glyph_parts_hebrew_drawn() {
  "The pictures for the small Hebrew words that are joined letters rather than words of their own, keyed by the interlinear's parsing code for each.";
  "EVERY PICTURE HERE IS ONE THE GREEK TABLE ALREADY GAVE THE SAME WORD, so this seats no new meaning: joined and is the plus Greek kai draws, joined in is the tray in of Greek en, joined from is the tray out that both Greek ek and the Hebrew word min already draw, and a joined he, she, it or they at a word's end is the pointing back of Greek autos. The ones Greek leaves undrawn - the, to, like, my, your - are left undrawn here too, so both testaments keep one answer per word.";
  "It is its own table rather than lines in the root table because the root table seats Strong's numbers and these words have none.";
  let r = {
    "Conj-w": "plus",
    "Prep-b": "tray_in",
    "Prep-m": "tray_out",
    "3ms": "pointing_back",
    "3fs": "pointing_back",
    "3mp": "pointing_back",
    "3fp": "pointing_back",
  };
  return r;
}
