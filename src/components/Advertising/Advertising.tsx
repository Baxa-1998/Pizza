
import style from './Advertising.module.scss';
import { AdvertisingItem } from './AdvertisingItem';

export const Advertising = () => {
  return (
    <div className={style.advertisingWrapper}>
      <div className={style.advertising}>
        <AdvertisingItem
          title="3 средние пиццы
от 999 рублей"
        />
        <AdvertisingItem title="Кэшбек 10% на самовывоз (доставка)" />
        <AdvertisingItem
          title="3 средние пиццы
от 999 рублей"
        />
        <AdvertisingItem title="Кэшбек 10% на самовывоз (доставка)" />
      </div>
    </div>
  );
};
