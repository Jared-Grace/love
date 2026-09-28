export function text_code_break_pieces(code) {
  "a line of code cut at the places a line of it may break when it is wider than the room it is shown in, besides its spaces: just after every opening bracket, and just after a dot with a letter after it";
  "Joined back together the pieces are the code exactly - nothing is added or taken away - so what is copied off the page is still a program that runs.";
  "After a bracket, because a call and its first argument are written with no space between them: Math.floor(chair / columns) has no space before chair, so without it the only way to fit was to cut Math.floor in two. After a dot, because that is where one name hands on to the next: console.log(a + b); breaks as console. / log( rather than inside log. Only a dot with a letter after it, because every dot would split a number like 3.14 as readily as a name. Both at the human's request, 2026-09-28.";
  let pieces = code.split(/(?<=\()|(?<=\.)(?=[A-Za-z_$])/);
  return pieces;
}
