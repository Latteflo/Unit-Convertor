function getInputValue() {
  let inputVal = document.getElementById("input").value;
  let inputEl = document.getElementById("inputNr");
  inputEl.innerHTML = inputVal;

  let usedNr = parseInt(inputVal);
  let lenghtParagraph = document.getElementById("lenght");
  let feetCalculation = `${Math.round(usedNr * 3.281)}`;
  let metersCalculation = `${Math.round(usedNr / 3.281)}`;
  lenghtParagraph.innerHTML = `${usedNr} meters = ${feetCalculation} feet | ${usedNr} feet = ${metersCalculation} meters`;

  let volumeParagraph = document.getElementById("volume");
  let litersCalculation = `${Math.round(usedNr * 3.785411784)}`;
  let gallonsCalculation = `${Math.round(usedNr / 3.785411784)}`;
  volumeParagraph.innerHTML = `${usedNr} liters = ${gallonsCalculation} gallons | ${usedNr} gallons = ${litersCalculation} liters`;

  let massCalculation = document.getElementById("mass");
  let kilosCalculation = `${Math.round(usedNr / 2.2046)}`;
  let poundsCalculation = `${Math.round(usedNr * 2.2046)}`;
  massCalculation.innerHTML = `${usedNr} kilos = ${poundsCalculation} pounds | ${usedNr} pounds = ${kilosCalculation} kilos`;
}
