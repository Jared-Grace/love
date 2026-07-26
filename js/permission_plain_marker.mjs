export function permission_plain_marker() {
  "The token a function writes in its own body to declare that one of its parameters carries ordinary data, so the word inside that parameter's name is not the thing the name makes it look like.";
  "A parameter named chapter_code holds a Bible chapter identifier and a parameter named code holds source text, and nothing in either name says which. Reading the shape of the name would guess, and guessing loosens the check for every function nobody has looked at; a marker is written by whoever knows, so an unmarked parameter stays refused and the claim is a line somebody can read and disagree with.";
  "The dollar and one word is the shape the rest of the repo already uses for a token something else resolves, so this costs a reader rather than a convention.";
  let marker = "$plain ";
  return marker;
}
