function getInputValue(inputId) {
    const getField = document.getElementById(inputId);
    const getValue = getField.value;
    const getResult = parseFloat(getValue)
    getField.value = ''
    return getResult;
}

function areaValue(elementId,area) {
    const areaOutput = document.getElementById(elementId);
    areaOutput.innerText = area;
}

function historyValue(areaType,area) {
    console.log(areaType,area);
    const historyContainer = document.getElementById('history-entry');
    const count = historyContainer.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4')
    p.classList.add('font-bold')
    p.classList.add('pl-5')
    p.innerHTML = `${count+1}. ${areaType} ${area} cm<sup>2</sup>`;
    historyContainer.appendChild(p)
}