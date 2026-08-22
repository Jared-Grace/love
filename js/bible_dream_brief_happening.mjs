import { bible_dream_brief_passages } from "./bible_dream_brief_passages.mjs";
export function bible_dream_brief_happening() {
  "The whole brief for the acting step where the dream moves: what it is for, which passages need it, what Scripture has settled, what a designer still decides, what it may never do, and what would prove it finished.";
  "★ THE MOVEMENT IS USUALLY THE WHOLE MESSAGE, AND NOTHING HAS BEEN BUILT FOR IT. Every one of the twelve passages that names shapes also moves, without exception, and in most of them a still picture says nothing at all: seven fat cows are not a dream, seven gaunt cows eating them are. The sheaf that stands and is bowed to, the stone that strikes the feet and becomes a mountain, the loaf that tumbles into the camp and overturns the tent - take the motion out and there is no message left to deliver. This is the largest hole in the game and it is completely open.";
  "★ THE ORDER OF WHAT HAPPENS IS THE PASSAGE'S AND MAY NOT BE REARRANGED. Joseph's sheaf rises and stands upright and THEN the others gather and bow; the tree is cut down and then stripped and then scattered and then the stump is banded. Told in another order these are different dreams, and a design that lets the player sequence them freely has handed the player the message.";
  "The freedom that does exist in this step is not yet decided. A player might cause the movement, or time it, or only release it once the shapes are there; the passage settles what moves and in what order, and says nothing whatever about how an angel makes it move.";
  "Some of the movement is a thing being done to something else rather than a thing travelling - the wings torn off the lion, the horns uprooted, the leaves stripped. Whoever takes this step should read all twelve before choosing a way of moving things, because a design fitted to the tumbling loaf may have nothing to offer the tree.";
  let passages = bible_dream_brief_passages("happening");
  let brief = {
    step: "happening",
    what: "what the passage says happens, happens - the movement that carries the meaning",
    passages,
    settled:
      "what moves, what is done to it, and the order of it; that the movement is the message in most of these passages",
    open:
      "everything else - whether the player causes, times or releases the motion; whether it plays once or is worked at; how a thing done TO something is asked for",
    forbidden:
      "inventing motion the passage does not give; letting the player reorder what happens; treating the movement as decoration on a finished drawing",
    done: "all twelve moving passages move in their own order, with no code particular to any one of them",
  };
  return brief;
}
