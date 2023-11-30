

import style from './Advertising.module.scss'


type Ttitle = {
  title: string
}

export const AdvertisingItem: React.FC<Ttitle> = ({title}) => {
  return (
    <div className={style.advertisingItem}><h1>{title}</h1></div>
  )
}
