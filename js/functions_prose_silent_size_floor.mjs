export function functions_prose_silent_size_floor() {
  "How many lines of work a function has to hold before saying nothing about itself counts against it.";
  "Most of this repo is atoms of two or three lines whose whole meaning is in the name, and a sentence under one of those would only say the name again. So silence is the right answer for them, and a list that named them all would be a list nobody could act on.";
  "Half the size a function may reach at all is what is asked for here. A function at that size is holding several steps rather than one, and by then the name is a label for the group rather than a description of the work, so what it is for has stopped being readable off the name.";
  let lines = 20;
  return lines;
}
