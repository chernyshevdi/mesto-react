import React, {useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function  EditAvatarPopup(props) {

  const avatarRef = React.useRef();
  const [avatar, setAvatar] = useState('');
  const avatarContext = React.useContext(CurrentUserContext);

  useEffect(() => {
    setAvatar(avatarContext.avatar);
  }, [avatarContext]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar:avatar
    });
  }

  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }

  return (
    <PopupWithForm name = {'avatar'} title={'Вы уверены?'} isOpen={props.isOpen ? 'popup_opened' : ''}
      onClose={props.onClose} buttonText={'Да'} onSubmit={handleSubmit} >
        <input type="url" className="popup__input" id="popup__avatar" name='avatarUrl' placeholder="Ссылка на аватар"
         required ref={avatarRef} onChange={handleChangeAvatar} />
        <span className="popup__input-error popup__avatar-error"></span>
      </PopupWithForm>
  )
}

export default EditAvatarPopup;
