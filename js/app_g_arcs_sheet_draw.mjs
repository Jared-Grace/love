import { app_g_arcs_person_block } from "./app_g_arcs_person_block.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_g_arcs_marks_press } from "./app_g_arcs_marks_press.mjs";
import { app_g_arcs_scroll_resume } from "./app_g_arcs_scroll_resume.mjs";
export function app_g_arcs_sheet_draw(sheet, panel, watched, person, bench) {
  "One person's arc drawn onto the sheet, the reader put back where they left it, and the code naming what is on the screen.";
  "THE PLACE IS KEPT PER SHEET RATHER THAN PER CHAPTER, because a scroll distance down one person's arc means nothing down another's - it would land a reader in the middle of somebody they had not opened. The code that names the sheet is made here, beside everything that wants it, so no two of them can be given codes the others do not know about. How far down the reader had come and which change they had reached are both kept under it, and they are the same fact told twice - so they have to be filed under one name or coming back would put one of them somewhere the other is not.";
  "THE TOURING PRESS IS ASKED FOR AFTER THE ARC IS DRAWN AND NOT BEFORE, because until the last turn is on the sheet nobody knows how many lines have moved or which rows they are. It goes onto the sheet itself rather than beside it, so that emptying the sheet takes the press with it and the next arc gets a press counting its own changes.";
  app_g_arcs_person_block(sheet, person, bench);
  let chapter_code = property_get(bench, "chapter_code");
  let nickname = property_get(person, "nickname");
  let sheet_code = text_combine_multiple([chapter_code, " ", nickname]);
  let marks = property_get(bench, "marks");
  app_g_arcs_marks_press(sheet, panel, marks, sheet_code);
  app_g_arcs_scroll_resume(panel, watched, sheet_code);
  return sheet_code;
}
