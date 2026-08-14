import { object_property_names } from "./object_property_names.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function word_root_irregulars_built() {
  "Every English word whose root cannot be reached by cutting an ending off it, paired with the root it belongs to.";
  "Written the readable way round - one root, then the forms that belong to it - and turned inside out before it is handed back, because every reader of this wants to go from a form to its root.";
  "It is deliberately small. What it serves is one closed body of text, the Bible passages being written on, so the forms worth carrying are the ones those passages actually use. A whole-of-English lemma list answers a general problem this does not have, and would put a third party's data file, under terms that are not plainly ours to publish, into a public repository.";
  "Two forms of one word are left out on purpose where they collide: lay is the past of lie and also a word of its own, so laid is joined to lay and lie is left alone. A wrong join is worse than a missing one, because a missing join only fails to notice a match while a wrong one invents one.";
  "A word is also written here to HOLD it apart from an ending that would otherwise swallow it, because this list is read before any ending is cut. Passion would give up its ion and become pass, and authority would give up its ity and become author, which is a different word entirely - both are frozen here instead of the ending being thrown away over them. That is the trade the whole ending list rests on: an ending that is right far more often than it is wrong is kept, and the handful of words it would ruin are named.";
  "The words ending f that take ves in the plural are here because no rule can reach them - loves, gives and believes end in ves too, and a rule that turned wives into wife would turn loves into lofe. Two of that family are left out for the collision above: lives is as often the verb live as the plural of life, and leaves is as often the verb leave as the plural of leaf, so life and leaf are left unjoined rather than joined wrongly.";
  let groups = {
    be: "am are is was were been being",
    have: "has had having",
    do: "does did done doing",
    say: "says said saying",
    go: "goes went gone going",
    make: "makes made making",
    know: "knows knew known knowing",
    take: "takes took taken taking",
    see: "sees saw seen seeing",
    come: "comes came coming",
    give: "gives gave given giving",
    man: "men",
    woman: "women",
    child: "children",
    person: "people",
    foot: "feet",
    tooth: "teeth",
    ox: "oxen",
    teach: "taught teaches teaching",
    bring: "brings brought bringing",
    think: "thinks thought thinking",
    speak: "speaks spoke spoken speaking",
    write: "writes wrote written writing",
    hear: "hears heard hearing",
    lead: "leads led leading",
    leave: "leaves left leaving",
    send: "sends sent sending",
    build: "builds built building",
    find: "finds found finding",
    hold: "holds held holding",
    keep: "keeps kept keeping",
    stand: "stands stood standing",
    understand: "understands understood understanding",
    tell: "tells told telling",
    sell: "sells sold selling",
    buy: "buys bought buying",
    fall: "falls fell fallen falling",
    rise: "rises rose risen rising",
    eat: "eats ate eaten eating",
    drink: "drinks drank drunk drinking",
    run: "runs ran running",
    begin: "begins began begun beginning",
    become: "becomes became becoming",
    break: "breaks broke broken breaking",
    choose: "chooses chose chosen choosing",
    forgive: "forgives forgave forgiven forgiving",
    forget: "forgets forgot forgotten forgetting",
    get: "gets got gotten getting",
    grow: "grows grew grown growing",
    lay: "lays laid laying",
    lose: "loses lost losing",
    pay: "pays paid paying",
    seek: "seeks sought seeking",
    sit: "sits sat sitting",
    sleep: "sleeps slept sleeping",
    throw: "throws threw thrown throwing",
    wear: "wears wore worn wearing",
    win: "wins won winning",
    good: "better best",
    bad: "worse worst",
    wife: "wives",
    knife: "knives",
    thief: "thieves",
    wolf: "wolves",
    calf: "calves",
    half: "halves",
    loaf: "loaves",
    shelf: "shelves",
    self: "selves",
    staff: "staves",
    brother: "brethren",
    passion: "passions passionate",
    authority: "authorities",
    author: "authors",
    die: "died dying",
    lie: "lied lying",
  };
  let roots = {};
  function group_take(root) {
    let forms = text_split_space(groups[root]);
    function form_take(form) {
      roots[form] = root;
    }
    forms.forEach(form_take);
    roots[root] = root;
  }
  object_property_names(groups).forEach(group_take);
  return roots;
}
