import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'
import React, {useState } from 'react';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState()

function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(true);
}

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
}

function handleAddPlaceClick(){
  setIsAddPlacePopupOpen(true);
}

function handleCardClick(card) {
  setSelectedCard(card);
}

function closeAllPopups() {
  setIsEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setSelectedCard();
}

  return(

    <div className="page">

      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
      onCardClick ={handleCardClick}/>

      <PopupWithForm name = {'type_profile'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''}
      onClose={closeAllPopups} buttonText={'Сохранить'}>
        <input type="text" className="popup__input" id="popup__name" name="profile_name" placeholder="Имя" required />
        <span className="popup__name-error popup__input-error"></span>
        <input type="text" className="popup__input" id="popup__description" name="profile_description" placeholder="Вид деятельности" required />
        <span className="popup__description-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name = {'type_card-add'} title={'Новое место'} isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''}
      onClose={closeAllPopups} buttonText={'Сохранить'}>
        <input type="text" className="popup__input" id="popup__location" name='addFormName' placeholder="Название" required />
        <span className="popup__input-error popup__location-error"></span>
        <input type="url" className="popup__input" id="popup__link" name='addFormUrl' placeholder="Ссылка на картинку" required />
        <span className="popup__input-error popup__link-error"></span>
      </PopupWithForm>

      <PopupWithForm name = {'avatar'} title={'Вы уверены?'} isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
      onClose={closeAllPopups} buttonText={'Да'}>
        <input type="url" className="popup__input" id="popup__avatar" name='avatarUrl' placeholder="Ссылка на аватар" required />
        <span className="popup__input-error popup__avatar-error"></span>
      </PopupWithForm>

      <ImagePopup onClose={closeAllPopups}
      card={selectedCard} />

      <Footer />

    </div>
  )
}

export default App;
