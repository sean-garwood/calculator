# Calculator

This is a browser-based calculator that is built to the [specification of The
Odin Project](https://www.theodinproject.com/lessons/foundations-calculator).

# Completed

- Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
  - add
  - subtract
  - multiply
  - divide

- Create a new function operate that takes an operator and 2 numbers and then
  calls one of the above functions on the numbers.

- Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
  - Do not worry about wiring up the JS just yet.
  - There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
  - Add a “clear” button.

- Create the functions that populate the display when you click the number
  buttons. You should be storing the ‘display value’ in a variable somewhere for
  use in the next step.

  - Pressing “clear” should wipe out any existing data.. make sure the user is
    really starting fresh after pressing “clear”
  
  - Display a snarky error message if the user tries to divide by 0… and don’t let
    it crash your calculator!
  - Users can get floating point numbers if they do the math required to get
    one, but they can’t type them in yet. Add a . button and let users input
    decimals! Make sure you don’t let them type more than one though: 12.3.56.5.
    It is hard to do math on these numbers. (disable the decimal button if
    there’s already one in the display)
  - Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
  
# todo

## Extra Credit

- Add a “backspace” button, so the user can undo if they click the wrong number.
- Add keyboard support! You might run into an issue where keys such as (/) might
  cause you some trouble. Read the MDN documentation for event.preventDefault to
  help solve this problem.

# known issues

backspace does not modify the value in memory.