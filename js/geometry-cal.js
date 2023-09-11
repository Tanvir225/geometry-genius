document.getElementById('triangle-calculation').addEventListener('click',function () {
    const baseValue = getInputValue('base-input');
    const heightValue = getInputValue('height-input');
    if (isNaN(baseValue) || isNaN(heightValue)) {
        confirm('please enter a number')
        return;
    }
    const triangleArea = 0.5*baseValue*heightValue;
    const area = areaValue('triangle-area',triangleArea);


    const history  = historyValue('Triangle',triangleArea);
})

document.getElementById('rectangale-calculation').addEventListener('click',function () {
    const widthValue = getInputValue('width-input');
    const lengthValue = getInputValue('length-input');
    
    if (isNaN(widthValue) || isNaN(lengthValue)) {
        confirm('please enter a number')
        return;
    }
    const recArea = widthValue*lengthValue;
    const area = areaValue('rectangale-area',recArea);
    
    const history  = historyValue('Rectangale',recArea);
})

document.getElementById('pentagon-calculation').addEventListener('click',function () {
    const pValue = getInputValue('p-input');
    const bValue = getInputValue('b-input');
    
    if (isNaN(pValue) || isNaN(bValue)) {
        confirm('please enter a number')
        return;
    }

    const pentagonArea = 0.5* pValue*bValue;
    const area = areaValue('pentagon-area',pentagonArea);
    
    const history  = historyValue('Pentagon',pentagonArea);
})

document.getElementById('ellipse-calculation').addEventListener('click',function () {
    const aValue = getInputValue('a-input');
    const eValue = getInputValue('e-input');
    
    if (isNaN(aValue) || isNaN(eValue)) {
        confirm('please enter a number')
        return;
    }

    const ellipseArea = 3.1416 * aValue *eValue;
    const areaEllipse = ellipseArea.toFixed(2)
    const area = areaValue('ellipse-area',areaEllipse);
    
    const history  = historyValue('Ellipse',areaEllipse);
})

document.getElementById('rhombus-calculation').addEventListener('click',function () {
    const d1Value = getInputValue('d1-input');
    const d2Value = getInputValue('d2-input');
    
    if (isNaN(d1Value) || isNaN(d2Value)) {
        confirm('please enter a number')
        return;
    }

    const rhombusArea = 0.5 * d1Value *d2Value;
    const areaRhombus = rhombusArea.toFixed(2)
    const area = areaValue('rhombus-area',areaRhombus);

    const history  = historyValue('Rhombus',areaRhombus);
})

