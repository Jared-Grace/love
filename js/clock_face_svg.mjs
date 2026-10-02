import { multiply_divide } from "./multiply_divide.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { modulo } from "./modulo.mjs";
export function clock_face_svg(hour, minute, second) {
  "a round clock face with the numbers 1 to 12 and an hour hand and a minute hand, drawn as SVG writing, for a lesson that says a clock shows the hours 1 to 12, asked by the human 2026-09-30";
  "Drawn by code rather than taken from a picture, chosen by the human: a found picture would need a person to review it, while a drawing made from the numbers is right by construction. Not picked: a public domain image.";
  "The hands take their places from the time given, so the hour hand sits part way between two numbers as the minutes pass, as on a real clock. Everything is drawn in currentColor, so it follows the writing colour of wherever it is put.";
  "Positions are measured from the centre, turning clockwise from 12 at the top: a number n sits n * 30 degrees round, and a hand turned d degrees points d degrees round.";
  let numbers = "";
  for (let n = 1; less_than_equal(n, 12); n++) {
    let left = multiply(n, 30);
    let turn = multiply_divide(left, Math.PI, 180);
    let right = Math.sin(turn);
    let x = multiply(38, right).toFixed(2);
    let right2 = Math.cos(turn);
    let y = multiply(-38, right2).toFixed(2);
    numbers += `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="bold" fill="currentColor">${n}</text>`;
  }
  let minute_turn = multiply(minute + divide(second, 60), 6);
  let hour_turn = multiply(modulo(hour, 12) + divide(minute, 60), 30);
  let face = `<circle r="48" fill="none" stroke="currentColor" stroke-width="3"/>`;
  let v = hour_turn.toFixed(2);
  let hour_hand = `<line x1="0" y1="0" x2="0" y2="-22" stroke="currentColor" stroke-width="5" stroke-linecap="round" transform="rotate(${v})"/>`;
  let v2 = minute_turn.toFixed(2);
  let minute_hand = `<line x1="0" y1="0" x2="0" y2="-33" stroke="currentColor" stroke-width="3" stroke-linecap="round" transform="rotate(${v2})"/>`;
  let middle = `<circle r="3.5" fill="currentColor"/>`;
  let r = `<svg viewBox="-50 -50 100 100" width="11em" height="11em" aria-hidden="true" style="display:block;margin:0.5em auto">${face}${numbers}${hour_hand}${minute_hand}${middle}</svg>`;
  return r;
}
