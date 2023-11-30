import React from 'react';
import style from './Modal.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { ModalLeft } from './ModalLeft';
import { ModalRight } from './ModalRight';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux'; 
import { RootState } from '../../app/store';

type ModalProps ={
  modal: boolean;
  closeModal: ()=> void;


 
  activeType: number;
  setActiveType: (type: number )=> void;
  activeSize: number;
  setActiveSize: (idx: number )=> void;




  id: number;
 

  
}


export const Modal: React.FC <ModalProps> = ({ modal, closeModal,activeType,setActiveType, activeSize,setActiveSize,}) => { 
  
  
 
  
 
  const info = useSelector((state: RootState)=> state.info.info)   
  


  const combinedClassName =
  `${style.content} ` +
  (modal ? style.scaleIn : style.scaleRight) 





  return (
    <motion.div className={`${style.wrapper} ${modal ? style.show : ''}`}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    >

         <div className={combinedClassName}>
        <div className={style.modal}>
          <ModalLeft/>
          <ModalRight  closeModal={closeModal}  activeSize={activeSize} activeType={activeType} setActiveType={setActiveType} setActiveSize={setActiveSize} {...info}/>

        </div>
        <AiOutlineClose onClick={closeModal} color="white" size={35} className="ml-4 cursor-pointer" />
      </div>
   
     
    </motion.div>
  );
};
