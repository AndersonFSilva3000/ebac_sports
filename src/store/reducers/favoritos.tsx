import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type favoritoState = {
  favoritos: Produto[]
}

const initialState: favoritoState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,

  reducers: {
    addFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const index = state.favoritos.findIndex((p) => p.id === produto.id)

      switch (index) {
        case -1:
          state.favoritos.push(produto)
          break
        default:
          state.favoritos.splice(index, 1)
          break
      }
    }
  }
})

export const { addFavoritos } = favoritosSlice.actions

export default favoritosSlice.reducer
