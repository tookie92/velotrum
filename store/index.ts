import {proxy} from "valtio"

const state = proxy({
    dark: false,
    intro: true
})

export default state;