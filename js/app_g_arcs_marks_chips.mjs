import { arguments_assert } from "./arguments_assert.mjs";
import { range } from "./range.mjs";
import { add } from "./add.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_arcs_marks_chip_current_set } from "./app_g_arcs_marks_chip_current_set.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function app_g_arcs_marks_chips(parent, count, go) {
  "$plain count";
  "Every change on the sheet drawn as a numbered chip that carries the reader straight to it, handed back as a list in the order the changes come in so that whoever holds them can say which one is being read.";
  "IT IS THERE SO THE TOUR CAN BE JOINED ANYWHERE. A press that only goes to the next one makes the fortieth change forty presses away, and a reviewer coming back to a fault they half-remember near the end has to walk the whole arc again to reach it.";
  "THE NUMBERS ARE WHAT THE PRESS IS ALREADY SAYING, which is the only reason bare numbers are enough to choose by. The press counts a change out as it arrives, so a reader who noticed something at change nine already has the word for where they were, and the chip they want is the one wearing it.";
  "THEY COUNT FROM ONE WHILE THE LIST THEY STAND FOR COUNTS FROM NOUGHT, and the shift is made here rather than at either end. What the reader is told and what the sheet is asked for are two different numbers, so exactly one place should ever hold both of them.";
  "THE CHIPS ARE HANDED BACK RATHER THAN KEPT, because being pressed is not the only thing that happens to them. The change being read moves when the plain next press is used as well, and the chip standing for it has to follow - which means whoever owns the tour needs to be able to reach any of them by number.";
  arguments_assert(arguments, 3);
  let chips = [];
  let numbers = range(count);
  function chip_add(number) {
    let shown = add(number, 1);
    let v = String(shown);
    function chip_press() {
      go(number);
    }
    let chip = html_button(parent, v, chip_press);
    html_style_assign(chip, {
      "min-width": "2.2rem",
      padding: "0.3rem 0.35rem",
      "border-radius": "0.3rem",
      "font-size": "0.85rem",
      "font-weight": "bold",
      cursor: "pointer",
    });
    app_g_arcs_marks_chip_current_set(chip, false);
    list_add(chips, chip);
  }
  each(numbers, chip_add);
  return chips;
}
