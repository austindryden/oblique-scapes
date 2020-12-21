import React from "react";

export default function About({handleClick, colorMode}){
    // let colorStyle = colorMode ? {"backgroundColor" :"rgba(68,119,174,0.6)"} : {"backgroundColor" :"rgba(0,0,0,0.4)"};
    return(<div onClick={handleClick} className={colorMode ? "about-popover popoverColor" : "about-popover popoverBW"} style={colorMode ? {"backgroundColor" :"rgba(68,119,174,0.6)"} : {"backgroundColor" :"rgba(0,0,0,0.4)"}}>
<div className="aboutCopy">
<h2>Taking Play Mountain (by Strategy) by Austin Dryden</h2>
<h3>an app, born out of writers block, to escape writers block</h3>
<br />Sometimes, the best solutions come from changing your perspectives, and to challenge your own conventional thinking. If an answer can’t be found, maybe change the question entirely. Every day, dilemmas without obvious solutions present themselves. Over the years, whenever I’ve found myself with small scale situations without obvious answers, I’ve relied on a few different methods to shake up my thought processes. While struggling to come up with an idea for this project, I found myself thinking about two artistic projects, in particular : “Oblique Strategies”, by Brian Eno and Peter Schmidt, and “Play Mountain”, by Isamu Noguchi. Both works are based in the idea of freeing your mind from normal thought patterns, so even if its not the most obvious pairing to most, to me, they feel of a similar kind. <br />

<br />The concept of “Play Mountain” was something that drove Isamu Noguchi’s thoughts his entire career. This idea, instead of equipment that demanded to be used in particular ways, that playgrounds could be open ended explorations, designed to foster creativity in budding minds, informed many of his works, even if he never got to see “Play Mountain” itself realized in his lifetime. The only one of his playgrounds he ever got to see finished is in Atlanta, and it has always been a place for deep meditative contemplation for me.<br />

<br />The Noguchi Playscapes in Piedmont Park was commissioned in 1975, the same year Brian Eno and Peter Schmidt published the first edition of “Oblique Strategies”. After years of working on similar projects for their own personal use, the two combined and refined those works, and that became “Oblique Strategies”. For both of them, the work started as a sets of sayings meant to jog the brain, while working through professional pressure, as either a painter or a musician. Sometimes, its something to ground the reader, and other times, meant to challenge the reader to think in new ways. Short fragments. Incomplete thoughts. Challenges, meant to break the mind of a stuck pattern. The lightest, but sometimes perfect, nudge. <br />

<br />There's a certain tranquility to sitting in a park meant to challenge thoughts, and whenever my brain can’t wrap itself around a problem, I’ve always found new solutions, sitting, waiting for me in this odd, brutalist park full of sharp angles and giant concrete blocks, painted bright colors. The juxtaposition of harsh, but colorful always speaks to me, but I never quite know what its going to say until its been said. A deck of oblique strategies challenges my brain in similar ways. Both very minimal, and very direct. A framework for my mind to complete, with new perspective waiting on the other end.<br />

<br />After relying on both of these proven techniques to brainstorm for a project, I realized the answer was right in front of me. After sitting in the park for a good while, staring off, and thumbing through some cards, it all came together in my head in a matter of seconds. While it all seems quite simple, this project, born out of an intense lack of creative thought, is designed to honor the intentions of both of the projects that inspired it, and to help foster new, creative thoughts if I find myself stuck again. The minimalism of both is intended to let the users mind fill in the gaps, in new ways, and that informed the basic, brutalist, minimal design here. Hopefully, “Taking Play Mountain (By Strategy)” can inspire creativity in others, while giving me a simple, meditative tool to center myself when I need it.<br />

<br />All photos by me.<br />
“Oblique Strategies” text by Brian Eno and Peter Schmidt.<br />
“Playscapes” playground by Isamu Noguchi.<br />
</div>   </div>) 
}