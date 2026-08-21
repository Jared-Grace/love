export function g_arc_line_address(number, field) {
  "$plain field";
  "The one way of writing where a line of an arc is - its turn number and its field name joined, as a reviewer says it and as a note files it.";
  "IT IS ONE SPELLING BECAUSE IT IS COMPARED. An address written by a check and an address written by a reviser are matched against each other as text, so two places joining the same two parts their own way agree only for as long as nobody changes either - and the day one of them puts a space in, every note stops matching the line it was filed against, silently, and the reviser reports that nothing was faulted.";
  "IT TAKES THE PARTS AND NOT A LINE, so a caller holding a note can ask as easily as a caller holding a line. The two carry the same pair under different names - a note calls the number a turn - and a function taking either shape would have to guess which it was handed.";
  let address = list_join_dot([number, field]);
  return address;
}
