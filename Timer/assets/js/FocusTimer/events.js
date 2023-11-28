import { controls,musicControls } from './elements.js';
import * as actions from './actions.js';

export function registerControls() {
    musicControls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action]() !='function'){
            return
        }

        actions[action]()
    })

    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action]() !='function'){
            return
        }

        actions[action]()
    })

}