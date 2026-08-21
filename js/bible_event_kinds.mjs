export function bible_event_kinds() {
  "The vocabulary a reading of a gathered Bible event may draw on: every word that may be used to say WHAT THE PASSAGE IS DOING, and what each one means.";
  "★ A KIND IS A READING, AND A READING IS NOT THE GATHER. The gathered record holds a title and references and nothing else, so that it can never disagree with Scripture and never needs gathering again. What a passage is DOING is a judgment, and a judgment can be wrong. So it is kept apart, attached to an event by its key rather than added as a third field. Widening the event record to carry a kind would put a fallible reading inside the one record whose whole value is that it cannot be.";
  "★ THIS LIST WAS NOT CHOSEN BEFORE THE READING. It is what the hundred and one gathered events of Genesis actually turned out to need, written down after they were read one at a time. That order matters: a vocabulary fixed in advance decides how many mechanics the game has before anybody has looked at the text, which is the mechanic deciding what Scripture is allowed to be. Reading first means the count is a finding.";
  "So this list is expected to GROW as further books are read, and growing is not a defect. What must never happen is an event being filed under a near-enough word because the right one is missing - that hides the finding the reading exists to produce. Add the word.";
  "SINGLETONS ARE KEPT ON PURPOSE. Some kinds here name exactly one event in Genesis. Folding them into a neighbour would make the vocabulary tidier and the reading less true, and a kind with one member is itself information: it marks a passage that will need its own treatment, or none.";
  let kinds = [
    {
      name: "command",
      description:
        "Someone is told to do a thing, by God or by a person with standing to tell them. Whether it is obeyed is part of the event, not a separate kind.",
    },
    {
      name: "covenant",
      description:
        "A binding word is sworn, or an oath taken, or a treaty cut - between God and a person, or between people. What marks it is that the word holds after the moment ends.",
    },
    {
      name: "blessing_or_curse",
      description:
        "A word is pronounced over someone that settles what comes to them. Blessing and curse are one kind because they are one act; Scripture sets them side by side as the two things a pronouncement can be.",
    },
    {
      name: "judgment",
      description:
        "Wrong is answered - by God or through people. The answering is what makes it this kind, rather than the wrong.",
    },
    {
      name: "transgression",
      description:
        "Wrong is done, and the text reports it here without answering it here. Kept apart from judgment because the difference is exactly whether there is anything to do about it yet.",
    },
    {
      name: "temptation",
      description: "Someone is urged toward wrong, whether they go or not.",
    },
    {
      name: "deception",
      description:
        "Someone is made to believe what is not so - by a lie, a disguise, a substitution, or a withheld truth.",
    },
    {
      name: "revelation",
      description:
        "God or His messenger discloses something: an appearance, a dream, a vision, a word, or the reading of one.",
    },
    {
      name: "sign_sought",
      description:
        "A person asks for a token before acting, and waits on the answer.",
    },
    {
      name: "word_fulfilled",
      description:
        "Something said earlier comes to pass. The saying may be in another event, or in another book.",
    },
    {
      name: "naming",
      description:
        "A name is given - to a place, a child, an altar, a person - marking what was just understood.",
    },
    {
      name: "intercession",
      description:
        "Someone pleads with God or with a ruler on another's behalf.",
    },
    {
      name: "provision",
      description:
        "A need is met: a well, food, a ram, grain, a place to live.",
    },
    {
      name: "rescue",
      description:
        "Someone is taken out of danger they could not get out of themselves.",
    },
    {
      name: "conflict",
      description: "A dispute, a quarrel, or violence between people.",
    },
    {
      name: "reconciliation",
      description: "A breach between people is healed.",
    },
    {
      name: "journey",
      description:
        "A setting out, a travelling, or an arriving, where the going itself is what happens.",
    },
    {
      name: "marriage",
      description: "A household is joined, or a betrothal agreed.",
    },
    {
      name: "birth",
      description: "A child is born.",
    },
    {
      name: "death",
      description: "A life ends, with what is done about it.",
    },
    {
      name: "inheritance",
      description:
        "What passes from a father to a son is settled - a birthright, a blessing, an estate, a place among brothers.",
    },
    {
      name: "offering",
      description:
        "Something is brought to God: an altar built, a sacrifice made, a portion given.",
    },
    {
      name: "worship",
      description: "God is called on or bowed to, with nothing brought.",
    },
    {
      name: "taken",
      description: "God removes someone from the earth without their dying.",
    },
    {
      name: "boast",
      description:
        "A person declares their own strength or their own vengeance.",
    },
    {
      name: "law",
      description:
        "A rule is laid down that binds after the moment ends and is addressed to whoever comes under it, rather than to one person about one thing. Kept apart from command, which is one person told one thing, and from covenant, which is sworn between two parties.",
    },
    {
      name: "obedience",
      description:
        "A command given in an earlier event is carried out here, as its own event. Where the telling and the doing are one scene, command already covers it; this word is for where the text separates them, and makes the doing the thing being reported.",
    },
    {
      name: "presence",
      description:
        "God comes to be with a people, or goes with them, or withdraws from them. Kept apart from revelation, which is about what is made KNOWN; this is about who is THERE.",
    },
    {
      name: "grumbling",
      description:
        "A people or a person accuses the one who delivered them of having brought them into harm. Not transgression, because the text usually answers it with provision rather than with judgment.",
    },
    {
      name: "hardening",
      description:
        "A heart is set against a word and will not turn - whether the text says the man hardened it or that God hardened it. It is one kind because Scripture uses both sayings of the same Pharaoh.",
    },
    {
      name: "consecration",
      description:
        "A person, a day, or a thing is set apart for God and so taken out of ordinary use. Kept apart from offering, where the thing is handed over and gone.",
    },
  ];
  ("THE SIX WORDS AFTER boast WERE ADDED BY EXODUS, and each one is a finding rather than a tidying. Genesis needed no word for a block of law, none for a doing reported apart from its telling, none for God dwelling with a people, none for a rescued people accusing their rescuer, none for a will that will not turn, and none for a thing set apart. Their absence from Genesis is as much a reading of Genesis as their presence here is of Exodus.");
  return kinds;
}
