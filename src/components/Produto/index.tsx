import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { Produto as ProdutoType } from '../../App'
import { addFavoritos } from '../../store/reducers/favoritos'
import { adicionarCarrinho } from '../../store/reducers/carrinho'

export type PropsFav = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: PropsFav) => {
  const dispatch = useDispatch()

  const [estaNosFavoritado, setEstaNosFavoritado] = useState(false)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => {
          dispatch(addFavoritos(produto))
          setEstaNosFavoritado(!estaNosFavoritado)
        }}
        type="button"
      >
        {estaNosFavoritado
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(adicionarCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
