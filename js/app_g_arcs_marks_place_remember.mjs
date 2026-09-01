import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function app_g_arcs_marks_place_remember(sheet_code, number) {
  "$plain sheet_code";
  "$plain number";
  "Files which change of the sheet the reader was last carried to, under the sheet it belongs to, so that drawing the sheet again puts the tour back where it was rather than at the first change.";
  "FILING A NOTE DRAWS THE WHOLE SHEET AGAIN, and that is the case this exists for. The press is made fresh with the sheet, so before this a reviewer who said something about the fortieth change was returned a press reading next change - and pressing it took them to the first, which is the one place on the sheet they were certainly not.";
  "IT IS FILED UNDER THE SHEET FOR THE SAME REASON THE SCROLL DISTANCE IS. Change nineteen of one person's arc has nothing to do with change nineteen of another's, and being put in the middle of a tour of a sheet nobody has toured is worse than being put at its start.";
  "IT KEEPS THE CHANGE BEING READ AND NOT THE ONE COMING NEXT, because that is the one the reader could name. Where the two were kept the other way round, coming back said the reader was somewhere they had never been shown.";
  "IT IS KEPT WHERE THE SCROLL DISTANCE IS KEPT, which means it survives a refresh as well as a redrawing. The two are the same fact told twice - how far down the sheet the reader has come, and which change they had reached - and a refresh that put one back and not the other would leave the ring on a change that is nowhere near the words on the screen.";
  "THE NUMBER IS THE CHANGE'S PLACE IN THE ORDER AND NOT ANYTHING ABOUT THE LINE ITSELF, which is exact for as long as the arc is not being rewritten underneath the reader. That is the same trade the scroll distance makes, made for the same reason, and it would be undone the same way: name the turn and the field rather than the count.";
  arguments_assert(arguments, 2);
  let place = {
    sheet_code,
    number,
  };
  storage_local_set(app_g_arcs_marks_place_remember, "place", place);
}
