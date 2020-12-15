import Image from 'next/image'
import * as S from './styles'
import data from '../../data'

const Imagewrapper = () => (
  <S.Wrapper>
    <Image
      className="image"
      src={data.img}
      alt={data.imgAlt}
      width={286}
      height={238}
    />
  </S.Wrapper>
)

export default Imagewrapper
