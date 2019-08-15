import React, {Component} from 'react'

import styles from './app.css'
import SearchProfile from '../SearchProfile'
import Profile from '../Profile'

const URL = `https://api.github.com/users`

class App extends Component {
  constructor () {
    super()

    this.state = {
      username: 'MarioTerron',
      name: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      following: '',
      homeUrl: '',
      notFound: ''
    }
  }

  fetchProfile (username) {
    fetch(`${URL}/${username}`)
      .then(response => {
        return response.json()
      })
      .then(user => {
        this.setState({
          username: user.login,
          name: user.name,
          avatar: user.avatar_url,
          location: user.location,
          repos: user.public_repos,
          followers: user.followers,
          following: user.following,
          homeUrl: user.html_url,
          notFound: user.message })
      })
      .catch(err => console.log('Oops! An error ocurred.'))
  }

  componentWillMount () {
    this.fetchProfile(this.state.username)
  }

  render () {
    return (
      <div id={styles.container}>
        <section id={styles.card}>
          <SearchProfile />
          <Profile user={this.state} />
        </section>
      </div>
    )
  }
}
export default App
