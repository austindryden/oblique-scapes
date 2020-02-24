Taking Play Mountain (By Strategy) by Austin Dryden
An app, born out of writers block, to escape writers block.

While this seems like a relatively basic React app that simply pairs photos with text, its certainly slightly more than that!

# About this project
- Clicking this button pops open a new react component with an essay explaining the thoughts behind the project. Depending on what color mode you are in, the backgroud will be greyscale, or not.

Color mode
- Clicking this button alternates between black and white, or full color. the two color modes are accomplished via ternary operators modifying the styling of particular elements across the whole app.

# Draw a card
- Clicking this button draws a card, which is a randomly selected photo of the Playscape park, paired with a randomly selected "Oblique Strategies" card text, pulled from an "Oblique Strateges" API.

# back/forward
- Moves through the stack of cards that have already been generated. While moving through the stack, if the user draws another card, it is inserted at that point in the stack, instead of just the top.
