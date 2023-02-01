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
          <div className="modal-image">
            <style>{'body{overflow:hidden;}'}</style>
            <button
              className='close-btn'
              onClick={handleCloseModal}
            >
              &times;
            </button>
          <img src={imgUrl} alt="Загрузка"/>
          </div>
      }
    </>
  );
}

export default Modal;
