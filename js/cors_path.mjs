export function cors_path() {
  "Where the file store's reading rules are written out for the command that uploads them.";
  "It is deliberately not kept in the history. Two of the three addresses in it are worked out from the machine it is written on, so a copy of it is only ever right on one computer, and one of them is a personal machine's name, which does not belong in a public record. Whoever needs the file makes it.";
  let r = "gitignore/cors.json";
  return r;
}
