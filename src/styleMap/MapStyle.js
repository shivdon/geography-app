import randomHexColor from "random-hex-color";

// FUNCTION TO STYLE THE MAP LAYOUT
export const style = () => {
    let mapStyling = {
        default: {
          fill: "#000000",
          outline: "none"
        },
        hover: {
          fill: randomHexColor(),
          outline: "none"
        },
        pressed: {
          fill: "#E42",
          outline: "none"
        }
    }

    return mapStyling
}

export default style;