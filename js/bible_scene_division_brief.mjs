export function bible_scene_division_brief() {
  "The whole brief for deciding what a scene is: the unit that gets read aloud and rendered once, how it is addressed, and what happens where several books tell the same thing.";
  "★ THIS IS THE ONE ASSET THAT SURVIVES EVERY CHOICE NOT YET MADE. Still pictures, moving ones, three dimensions, a game or no game - all of them need to know where a scene starts and stops, and none of them changes the answer. So it can be settled now, while rendering cannot, and settling it is the only work here that cannot be wasted by a later change of mind.";
  "★ THE SHAPE ALREADY EXISTS AND THE DISCIPLINE FOR FILLING IT DOES NOT. A gathered event is a title and a list of passages, and there are 248 of them across Genesis, Exodus and Numbers. Thirteen hold more than one passage - and every single one of those is a run of adjacent chapters, a scene the chapter division happened to cut in half. So the container that would hold four Gospel accounts of one afternoon has never once been used for that, and anybody reading the data and concluding the question is answered has read thirteen chapter repairs.";
  "★ NO GOSPEL IS GATHERED YET, WHICH IS WHY THIS IS CHEAP TODAY AND EXPENSIVE LATER. The corpus is three books of the Law. Gathering a Gospel under the wrong rule would create some hundreds of scenes that somebody then has to re-cut by hand, and re-cutting is exactly the work that never gets scheduled. Decide first, gather second.";
  "★ A SCENE IS WHAT IS READ ALOUD, AND THAT SETTLES MOST OF THE QUESTION BY ITSELF. The reading is already fixed elsewhere as the foundation of delivering a word, and it is what a cutscene is built on too. Nobody can read four accounts aloud at once. So a scene has exactly one reading, and a scene assembled out of parallel accounts would force somebody to choose which account is the one heard - a decision about Scripture wearing the clothes of a decision about rendering.";
  "★ SCENES DIVIDE BY TEXT AND DEPICTIONS CONSOLIDATE BY SUBJECT, WHICH IS HOW BOTH THINGS ARE HAD AT ONCE. The feeding of the five thousand is four scenes because it is four readings, and it is one hillside, one boy, one basket of loaves, one face of Jesus, because a depiction is not a text. That way nothing is flattened - Mark keeps his green grass and John keeps his boy - and the drawing is still made once. The saving people hope to get from a harmony is real, and it lives in the depictions rather than in the text.";
  "That is also where the character designs live, and why designing them is not wasted at any rendering level. A design carries from a still to a moving picture to a modelled one - a figure sculpted from turnaround drawings is the ordinary way that is done - even though not one rendered frame carries. Consistency from picture to picture is a property of the design and not of the pictures, so it is settled once, in the depictions, and every scene that names a figure gets it.";
  "An account only one book carries is not a special case under this rule. It is one reading, so it is one scene, exactly like the other three.";
  let brief = {
    step: "scene division",
    what: "the unit that is read aloud once and rendered once, and how it is addressed",
    settled:
      "a scene has exactly one reading; the accounts differ and the differences are Scripture; the existing shape is a title with a list of passages",
    open: "how a depiction is addressed and shared between scenes; whether a scene names its depictions or a depiction names its scenes; how a scene too long to hear in one sitting is handled",
    forbidden:
      "merging parallel accounts into one text; picking one account as the true one; a scene with two readings; gathering a Gospel before this is decided",
    done: "every Gospel can be gathered without later re-cutting, and one afternoon on a hillside is drawn once while being read four times",
  };
  return brief;
}
