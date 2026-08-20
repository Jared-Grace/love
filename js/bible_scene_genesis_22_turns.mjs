import { fn_name } from "./fn_name.mjs";
export function bible_scene_genesis_22_turns() {
  ("the FIRST Bible scene made playable — Genesis 22 turned into turns of the shape ",
    fn_name("app_g_need_quiz"),
    " already consumes ({concern, correct:{reference, text}}), so it runs against ",
    fn_name("bible_verses_said_off_scene"),
    " as the wrong answers with NO new mechanic code. built from ",
    fn_name("bible_events_genesis_22"),
    ", which is the point of it: a gathered record is not validated by gathering more, only by something consuming one");
  ("THE ATOM IS UNCHANGED. the player is given the situation and chooses the word that meets it. what differs from the g quizzes is only the consequence — there the verse meets a person's need, here it is what the man actually said, and saying it is how the scene goes forward");
  ("★ THE VANTAGE IS ABRAHAM, AND THAT IS NOT A FREE CHOICE. the record says angels_present for two of this chapter's four events, so an angel vantage looked available — but the figure is THE ANGEL OF THE LORD, who stops the knife and then swears BY HIMSELF (22:16) and says Isaac was not withheld FROM ME (22:12). whoever that is, the player may not be him. so the rule 'play the angel where an angel is present' is too coarse: a created messenger is playable, the angel of the LORD is not. the record's own who field is what carried the distinction, because it names the figure as the text names it rather than generically — see also that wrongdoing_shown is false for every event here, which is what makes the human vantage permitted at all");
  ("★ THREE OF THE FIVE ANSWERS ARE THE SAME WORDS, ON PURPOSE. Abraham says Here I am to God at the call, to Isaac at the question, and to the angel at the stay. a quiz whose answer is learnable after two turns would normally be a defect; here it IS the lesson, because that repetition is the chapter's own spine and the reason the man is remembered");
  let turns = [
    {
      concern:
        "God calls your name out of the silence: Abraham! Nothing else has been said yet. What do you answer?",
      correct: {
        reference: "Genesis 22:1",
        text: "Here I am.",
      },
    },
    {
      concern:
        "Three days out, the mountain is in sight. Your two servants are waiting with the donkey and do not know what you were told. What do you say to them?",
      correct: {
        reference: "Genesis 22:5",
        text: "Stay here with the donkey. The boy and I will go over there to worship, and then we will return to you.",
      },
    },
    {
      concern:
        "Isaac is carrying the wood you split. He stops on the path and calls out: My father! What do you answer?",
      correct: {
        reference: "Genesis 22:7",
        text: "Here I am, my son.",
      },
    },
    {
      concern:
        "Isaac has seen the fire and the wood and asks the one question you cannot answer: but where is the lamb for the burnt offering? What do you say?",
      correct: {
        reference: "Genesis 22:8",
        text: "God Himself will provide the lamb for the burnt offering, my son.",
      },
    },
    {
      concern:
        "The altar is built, the wood arranged, the boy bound and laid on it. Your hand is out and the knife is in it. A voice calls from heaven: Abraham, Abraham! What do you answer?",
      correct: {
        reference: "Genesis 22:11",
        text: "Here I am.",
      },
    },
  ];
  ("22:14, where Abraham names the place The LORD Will Provide, is left out — it is a naming rather than an answer to anyone, so there is no situation to put against it and nothing in the wrong-answer pool it could be told apart from. that is a limit of the QUIZ shape, not of the record, and it is the kind of leftover the action layer is for");
  return turns;
}
