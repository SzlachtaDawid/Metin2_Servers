import ninjaAnime from '../../../assets/img/ninjaAnime.png'
import './NoFind.scss'

function NoFind() {
  return (
    <div className='nofind'>
        <p className='nofind__text'>Nic nie znaleźliśmy :/</p>
        <img src={ninjaAnime} alt="tamidia.pl" className="nofind__img" />
    </div>
  )
}

export default NoFind