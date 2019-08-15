import React, {Component} from 'react'

import styles from './profile.css'

class Profile extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    if (this.props.user.notFound === 'Not Found')
     return (
       <div className={styles.root}>
         <div className={styles.info}>
           <div className={styles.notFound}>
             <h2>Oops!</h2>
             <p>Can't find this user. Try again.</p>
           </div>
         </div>
       </div>
     )
    else {
      return (
        <div className={styles.root}>
          <div className={styles.info}>
            <a href="#">
              <img src={this.props.user.avatar} alt="Profile image" />
            </a>
            <div className={styles.nameContainer}>
              <a className={styles.name} href={this.props.user.homeUrl}>{this.props.user.name}</a>
            </div>
            <p className={styles.title}>
              Your Title
            </p>
            <p className={styles.title}>
              City, Country
            </p>
          </div>
          <div className={styles.state}>
            <div className={styles.section}>
              <div>
                <p className={styles.footerTitle}>1,234</p>
                <p className={styles.footerSummary}>Profile Views</p>
              </div>
            </div>
            <div className={styles.section}>
              <div>
                <p className={styles.footerTitle}>5,678</p>
                <p className={styles.footerSummary}>Website Views</p>
              </div>
            </div>
            <div className={styles.section}>
              <div>
                <div className={styles.footerTitleStar}>
                  <span className="fa fa-star checked stars"></span>
                  <span className="fa fa-star checked stars"></span>
                  <span className="fa fa-star checked stars"></span>
                  <span className="fa fa-star checked stars"></span>
                  <span className="fa fa-star-o stars"></span>
                </div>
                <p className={styles.footerSummary}>Avg. Rating</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Profile
