export function song_image_review_couplets() {
  "the couplets being put up for review this round, each with one line saying what was changed in it - the review page's whole subject, held apart from the page that draws it so that changing what is under review is an edit to a list and never to a layout";
  "a note travels with each number rather than the number travelling alone, because a picture shown by itself asks the reader to find the difference. What was changed is the one thing the person reviewing cannot see and the one thing whoever changed it already knows, so withholding it spends their attention on a question that was already answered.";
  "the note says the fault that is still there as well as the one that was fixed, and that is the half worth defending. A page that lists only what improved is asking to be agreed with; a reader told the picture is still wrong in a named way can look at the rest of it instead of rediscovering that.";
  "a couplet comes off this list the moment it is accepted, so what is here is only what is still open. Leaving an accepted picture up spends a reader's attention on a question they have already answered, and it hides how much is left.";
  "this list is meant to be short-lived and rewritten every round, which is why it is a list of its own and not a field on the couplet table. A couplet's symbol is permanent and what somebody was asked to look at last Tuesday is not.";
  "AN EMPTY LIST IS THE FINISHED STATE AND NOT A BROKEN ONE, so the page that reads it has to say so in words rather than come up blank. Every couplet that has been drawn so far has been accepted, and the next round begins by putting numbers back here - so emptiness means the reviewing is caught up with the drawing, which is the one state worth telling the reader about plainly.";
  "A NOTE IS THREE OR FOUR SHORT SENTENCES AND NEVER A PARAGRAPH. The reader is holding a phone with the picture above and the note in grey beneath it, and a note long enough to need scrolling costs more attention than the picture it is about. Everything worth keeping that will not fit belongs in the prose of the function that was changed, where it is read once by whoever changes it next rather than every round by the person reviewing.";
  "IF THE READER ASKED A QUESTION, THE NOTE ANSWERS IT BEFORE IT SAYS ANYTHING ELSE. Four couplets were asked what was wrong with the drawing being replaced and all four got a fresh wording instead of an answer, which is the one reply that cannot be checked - a reader who is told why is able to say no, and a reader handed a new picture can only start again. The question is also worth taking literally: on three of the four the honest answer was that nothing was wrong with it and the replacement was somebody's unasked judgement.";
  "EVERY ATTEMPT STORES THE WORDING IT WAS DRAWN FROM, IN ITS OWN JSON BESIDE THE PNG, AND THAT IS WHAT A PICTURE IS JUDGED AGAINST. Couplet 24 was called a failure for having no open tomb in it, when the symbol in force when it was drawn asked for the tomb sealed and the light coming out past the sealing stone - so it had obeyed exactly. A window whose design has been changed once will have older drawings that are faithful to the older design and newer ones faithful to the newer, and judging both against whatever is in the file today marks the faithful ones wrong. Read the attempt json first.";
  "A DRAWING KEPT FROM BEFORE A WORDING CHANGED IS NOT EVIDENCE ABOUT THAT WORDING. Couplet 18 was reported as having no halo and no scroll while its symbol asked for both, because the kept attempt predated the scroll being written in at all. Before reading a fault off a picture, check that the picture was drawn from the words now in the file.";
  let couplets = [
    {
      n: 4,
      note: "Contrast, and I took your second suggestion rather than your first - the thorns now carry a light and a dark brown of their own instead of the field being lightened. That went into the rule every window is drawn from, not into this one, because you faulted three windows for it. The field behind is unchanged, so if brown on violet is still muddy the field is the next thing to move.",
    },
    {
      n: 8,
      note: "Contrast, by the same rule as 4 and 36 rather than by a change to this window: a thing is now drawn in a lighter shade of its own colour with a deeper shade along its edges and its inner lead lines. Brown wood on cobalt was a different hue at the same depth, which is not contrast. Nothing else about this one changed.",
    },
    {
      n: 18,
      note: "Your whole priority list is already in the wording and has been for rounds - the drawings keep disobeying it, which is not the same problem. So this time I cut the wording instead of adding to it: about a quarter is gone, including a long clause about the legs and a run of colour prohibitions. Shortening is what fixed 11. A second halo is now refused by name.",
    },
    {
      n: 20,
      note: "Answering your question first: no, there was no new picture last round. I changed the wording so the opening is a third of the height of the rock and a quarter of its width, and then never ran a draw, so what you looked at was the old one. This is the first drawing made from the new wording.",
    },
    {
      n: 21,
      note: "Eighteen more tries and the stone still will not cover the mouth, so the picture is unchanged. I did find one real cause: the mouth used to sit high in the rock face while the stone stands on the ground, so it could not reach. The mouth now runs down to the ground, which fixed the shape and not the covering. The stone comes back small and low every time, and I have stopped spending on it until you say it is worth more.",
    },
    {
      n: 23,
      note: "The black ground is back, since you say it is right. Taking it out was my own call and it was wrong - I read the black band as a fault and the word Night as its cause, and removed both. Still wrong on my side: the sun comes back a half circle where the wording asks for a thin sliver.",
    },
    {
      n: 25,
      note: "Your arrangement: three crowns in a row above and four in a row below, and no two of the seven the same - some with tall points, some short, some closed over the top. One row of seven was mine and you are right that it made them tiny. They are all still white glass, so say if the different crowns should differ in colour too.",
    },
    {
      n: 26,
      note: "Both of your asks. The sky is clear daylight blue now instead of cobalt, and it lightens as it goes down; and each beam is narrow where it meets the cloud and widens as it falls, so the spread fans instead of standing vertical. I also cut about a third of the wording away, which is what fixed 11 and is being tried on 18 as well.",
    },
    {
      n: 30,
      note: "Answering rather than redrawing: nothing you had asked for was wrong with 40. I replaced it on my own judgement, against two house rules - its smoke is photographic grey cloud rather than flat glass, and it has no coloured field bands. Measured against your own note it is the better picture, because it has the darkness and the gloom. Say the word and I put 40 back.",
    },
    {
      n: 32,
      note: "Six leaves on each tree, and the river now runs clear between the two of them so that no water crosses in front of a trunk or a branch or a leaf. Nothing else changed. Worth knowing: two of the three draws last round came back as a chalice with a crown rather than a river at all, so this window is unstable and one good picture from it is luck as much as wording.",
    },
    {
      n: 34,
      note: "The emerald rainbow and the seven flames are back, as you asked. Why they went: the rainbow was being drawn as the white border of the window itself rather than as an arch behind the throne, and cutting it was easier than fixing it. It is now worded as an arch whose two ends stop on the glass well inside the border, and the seven flames stand in a row on the lowest step.",
    },
    {
      n: 36,
      note: "Contrast, by the same rule as 4 and 8 rather than by a change to this window: green leaves, brown cross and blue field were three hues all at the same depth, and a thing now carries a lighter shade of its own colour with a deeper shade along its edges. Nothing else changed. Say if it still does not read at phone size in the lyric video.",
    },
  ];
  return couplets;
}
