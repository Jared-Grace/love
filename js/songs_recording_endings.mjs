export function songs_recording_endings() {
  "The file endings a downloaded song arrives under.";
  "★ IT EXISTS SO THAT ASKING WHICH FILES IN A FOLDER ARE RECORDINGS AND ASKING WHICH RECORDINGS COULD NOT BE PLACED ARE THE SAME TWO WORDS. A refusal is only worth reporting about a file that was meant to be a song; a download folder also holds pictures, documents and archives, and a refusal list that named those would be too long to read and would say nothing. So the two endings have to be written down somewhere a caller can point at, rather than guessed at each call site.";
  "★ THE READINGS OF THESE NAMES SPELL THE SAME TWO ENDINGS INSIDE A REGULAR EXPRESSION, AND THAT IS A SECOND PLACE FOR THEM TO DISAGREE. It is left that way for now because a reading is one anchored shape and cannot be built from a list without becoming harder to read than the thing it checks. What makes the duplication safe to leave is that a disagreement is loud in one direction: an ending listed here that the reading refuses puts every such file on the refusal list, where somebody sees it. A disagreement the other way - an ending the reading accepts and this does not - would be silent, so an ending must be added here first.";
  let endings = [".wav", ".mp3"];
  return endings;
}
