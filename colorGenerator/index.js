// Color Scheme Generator
// Pick a seed color and a scheme mode, ask thecolorapi.com for a matching palette,
// show the colors as swatches, and let the user copy any hex code with one click.

// Only accept values that look like a hex color (for example #1a2b3c) before putting them into the page
const HEX_PATTERN = /^#[0-9a-f]{6}$/i

document.getElementById('color-btn').addEventListener('click', async function () {
    // The color input gives "#rrggbb"; the API wants the hex without the "#"
    const colorHex = document.getElementById('color').value.substring(1)
    const schemeMode = document.getElementById('mode').value

    try {
        // URLSearchParams makes sure the values are safely encoded in the URL
        const params = new URLSearchParams({ hex: colorHex, mode: schemeMode })
        const response = await fetch(`https://www.thecolorapi.com/scheme?${params}`)
        if (!response.ok) throw new Error(`Color API responded with status ${response.status}`)
        const data = await response.json()

        // Turn the API's color objects into a plain list of hex strings, dropping anything unexpected
        const colorArray = data.colors
            .map(color => color.hex.value)
            .filter(hex => HEX_PATTERN.test(hex))

        renderColors(colorArray)
        renderHexButtons(colorArray)
    } catch (error) {
        // Network problems and bad responses end up here; show a message instead of failing silently
        console.error(error)
        document.getElementById('color-display').textContent = 'Could not load a color scheme. Please try again.'
        document.getElementById('footer').innerHTML = ''
    }
})

// Draws one colored block per color in the scheme
function renderColors(colorArray) {
    let html = ''
    for (const color of colorArray) {
        html += `<div class="container">
                    <div class="colors" style="background-color:${color};">
                    </div>
                </div>`
    }
    document.getElementById('color-display').innerHTML = html
}

// Draws one button per color; clicking a button copies that hex code
function renderHexButtons(colorArray) {
    let html = ''
    for (const hex of colorArray) {
        html += `<div class="hex-colors">
                    <div class="hex-btn">
                        <button class="hex-copy" value="${hex}">${hex}</button>
                    </div>
                </div>`
    }
    const footer = document.getElementById('footer')
    footer.innerHTML = html
    // Attach the click handlers after the buttons exist (instead of inline onclick attributes)
    footer.querySelectorAll('.hex-copy').forEach(button => {
        button.addEventListener('click', () => copyToClipboard(button))
    })
}

// Copies the button's hex code and briefly shows "Copied!" on the button
async function copyToClipboard(button) {
    const original = button.textContent
    try {
        await navigator.clipboard.writeText(button.value)
        button.textContent = 'Copied!'
    } catch (error) {
        // Clipboard access can be blocked (for example on non-HTTPS pages)
        console.error(error)
        button.textContent = 'Copy failed'
    }
    // Put the hex code back after a moment
    setTimeout(() => { button.textContent = original }, 1200)
}
