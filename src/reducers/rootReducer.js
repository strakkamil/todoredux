const TYPES = {
  CRITICAL: 'critical',
  IMPORTANT: 'important',
  OPTIONAL: 'optional'
}
const initState = {
  critical: [
    {
      title: 'Wyjdź z psem',
      type: TYPES.CRITICAL,
      time: "2020-12-07",
      description: 'Burek musi na spacerek'
    },
    {
      title: 'Ogarnij reduxa',
      type: TYPES.CRITICAL,
      time: "2019-12-07",
      description: 'czas leci a tu contex api'
    }
  ],
  important: [
    {
      title: 'Umyj naczynia',
      type: TYPES.IMPORTANT,
      time: "2030-12-07",
      description: 'Nie no jeszcze są czyste, niektóre talerze'
    },
  ],
  optional: [
    {
      title: 'dodaj tu jakaś funkcjonalność',
      type: TYPES.OPTIONAL,
      time: "2020-12-21",
      description: 'albo zacznij coś nowego'
    },
  ],
  type: 'critical'
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return ({
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType].filter(item => item.title !== action.payload.title)]
      })
    case 'ADD_ITEM':
      return ({
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.itemContent]
      })
    case 'CHANGE_TYPE':
      return ({
        ...state,
        type: action.payload.itemType
      })
    default:
      return state
  }
}

export default rootReducer