import {
  COMPLETE_TODO, RESET,
} from '../constants/ActionTypes'

export const types = {
  EASY: 'Easy',
  ADVANCED: 'Advanced',
  SUPERADVANCED: 'Super Advanced',
}

export const getIDX = (todo) => {
  return initialState.indexOf(initialState.find(t => t.type === todo.type && t.text === todo.text))
}
export const initialState = [
  {
    type: types.EASY,
    text: '1. 10 min - no creeps missed (80+ lasthits minimum)',
    completed: false,
    id: 1
  },
  {
    type: types.EASY,
    text: `2. 10 min - 80 LH / 40 denies safelane.
  - Creeps can't enter either team's tower. if they do you reset`,
    completed: false,
    id: 2
  },
  {
    type: types.EASY,
    text: '3. 10 min - 100 LH',
    completed: false,
    id: 3
  },
  {
    type: types.EASY,
    text: '4. 30 min - 600 LH',
    completed: false,
    id: 4
  },
  {
    type: types.EASY,
    text: '5. <10 min - end the game (destroy enemy ancient)',
    completed: false,
    id: 5
  },
  {
    type: types.EASY,
    text: '6. 3000+ score in last hit trainer',
    completed: false,
    id: 6
  },


  {
    type: types.ADVANCED,
    text: '1. 10 min - 120 LH',
    completed: false,
    id: 7
  },
  {
    type: types.ADVANCED,
    text: `2. 30 min - 900 LH
    - No meepo.`,
    completed: false,
    id: 8
  },
  {
    type: types.ADVANCED,
    text: `3. 10 min - 100+ CS (LH+DN counts) as morphling
    - lvl 1 strength morph and never level anything again, turn it on and don't turn it off.
    - Buy a branch, a faerie and a wraith band.
    - You'll constantly have only ~25 damage.`,
    completed: false,
    id: 9
  },
  {
    type: types.ADVANCED,
    text: '4. <8 min - end the game (destroy enemy ancient)',
    completed: false,
    id: 10
  },
  {
    type: types.ADVANCED,
    text: '5. 3500+ score in last hit trainer',
    completed: false,
    id: 11
  },


  {
    type: types.SUPERADVANCED,
    text: "1. 10 min - 170 LH",
    completed: false,
    id: 12
  },
  {
    type: types.SUPERADVANCED,
    text: "2. 30 min - 1300 LH",
    completed: false,
    id: 13
  },
  {
    type: types.SUPERADVANCED,
    text: `3. 10 min - 120+ CS (LH+DN counts) as morphling
    - lvl 1 strength morph and never level anything again, turn it on and don't turn it off. 
    - Buy a branch, a faerie and a wraith band.
    - You'll constantly have only ~25 damage.`,
    completed: false,
    id: 14
  },
  {
    type: types.SUPERADVANCED,
    text: "4. <6 min - end the game (destroy enemy ancient)",
    completed: false,
    id: 15
  },
  {
    type: types.SUPERADVANCED,
    text: `5. 3600 score in last hit trainer, 2 times in a row.
    - No tiny, shaman, tree.`,
    completed: false,
    id: 16
  },
]



export default function todos(state = initialState, action) {
  switch (action.type) {
    case RESET:
      localStorage.clear();
      return initialState
    case COMPLETE_TODO:
      return state.map(todo =>
        getIDX(todo) === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    default:
      return state
  }
}
