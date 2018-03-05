import * as React from 'react'
import { createPortal } from 'react-dom'
import { Header, Logo, Navs, NavItem } from '../../styled/Common'
import { log } from '../../utils'

const css = require('../../styles/footer')

const imgs = {
  socialicon_01: require('../../images/footer/socialicon_01.png'),
  socialicon_02: require('../../images/footer/socialicon_02.png'),
  socialicon_03: require('../../images/footer/socialicon_03.png'),
  socialicon_04: require('../../images/footer/socialicon_04.png'),
  socialicon_05: require('../../images/footer/socialicon_05.png'),
  socialicon_06: require('../../images/footer/socialicon_06.png')
}
// const img_bg = require('../../images/slogan/bg.png')

export default class extends React.Component {
  socialiconList = [
    imgs.socialicon_01,
    imgs.socialicon_02,
    imgs.socialicon_03,
    imgs.socialicon_04,
    imgs.socialicon_05,
    imgs.socialicon_06
  ]

  navList = [
    {
      label: '',
      href: ''
    },
    {
      label: '',
      href: ''
    },
    {
      label: '',
      href: ''
    }
  ]

  state = {
    loaded: false
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState(() => ({ loaded: true }))
    }, 0)
  }

  Nav = () => {
    const { navList } = this
    return (
      <div>
        {navList.map(nav => {
          const { href, label } = nav
          return (
            <a href={href}>
              <div>{label}</div>
            </a>
          )
        })}
      </div>
    )
  }

  Left = () => {
    const { Nav } = this
    return (
      <div>
        <div />
        {Nav()}
      </div>
    )
  }

  Subscribe = () => <div />

  SocialiconList = () => {
    const { socialiconList } = this
    return (
      <div className={css.socialiconList}>
        {socialiconList.map(image => (
          <div className={css.socialiconContainer}>
            <img src={image} />
          </div>
        ))}
      </div>
    )
  }

  Right = () => {
    const { SocialiconList, Subscribe } = this
    return (
      <div>
        {SocialiconList()}
        {Subscribe()}
      </div>
    )
  }

  Top = () => {
    const { props, Left, Right } = this
    return (
      <div className="top">
        {Left()}
        {Right()}
      </div>
    )
  }

  Bottom = () => <div />

  render () {
    const { props, Top, Right, Bottom } = this

    return createPortal([<Top />, <Bottom />], document.getElementById(
      'footer'
    ) as HTMLElement)
  }
}
