Investigate the feasibility of using react-konva.

| TASK                                    | RESULT                 |
| --------------------------------------- | ---------------------- |
| Display rectangle                       | yes                    |
| Editable text inputs                    | see workarounds below  |
| Dynamic arrows                          | yes                    |
| Arrows need to be grouped with shapes   | yes                    |


Challege:
  Konva renders graphic primitives to the HTML5 canvas. Options to display
  html components like 	`textarea`

  1. Absolute positioning and style trickery: we have to utilize some trickery.
     That is, create a html component and use absolute positioning with CSS to
     put it in the appropriate location calculated from the primitive's location.

  2. Render DOM object on canvas as specified by
     [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Drawing_DOM_objects_into_a_canvas)
