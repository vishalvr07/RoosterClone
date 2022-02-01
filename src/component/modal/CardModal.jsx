import React, { useState } from 'react';
import Modal from 'react-modal'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function CardModal(props) {

// const[showmodal , setShowmodal] = useState();

// setShowmodal(props.show);

// console.log(showmodal);
  return <div>


  <Modal isOpen={props.show} style={customStyles}  > 
  <p>  Hi modal here good to meet you . 
</p>
<button  className='bg-red-400 p-1 rounded m-1 text-sm'>Close</button>

  </Modal>





</div>;
}

export default CardModal;