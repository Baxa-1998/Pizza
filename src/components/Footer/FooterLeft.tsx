
import logo from '../../assets/img/pizza-logo.svg';

export const FooterLeft = () => {
  return (
    <div className='w-fit hidden md:block'>
    <div className='flex items-center'>
         <img src={logo} alt="logo" />
    <h3 className="ml-4">
        Куда пицца
      </h3>
    </div> 
    <div className='text-[16px] mt-[146px]'> 
    © Copyright 2021 — Куда Пицца
    </div>
 
  </div>
  )
}
