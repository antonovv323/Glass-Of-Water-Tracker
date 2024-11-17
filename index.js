let glassCount = document.getElementById("glass-count-el")
let waterEntriesEl = document.getElementById("water-entries-el")
let count = 0

function addGlass() {
    count += 1
    glassCount.textContent = count
}

function save() {
    let countStr = count + " - "
    waterEntriesEl.textContent += countStr
    glassCount.textContent = 0
    count = 0
}

function reset() {
    waterEntriesEl.textContent = "Previous Glasses of Water Entries: "
    glassCount.textContent = 0
    count = 0
}
