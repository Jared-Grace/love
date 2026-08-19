export function bless_rungs() {
  "The prayer ladder, lowest first - how far a blessing reaches out from the one person";
  "the player can see.";
  "Every prayer is the SAME act: look at somebody and pray for them. A rung never changes";
  "what the player does, only how far it carries - 'God save and bless this person and";
  "everyone in their block', then 'in their city', then 'in their country'. The place is";
  "reached THROUGH the person, and is named as belonging to them, so the player never has";
  "to see it, stand in it, or be able to name it. That is why a continent is prayable";
  "without a view from orbit, and why sight is owed to a face and to nothing else.";
  "The list is the whole rule. Each rung is made of the rung below it, so containment is";
  "the ORDER and is not written down twice - the one above a name is what a place of that";
  "name belongs to.";
  "EARNING a rung and SPENDING it are different prices, and the ladder would read as";
  "either far too cheap or far too dear if they were confused. A rung is EARNED once, by";
  "covering every unit of the rung below across one whole container - every building in the";
  "block earns the block. It is then SPENT anywhere, for one journey and one person: a";
  "player who has earned the country rung reaches each further country by travelling there";
  "and blessing a single someone. So the depth is worked once, at home, and the breadth is";
  "the reward.";
  "Every rung nests strictly, and that is a requirement rather than a tidiness: the game";
  "always applies the LARGEST rung owned, so one number has to name exactly one scope. Two";
  "chains, or one rung that sits across two containers, and 'the largest' stops meaning";
  "anything. A STREET is the casualty of that rule and is deliberately absent - a street";
  "runs BETWEEN two blocks rather than inside one, so it is a thing the player walks and";
  "never a thing they bless.";
  "The rungs are also the ITINERARY, and each one FACTORS the travel it costs. Dropping a";
  "rung does not remove its work; it multiplies that work into the rung above - take away";
  "state, and earning country demands every county in it. So more rungs mean LESS work";
  "each and more kinds of place seen, and the rule that picks them is that no rung should";
  "hold much more than about fifty of the rung below. That is the whole reason region";
  "exists: it factors the countries that carry too many states to sit under one.";
  let rungs = [
    "person",
    "household",
    "building",
    "block",
    "neighborhood",
    "district",
    "settlement",
    "county",
    "state",
    "region",
    "country",
    "continent",
    "world",
  ];
  return rungs;
}
