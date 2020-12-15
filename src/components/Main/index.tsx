import * as S from './styles'
import data from '../../data'
import Imagewrapper from '../Imagewrapper'

const Main = () => (
  <S.Wrapper>
    <h1>{data.heading}</h1>
    <Imagewrapper />
    <h2>{data.title}</h2>
    <p>{data.copy}</p>
    <button>{data.bntCopy}</button>
    <span>{data.email}</span>
  </S.Wrapper>
)

export default Main
