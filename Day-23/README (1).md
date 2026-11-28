# Day 23: A two-message interaction

- Fictional activity and why these two messages help a visitor: The page is a cosmetic tutorial about creating a smoky-eye look. The two messages shows how the page can change the information shown to a visitor.
- My button ID and paragraph ID: The button ID is details-button, and the paragraph ID is `activity-message`.
- My Boolean variable and what each value means: `showDetails` tracks whether the detailed message is showing. `false` means the summary message is showing; `true` means the detailed message is showing.
- My function name and the parameter it receives: `getHubMessage` receives `isDetailed`, a Boolean that determines which message it returns.
- Trace one activation from event to returned message to visible result: Clicking `details-button` runs `handleDetailsClick`. It changes `showDetails` from `false` to `true`, calls `getHubMessage(true)`, and puts the returned "Cosmetic content." message in `activity-message`. The button label changes to "Show summary."
- What `defer` helps with in this page: It waits to run `script.js` until the HTML has been parsed, so the script can find the page elements.
- Any repair, retest, or unfinished part: The script declares `normalText` but later refers to `cosmeticText`. That name mismatch causes an error in the browser before the click handlers are registered. Change the reference to `normalText` and test the page in a browser. This script uses browser features such as `document`, so it is not meant to run directly with Node.js.

## How I opened the page

I opened `index.html` in a web browser. The HTML file loads `script.js` with the `defer` attribute.
