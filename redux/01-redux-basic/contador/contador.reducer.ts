import { Action } from "../ngrx-fake/ngrx";

export function contadorReducer(oldState = 10, action: Action) {
    switch (action.type) {

        case 'reset':
            return 0;

        case 'divisor':
            return oldState / action.payload;

        case 'multiplicador':
            return oldState * action.payload;

        case 'incrementar':
            return oldState + 1;

        case 'decrementar':
            return oldState - 1;

        default:
            return oldState;
    }
}