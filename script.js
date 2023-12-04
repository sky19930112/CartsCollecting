
// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Function to count steps required to move carts to the 4th row
function calculateSteps(topRows) {
  let capability = 8
  let totalSteps = 0;
  let carts = topRows.map(row => parseInt(row.textContent)); // Extracting cart values
  console.log(carts)


    while (carts[0] > 0) {
      if (carts[0] > 8) {
        totalSteps += 6;
        carts[0] -= 8;
      } else {
        totalSteps += 3;
        carts[1] += carts[0]
        carts[0] = 0;
      }
    }
    while (carts[1] > 0) {
      if (carts[1] > 8) {
        totalSteps += 4;
        carts[1] -= 8;
      } else {
        totalSteps += 2;
        carts[2] += carts[1]
        carts[1] = 0;
      }
    }
    while (carts[2] > 0) {
      if (carts[2] > 8) {
        totalSteps += 1;
        carts[2] -= 8;
      } else {
        totalSteps += 1;
        carts[2] = 0;
      }
    }
  

  console.log(carts)
  return totalSteps;
}


// Function to insert random numbers followed by "carts" in top 3 rows and calculate steps
function moveCarts() {
  const grid = document.getElementById('grid');
  grid.innerHTML = ''; // Clear the grid

  let topRows = [];

  // Filling the grid with random numbers followed by "carts" in top 3 rows
  for (let i = 0; i < 4; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    const randomNumber = getRandomNumber(0, 10);

    if (i < 3) {
      cell.textContent = randomNumber.toString() + ' carts';
      topRows.push(cell); // Storing top row cells for steps calculation
    } else {
      cell.textContent = ''; // Clearing previous steps
      const steps = calculateSteps(topRows);
      cell.textContent = `Steps: ${steps}`;
    }

    grid.appendChild(cell);

  }
}




