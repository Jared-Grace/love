import { arguments_assert } from "./arguments_assert.mjs";
export function bible_usfm_markers_line() {
  arguments_assert(arguments, 0);
  ("The usfm line marks whose line is another line of the passage already running - poetry, list items, and the psalm ascription.");
  ("It exists so that no mark has to be guessed at. Every other kind of line is named somewhere - the bookkeeping, the headings, the introduction, the paragraph openings - and until this list was written the rest fell through to being read as scripture without anybody having said it was scripture. That fall-through is how a printer's division label, Psalms 107-150, came to stand as the first line of a psalm.");
  ("The levels are spelled out rather than matched loosely, the same way the headings are, so that a longer mark beginning with a shorter one is never mistaken for it.");
  ("The ascription is in this list rather than among the headings, though it is printed like one. It is in the hebrew, and a hundred and seventeen psalms number it as verse one. The division labels share its mark and are taken out earlier, by asking the book whether it counts that line as scripture, which is a question this list cannot answer and does not try to.");
  let markers = [
    "q",
    "q1",
    "q2",
    "q3",
    "q4",
    "qm",
    "qm1",
    "qm2",
    "qm3",
    "qr",
    "qc",
    "qs",
    "d",
    "li",
    "li1",
    "li2",
    "li3",
    "li4",
  ];
  return markers;
}
