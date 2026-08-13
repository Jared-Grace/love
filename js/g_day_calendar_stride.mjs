export function g_day_calendar_stride() {
  "How many days the calendar moves forward for every one day the player plays.";
  "A ministry takes years and a game takes hours, so the two clocks cannot be the same one. This is where they are told apart: the player lives one day, the story spends eight, and the years are what the gap between two days is made of.";
  "It buys time WITHOUT touching the shape of a day. Lengthening the day would buy the same years by putting more turns in it, and a day's size was chosen for variety and is what the daily prayer rhythms are built on - so that way spends the things this way leaves alone.";
  "EIGHT rather than seven, and the reason is the week. A stride coprime with seven returns to the same weekday every seventh game day, so the player still keeps a week; seven itself would freeze every day on the same one. Eight is the smallest coprime stride above a week, and being one MORE than seven it also runs the weekdays in their natural order - Sunday, Monday, Tuesday - where six would run them backwards and nine would skip every other one.";
  "So the lever is any stride that leaves one over a week: eight, fifteen, twenty-two, twenty-nine. Each behaves identically to this one and only changes how much time the same play covers - at eight, three hundred game days is about seven years; at twenty-nine it is a working lifetime.";
  let stride = 8;
  return stride;
}
