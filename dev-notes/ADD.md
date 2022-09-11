# Add

## Problem

Need to add a todo

### Understanding

Have header on page.

Need Form
- input
- submission

Capture submit value
- POST
- Re-render page with todo

Constraints?
- Length

## Examples / Test Cases

todo -> 'Mow lawn'

## Data Structures

- String
- JSON

## Algorithm

1. Write UI test
  1. Get by placeholder text: `Create a new todo`
  2. Fire event for 'Mow lawn'
  3. Expect `Mow lawn` to be on the page
