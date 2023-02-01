type ModalProps = {
  imgUrl: string,
  isOpened: boolean,
  onClose: React.Dispatch<React.SetStateAction<boolean>>,
}

function Modal({imgUrl, isOpened, onClose} : ModalProps) : JSX.Element {
  const handleCloseModal = () => {
    onClose(false);
  }
  return (
    <>
      {
        isOpened &&
          <div className="popup">
            <style>{'body{overflow:hidden;}'}</style>
            <div className="modal-image">
              <button
                className='close-btn'
                onClick={handleCloseModal}
              >
                &times;
              </button>
            <img src={imgUrl} alt="Загрузка"/>
            </div>
          </div>
      }
    </>
  );
}

export default Modal;
