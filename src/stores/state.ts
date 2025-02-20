// src/stores/state.ts
import type { Card } from '../types';

// Definizione degli stati
type StateKey = 'Initial' | `Card${'A' | 'B' | 'X' | 'C' | 'D' | 'Y' | 'Z'}` | `Explanation${'A' | 'B' | 'X' | 'C' | 'D' | 'Y' | 'Z'}`;

// Struttura dello stato
export interface State {
    current: StateKey;
    config: {
        enableExplanations: boolean;
    };
    data: {
        a: Card | null;
        b: Card | null;
        x: Card | null;
        c: Card | null;
        d: Card | null;
        y: Card | null;
        z: Card | null;
    };
}

// Schema delle transizioni
const stateMachine: Record<StateKey, { on: Record<string, StateKey | ((state: State) => StateKey)> }> = {
    Initial: { on: { START: (state) => state.config.enableExplanations ? 'ExplanationA' : 'CardA' } },
    ExplanationA: { on: { NEXT: 'CardA' } },
    CardA: { on: { NEXT: (state) => state.config.enableExplanations ? 'ExplanationB' : 'CardB' } },
    ExplanationB: { on: { NEXT: 'CardB' } },
    CardB: { on: { NEXT: (state) => state.config.enableExplanations ? 'ExplanationX' : 'CardX' } },
    ExplanationX: { on: { NEXT: 'CardX' } },
    CardX: { on: { NEXT: (state) => state.config.enableExplanations ? 'ExplanationC' : 'CardC' } },
    ExplanationC: { on: { NEXT: 'CardC' } },
    CardC: { on: { NEXT: (state) => state.config.enableExplanations ? 'ExplanationD' : 'CardD' } },
    ExplanationD: { on: { NEXT: 'CardD' } },
    CardD: { on: { NEXT: (state) => state.config.enableExplanations ? 'ExplanationY' : 'CardY' } },
    ExplanationY: { on: { NEXT: 'CardY' } },
    CardY: { on: { NEXT: (state) => state.config.enableExplanations ? 'ExplanationZ' : 'CardZ' } },
    ExplanationZ: { on: { FINISH: 'CardZ' } },
    CardZ: { on: { RESET: 'Initial' } }
};

// Funzione di transizione
export function transition(state: State, event: string, payload?: Partial<State['data']>) {
    const current = state;
    const next = stateMachine[current.current]?.on[event];
    if (!next) throw new Error(`Invalid transition from ${current.current} on event: ${event}`);
    
    const nextState = typeof next === 'function' ? next(current) : next;

    state.current = nextState;
    if (payload) {
        Object.assign(state.data, payload);
    }
}

// Configura l'opzione per abilitare/disabilitare le spiegazioni
export function configureOptions(state: State, enableExplanations: boolean) {
    state.config.enableExplanations = enableExplanations;
}