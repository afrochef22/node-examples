const rectangle = require("./rectangle");
const rect = require("./rectangle");

function solveRect(l, w) {
	console.log(`Solving for rectangle with demensions: ${l}, ${w}`);

	rect(l, w, (err, rectangle) => {
		if (err) {
			console.log("ERROR:", err.message);
		} else {
			console.log(
				`Area of rectagle with demensions ${l}, ${w}: ${rectangle.area()}`
			);
			console.log(
				`Perimeter of rectangle with demensions ${l}, ${w}: ${rectangle.perimeter()}`
			);
		}
	});
	console.log("This statment is logged after the call to rect()");
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
