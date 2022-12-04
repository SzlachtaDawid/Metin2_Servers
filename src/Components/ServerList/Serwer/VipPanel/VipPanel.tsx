import './VipPanel.scss'

interface Props {
    reflink: string;
  }
  

const VipPanel = ({ reflink }: Props) => {
  return (
    <div className='vip'>
        <p className='vip__text'>Wykorzytaj poniższy kod podczas tworzenia konta na serwerze aby uzyskać przewagę nad innymi. Dzięki niemu uzyskasz pakiet Vip'a na 7dni oraz dodatkowe bonusy na start!</p>
        <div className='vip__code'>
            <p className='code__text'>{reflink}</p>
        </div>
    </div>
  )
}

export default VipPanel