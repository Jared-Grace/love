export function g_plant_book_count(lines) {
  "How many plants a book's sermon lines should be divided into - the count whose plants land inside the wanted length, or failing that the count that misses it by least.";
  "The count is SEARCHED rather than divided out. Dividing by the wanted length and rounding asks what is nearest to eighteen days; it does not ask whether the answer is inside fifteen to twenty-one, and those are different questions. James is the case that shows it: two plants is twenty-two and a half days and three is exactly fifteen, and rounding its total picks two - the one that is out of range - because two is the nearer of them to eighteen.";
  "Being INSIDE the range beats being near the middle of it, so the search sorts on how far outside a plant would fall and only then on how far from the wanted length. A plant nobody has to flag is worth more than a plant of exactly the right size, because the range is what the flag is for.";
  "A book that cannot land in range at any count still returns its least-bad count rather than nothing. That is not the same as hiding the problem - the plant it makes is still reported as short or long by the grouping - and it is the honest answer, because the book is the fact and the range is the preference. 1 Peter is that case: one plant is twenty-three days and two is eleven, and there is no third choice.";
  let settings = g_generation_settings();
  let least = settings.plant_days_minimum;
  let most = settings.plant_days_maximum;
  let wanted = settings.plant_days;
  let per_day = g_day_lines();
  let best = 1;
  let best_outside = -1;
  let best_gap = -1;
  let ceiling = math_max(1, divide_ceil(lines, per_day));
  for (let count = 1; less_than_equal(count, ceiling); count++) {
    let days = divide(divide(lines, count), per_day);
    let under = math_max(0, subtract(least, days));
    let over = math_max(0, subtract(days, most));
    let outside = under + over;
    let gap = numbers_apart(days, wanted);
    let first_is = less_than(best_outside, 0);
    let outside_better = less_than(outside, best_outside);
    let outside_same = equal(outside, best_outside);
    let gap_better = less_than(gap, best_gap);
    let better = first_is || outside_better || (outside_same && gap_better);
    if (better) {
      best = count;
      best_outside = outside;
      best_gap = gap;
    }
  }
  return best;
}
