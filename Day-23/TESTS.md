# Day 23 test record

Record actual observations after testing your own page. If you find a problem, record the repair and repeat the affected check. Leave “Not yet tested” until you really run the check.

| Check                     | Expected behavior                                            | Actual observation                                                  | Repair and retest, if needed |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------- | ---------------------------- |
| Initial load/reload       | The first message is visible.                                | Tested                                                              | —                           |
| First activation          | The alternate useful message appears.                        | Tested                                                              | —                           |
| Second activation         | The exact first message returns.                             | Tested                                                              | —                           |
| Keyboard Tab              | The button receives visibly indicated focus.                 | Tested                                                              | —                           |
| Keyboard Enter            | The focused button switches the message.                     | Tested                                                              | —                           |
| Keyboard Space            | The focused button switches the message.                     | Tested                                                              | —                           |
| Narrow width around 320px | Text and button remain usable without horizontal scrolling.  | Tested<br />click, button text is on teh left not need to scroll.  |                              |
| Browser Console           | Reload and both states produce no uncaught JavaScript error. | Tested                                                              | Reload in Google             |

- Date and browser used: 11/27/2026
- Exact initial and alternate messages I verified: the initial text button is Get more cosmetic and then click and the text is get more eyeshadow
- One conclusion from these tests: Google gets the console print correctly while firefox has trouble reading it.
