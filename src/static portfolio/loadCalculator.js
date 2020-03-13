// Stretch Goals
// add conversion to kN 1kN to 224.80894lb
// add staticLoad characteristicLoad = totalMass * 10 whichever is greater

function characteristicLoad() {
  const performerMass = +document.getElementById('performer-mass').value;
  const apparatusMass = +document.getElementById('apparatus-mass').value;
  const totalMass = performerMass + apparatusMass;

  const dynamicFactor = +document.getElementById('dynamic-factor').value;

  let result = document.getElementById('result');

  let characteristicLoad = totalMass * dynamicFactor * 6;
  result.value = characteristicLoad;

  let conversion = document.getElementById('conversion');

  let kilonewtons = characteristicLoad / 224.80894;
  conversion.value = kilonewtons;
}

document.getElementById('calculate').addEventListener('click', characteristicLoad);
