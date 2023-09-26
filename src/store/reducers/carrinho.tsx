import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type carrinhoState = {
  itens: Produto[]
}

const initialState: carrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,

  reducers: {
    adicionarCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      switch (state.itens.some((p) => p.id === produto.id)) {
        case true:
          alert('Item já adicionado')
          break
        default:
          state.itens.push(produto)
          break
      }
    }
  }
})

export const { adicionarCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
