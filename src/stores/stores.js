// import { readable } from "svelte/store";

// let navigation = [{name:'stat'},{name:'not stat'}]

// export const nav = navigation;
import { readable } from "svelte/store";
let navigation = {isOpen:true,nav:[{name:'stat'},{name:'not stat'}]}
export {navigation}