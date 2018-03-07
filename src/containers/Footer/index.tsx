import * as React from 'react'
import { Link, } from 'react-router-dom'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'
import {footer as imgs, } from '../../config/imgMap'

const css = require('../../styles/footer')

const socialiconList = [
  imgs.socialicon_01,
  imgs.socialicon_02,
  imgs.socialicon_03,
  imgs.socialicon_04,
  imgs.socialicon_05,
  imgs.socialicon_06,
]

const navHrefList = ['/', '/', '/', ]

export default class extends React.Component {
  // state = {
  //   loaded: false,
  // }
  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState(() => ({ loaded: true, }))
  //   }, 0)
  // }

  t = null as any
  lang = null as any

  Nav = () => {
    const { t, } = this
    const navList = t('navList', { returnObjects: true, })
    return (
      <div className={css.nav}>
        {navList.map((label, i) => {
          const href = navHrefList[i]
          return (
            <Link className={css.navItem} to={href}>
              {label}
            </Link>
          )
        })}
      </div>
    )
  }

  Left = () => {
    const { Nav, } = this
    return (
      <div className={css.left}>
        <div className={css.image}>
          <img src={imgs.logo} alt="" />
        </div>
        <Nav />
      </div>
    )
  }

  Subscribe = () => {
    const { t, } = this
    const enterMail = t('enterMail')
    const translations = t('translations:subscribe')
    return (
      <div className={css.subscribe}>
        <div className={css.buttonOuter}>
          <div className={css.buttonInner}>
            <input type="text" placeholder={enterMail} />
            <a href="/" className={css.label}>
              {translations}
            </a>
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
      <I18n ns="footer">
        {(t, { i18n, }) => {
          this.t = t
          this.lang = i18n
          return (
            <div className={css.main}>
              <div className={css.container}>
                <Top />
                <Bottom />
              </div>
            </div>
          )
        }}
      </I18n>,
      document.getElementById('footer') as HTMLElement
    )
  }
}
