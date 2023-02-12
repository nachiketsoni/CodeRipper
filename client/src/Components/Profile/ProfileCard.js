import React from 'react'
import css from './ProfileCard.module.css'

const ProfileCard = () => {
  return (
    
<div className={`${css.layout}`}>
  <div className={`${css.profile}`}>
    <div className={`${css.profile__picture}`}><img src="http://i.pravatar.cc/250?img=58" alt="ananddavis"/></div>
    <div className={`${css.profile__header}`}>
      <div className={`${css.profile__account}`}>
        <h4 className={`${css.profile__username}`}>ananddavis</h4>
      </div>
      <div className={`${css.profile__edit}`}><a className={`${css.profile__picture} ${css.profile__button}`} href="#">Edit Profile</a></div>
    </div>
    <div className={`${css.profile__stats}`}>
      <div className={`${css.profile__stat}`}>
        <div className={`${css.profile__icon} ${css.profile__icon_gold}`}><i className={`${css.profile__picture}`} class="fas fa-wallet"></i></div>
        <div className={`${css.profile__value}`}>47
          <div className={`${css.profile__key}`}>Wallet</div>
        </div>
      </div>
      <div className={`${css.profile__stat}`}>
        <div className={`${css.profile__icon} ${css.profile__icon_blue}`}><i className={`${css.profile__picture}`} class="fas fa-signal"></i></div>
        <div className={`${css.profile__value}`}>357
          <div className={`${css.profile__key}`}>Ranking</div>
        </div>
      </div>
      <div className={`${css.profile__stat}`}>
        <div className={`${css.profile__icon} ${css.profile__icon_pink}`}><i className={`${css.profile__picture}`} class="fas fa-heart"></i></div>
        <div className={`${css.profile__value}`}>4
          <div className={`${css.profile__key}`}>Lives</div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ProfileCard