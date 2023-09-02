import {proxy} from "valtio"

const state = proxy({
    dark: false,
    intro: true,
    colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
    color:  '#353934'

})

export default state;