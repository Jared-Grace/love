export function date_days_milliseconds(days) {
  arguments_assert(arguments, 1);
  ("How many milliseconds that many days come to - the number a window measured in days has to become before it can be taken off a clock reading.");
  ("Written out at the call site it is four multiplications in a row and a reader has to check each one, which is four chances to read 60 where 24 was meant. The count arrives as writing rather than as a number often enough that the reading is done here too, since a window handed over from a command line is a word.");
  let count = Number(days);
  let hours = multiply(count, 24);
  let minutes = multiply(hours, 60);
  let seconds = multiply(minutes, 60);
  let span = multiply(seconds, 1000);
  return span;
}
