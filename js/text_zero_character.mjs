export function text_zero_character() {
  "The character that is nothing at all - the one the machine puts between the words of a command line, because it is the one character a typed word can never hold.";
  "It is built from its number rather than written down, because written down it is invisible: a file holding it looks exactly like a file holding an empty pair of quotes, and nobody reading the line could tell which was meant.";
  let r = String.fromCharCode(0);
  return r;
}
