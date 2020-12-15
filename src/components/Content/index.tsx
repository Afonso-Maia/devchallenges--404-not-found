import * as S from './styles'
import data from '../../data'
import Main from 'components/Main'

const Content = () => (
  <S.Wrapper>
    <header>
      <h1>{data.heading}</h1>
    </header>
    <Main />
    <footer>
      <span>{data.email}</span>
    </footer>
  </S.Wrapper>
)

export default Content
