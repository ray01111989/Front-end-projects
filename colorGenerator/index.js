let colorArray = []

document.getElementById('color-btn').addEventListener('click', function() {
    const colorHex = document.getElementById('color').value.substring(1)
    const schemeMode = document.getElementById('mode').value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${schemeMode}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            // this will make an array of the colors
            let colorArray = data.colors.map(color => {
                // console.log(data)
                return color.hex.value;
            })
            // one way to do it with for of loop
            // for(let color of data.colors){
            //     colorArray.push(color.hex.value)
            // }
            // for (let i=0; i < data.colors.length; i++) {
            //     colorArray.push(data.colors[i].hex.value)
            // }
            renderColors(colorArray)
            dis(colorArray)
            // colorArray = []
        })
})

function renderColors(colorArray) {
    document.getElementById('color-display').innerHTML = ""
    let html = ""
    for (let color of colorArray) {
        html += `<div class="container">
                    <div class="colors" style="background-color:${color};">
                    </div>
                </div>`
    }
    document.getElementById('color-display').innerHTML = html
}

// this function will copy to the clip board
function SelfCopy(copyText)
  {
     if (navigator.clipboard != undefined) {//Chrome
         navigator.clipboard.writeText(copyText).then(function () {
            alert('Async: Copying to clipboard was successful!');
        }, function (err) {
            alert('Async: Could not copy text: ', err);
        });
    }
    else if(window.clipboardData) { // Internet Explorer
        window.clipboardData.setData("Text", copyText);
        alert("You just copied this: (" + copyText + ").");
    }

  }

function dis(colorArray){
    document.getElementById('footer').innerHTML =  ""
    let html = ""
    colorArray.forEach((listItem) => {
        html += `<div class="hex-colors">
                    <div class="hex-btn">
                        <button id="myBtn" value = ${listItem} onClick="SelfCopy(this.value)" >${listItem}</button>
                    </div>
                </div>`
    })
    document.getElementById('footer').innerHTML = html
}
