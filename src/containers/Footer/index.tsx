import * as React from 'react'
import { Link, } from 'react-router-dom'
import { createPortal, } from 'react-dom'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'

const css = require('../../styles/footer')

const imgs = {
  socialicon_01: '',
  socialicon_02: '',
  socialicon_03: '',
  socialicon_04: '',
  socialicon_05: '',
  socialicon_06: '',
  logo: '',
}
imgs.socialicon_01 = require('../../images/footer/socialicon_01.png')
imgs.socialicon_02 = require('../../images/footer/socialicon_02.png')
imgs.socialicon_03 = require('../../images/footer/socialicon_03.png')
imgs.socialicon_04 = require('../../images/footer/socialicon_04.png')
imgs.socialicon_05 = require('../../images/footer/socialicon_05.png')
imgs.socialicon_06 = require('../../images/footer/socialicon_06.png')
imgs.logo = require('../../images/footer/logo.png')

const socialiconList = [
  imgs.socialicon_01,
  imgs.socialicon_02,
  imgs.socialicon_03,
  imgs.socialicon_04,
  imgs.socialicon_05,
  imgs.socialicon_06,
]

const navList = [
  {
    label: 'ddddd',
    href: '/',
  },
  {
    label: 'ddddd',
    href: '/',
  },
  {
    label: 'ddddd',
    href: '/',
  },
]

export default class extends React.Component {
  // state = {
  //   loaded: false,
  // }
  componentDidMount () {
    // setTimeout(() => {
    //   this.setState(() => ({ loaded: true, }))
    // }, 0)
  }

  Nav = () => (
    <div className={css.nav}>
      {navList.map((nav) => {
        const { href, label, } = nav
        return <Link className={css.navItem} to={href}>{label}</Link>
      })}
    </div>
  )

  Left = () => {
    const { Nav, } = this
    return (
      <div className={css.left}>
        <div className={css.image}>
          <img src={imgs.logo} alt="" />
        </div>
        {Nav()}
      </div>
    )
  }

  Subscribe = () => {
    let ddd
    return (
      <div className={css.subscribe}>
        <div className={css.buttonOuter}>
          <div className={css.buttonInner}>
            <input type="text" placeholder="Enter your email address" />
            <a href="/" className={css.label}>subscribe</a>
          </div>
          <div className={css.diagonal} />
        </div>
      </div>
    )
  }

  SocialiconList = () => (
    <div className={css.socialiconList}>
      {socialiconList.map((image) => (
        <div className={css.socialiconContainer}>
          <img src={image} alt="" />
        </div>
      ))}
    </div>
  )

  Right = () => {
    const { SocialiconList, Subscribe, } = this
    return (
      <div className={css.right}>
        <Subscribe />
        <SocialiconList />
      </div>
    )
  }

  Top = () => {
    const { props, Left, Right, } = this
    return (
      <div className={css.top}>
        {Left()}
        {Right()}
      </div>
    )
  }

  Bottom = () => (
    <div className={css.bottom}>
      <div>@ 2018 Nervos All Rights Reserved</div>
    </div>
  )

  render () {
    const { props, Top, Bottom, } = this

    return createPortal(
      <div className={css.main}>
        <div className={css.container}>
          <Top />
          <Bottom />
        </div>
      </div>,
      document.getElementById('footer') as HTMLElement
    )
  }
}
