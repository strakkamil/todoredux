export const removeItem = (itemType, title) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    title
  }
})

export const addItem = (itemType, itemContent) => ({
  type: 'ADD_ITEM',
  payload: {
    itemType,
    itemContent
  }
})

export const changeType = (itemType) => ({
  type: 'CHANGE_TYPE',
  payload: {
    itemType
  }
})