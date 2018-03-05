import * as React from 'react'
import { createPortal } from 'react-dom'
import { Header, Logo, Navs, NavItem } from '../../styled/Common'
import { log } from '../../utils'

const css = require('../../styles/teams')

const imgs = {
  bg: require('../../images/slogan/bg.png'),
  logo: require('../../images/slogan/logo.png'),
  slogan: require('../../images/slogan/slogan.png')
}
// const img_bg = require('../../images/slogan/bg.png')

export default class extends React.Component {
  peopleList = [
    {
      image: '',
      name: '',
      desc: '',
    },
    {
      image: '',
      name: '',
      desc: '',
    },
    {
      image: '',
      name: '',
      desc: '',
    },
    {
      image: '',
      name: '',
      desc: '',
    },
  ]
  state = {
    loaded: false,
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState(() => ({ loaded: true }))
    }, 0)
  }

  People = (people) => {
    const {image, name, desc} = people
    return (
      <div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <div>{name}</div>
          <div>{desc}</div>
        </div>
      </div>
    )
  }

  render () {
    const { props } = this
    const { loaded } = this.state
    return (
      <div className={css.slogan} style={{ backgroundImage: `url(${imgs.bg}` }} />
    )
  }
}
