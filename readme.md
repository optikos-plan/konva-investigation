Investigate the feasibility of using react-konva.

| TASK                                  | RESULT               |
| =====================                 | ======               |
| display rectangle                     | yes                  |
| editable text inputs                  | there's a plan       |
| dynamic arrows                        | evaluating           |
| arrows need to be grouped with shapes | possible, evaluating |


Notes:
  Konva handles rendering on the canvas by displaying graphic primitaves. In order to display
  html components like 	`textarea` we have to utilize some trickery. That is, create a html component
  and use absolute positioning with CSS to put it in the approapriate location calculated from
  primitive's location.


Arrows:
  use konva's Arrow primitive to make a generic arrow react component.
  starting pos:
  ending position:

  EVENTUALLY
	  start from this component and end at this other component

