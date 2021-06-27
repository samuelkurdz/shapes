export const setCurrentUser = (text: string) => ({
  type: 'setUser',
  payload: text,
});

export const removeUser = (id: string) => ({
  type: 'removeUser',
  payload: id,
});
