import React, {Component} from 'react'

import styles from './search-profile.css'

class SearchProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isClick: true
    }
  }

  // onIconClick = () => {

  // }

  render () {
    return (
      <div className={styles.root}>
        <div className={styles.profileTitle}> Developer Profile </div>
        <div>
          <button className={styles.heartBtn} style={this.state.isClick ? {"color": "red"}: {"color": "#555555"}} onClick={() => this.setState({isClick: !this.state.isClick})}>
            <span className={`fa fa-heart red-heart ${this.state.isClick ? "":"fa-heart-o"}`}></span>
          </button>
        </div>
      </div>
    )
  }
}

export default SearchProfile
