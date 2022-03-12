// Constants

const STORAGE_KEY = "user-color-scheme"
const COLOR_MODE_PROP_KEY = "--color-mode"



// DOM Elements

let modeToggleButton = document.querySelector(".color-mode-toggle")



// Event Listeners

applySetting()

modeToggleButton.addEventListener("click", (event) => {
  event.preventDefault()
  applySetting(toggleSetting())
})



// Helpers

function getCSSCustomPropValue(propKey) {
  let value = getComputedStyle(document.documentElement).getPropertyValue(
    propKey
  )

  if (value.length) {
    value = value.replace(/\"/g, "").trim()
  }

  return value
}

function applySetting(passedSetting) {
  let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY)
  
  if (currentSetting) {
    document.documentElement.setAttribute(
      "data-user-color-scheme",
      currentSetting
    )
    setButtonLabel(currentSetting)
  } else {
    currentSetting = getCSSCustomPropValue(COLOR_MODE_PROP_KEY)
    document.documentElement.setAttribute(
      "data-user-color-scheme",
      currentSetting
    )
    setButtonLabel(currentSetting)
  }
}

function setButtonLabel(setting) {
  if (setting === "dark") {
    modeToggleButton.textContent = "Light mode"
  } else if (setting === "light") {
    modeToggleButton.textContent = "Dark mode"
  } else {
    modeToggleButton.textContent = "Toggle color mode"
  }
}

function toggleSetting() {
  let currentSetting = localStorage.getItem(STORAGE_KEY)

  switch (currentSetting) {
    case null:
      currentSetting =
        getCSSCustomPropValue(COLOR_MODE_PROP_KEY) === "dark" ? "light" : "dark"
      break
    case "light":
      currentSetting = "dark"
      break
    case "dark":
      currentSetting = "light"
      break
  }

  localStorage.setItem(STORAGE_KEY, currentSetting)

  return currentSetting
}
