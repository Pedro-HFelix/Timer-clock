import state from "./state.js";
import { appPage, minutes,seconds } from './elements.js';
import * as timer from './timer.js';
import { cafeteria, chuva, floresta, lareira } from './sounds.js';


function pauseSond() {
    chuva.pause()
    floresta.pause()
    lareira.pause()
    cafeteria.pause()
    state.Music = null
}

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
}


export function reset(){
    state.isRunning = false
    appPage.classList.remove('tree-on')
    appPage.classList.remove('rain-on')
    appPage.classList.remove('store-on')
    appPage.classList.remove('fire-on')

    pauseSond()
    document.documentElement.classList.remove('running')
}

export function plus(){
    state.minutes += 5
    if (state.minutes > 60) {
        return timer.updateDisplay(60)
    }
    timer.updateDisplay(state.minutes)
}

export function minus(){
    state.minutes -= 5

    if (state.minutes < 0) {
        return timer.updateDisplay(0,0)
    }
    timer.updateDisplay(state.minutes)
}

export function toggleMusictree() {
    appPage.classList.remove('rain-on')
    appPage.classList.remove('store-on')
    appPage.classList.remove('fire-on')
    
    

    state.Music = floresta
    floresta.play()

    appPage.classList.toggle('tree-on')
}

export function toggleMusicrain() {
    appPage.classList.remove('tree-on')
    appPage.classList.remove('store-on')
    appPage.classList.remove('fire-on')

    pauseSond()
    state.Music = chuva
    chuva.play()

    appPage.classList.toggle('rain-on')
}

export function toggleMusicstorefront() {
    appPage.classList.remove('tree-on')
    appPage.classList.remove('rain-on')
    appPage.classList.remove('fire-on')
    
    pauseSond()
    state.Music = cafeteria
    cafeteria.play()    

    appPage.classList.toggle('store-on')
}

export function toggleMusicfire() {
    appPage.classList.remove('tree-on')
    appPage.classList.remove('rain-on')
    appPage.classList.remove('store-on')
   
    pauseSond()
    state.Music = lareira
    lareira.play() 

    appPage.classList.toggle('fire-on')
}