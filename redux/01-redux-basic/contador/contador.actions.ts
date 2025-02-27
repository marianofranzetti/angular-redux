//usar el reducer 

import { Action } from "../ngrx-fake/ngrx"


export const incrementadorAction : Action = {
    type: 'incrementar'
}

export const decrementadorAction : Action = {
    type: 'decrementar'
}

export const multiplicadorAction : Action = {
    type: 'multiplicador',
    payload: 2
}

export const resetAction : Action = {
    type: 'reset'
}

export const divisorAction : Action = {
    type: 'divisor',
    payload: 2
}



