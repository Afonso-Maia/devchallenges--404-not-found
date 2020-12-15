import * as S from './styles'
import Imagewrapper from '../Imagewrapper'
import data from '../../data'

const Main = () => (
  <S.Wrapper>
    <Imagewrapper />
    <h2>{data.title}</h2>
    <p>{data.copy}</p>
    <button>{data.bntCopy}</button>
  </S.Wrapper>
)

export default Main
