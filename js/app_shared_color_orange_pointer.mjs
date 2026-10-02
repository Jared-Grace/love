import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_shared_color_orange_pointer() {
  arguments_assert(arguments, 0);
  ("the fifth pointing colour's value: an orange a little lighter than the red and purple pointers so it reads as its own warm colour, with its hue in the widest gap left on the wheel, between the red pointer's and the green's, well clear of both");
  ("★ THE WIDEST GAP LEFT ON THE WHEEL WAS THE WIDEST GAP LEFT IN THIS PALETTE, AND THE CHIP AMBER IS ALREADY STANDING IN IT. Measured 2026-10-02 with ",
    fn_name("color_apart"),
    ", on the scale where nought is the same colour and about two is the furthest any two colours can be: this and the chip palette's amber are 0.021 apart to ordinary sight, and 0.025, 0.018 and 0.020 apart to a reader missing the red, the green and the blue cone. One per cent of the scale, under every way of seeing - they are one colour written twice, in two lists. The hue was picked at 60 and the amber sits at 56.38, three and a half degrees away, which is inside the twelve degrees this app counts as one hue.");
  ("WHAT MAKES IT INVISIBLE IS THAT EACH PALETTE IS MEASURED AGAINST ITSELF. The pointing gate measures every pair of pointers and the chip gate every pair of chips, so a colour arriving in one list at a hue the other list already uses is not an event either of them can have. The tone gate is the one that sees it, and it saw this - it is why that gate went red, and the fault is banked there rather than fixed, because which of the two moves is a colour decision.");
  ("NOTHING DRAWS BOTH ON ONE SCREEN TODAY, so this is a collision waiting rather than a collision happening. The chips are drawn by the dot rectangle and by the two expression lessons above it; the pointers are drawn by the lessons that point. The day one screen wants a chip and a pointer, two colours meaning two different things will look like one, and the human's reason for asking for this colour on 2026-09-27 - that the 3 in rows of 3 should wear a colour of its own - is the reason it would be the wrong one.");
  let color = color_oklch(0.6, 0.16, 60);
  return color;
}
