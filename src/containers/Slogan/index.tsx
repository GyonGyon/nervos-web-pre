import * as React from 'react'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'

import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'

const css = require('../../styles/slogan')

const imgs = {
  bg: '',
  logo: '',
  slogan: '',
  quo: '',
}

imgs.bg = require('../../images/slogan/bg.png')
imgs.logo = require('../../images/slogan/logo.png')
imgs.slogan = require('../../images/slogan/slogan.png')
imgs.quo = require('../../images/slogan/quo.png')

const localeList = [
  {
    label: 'english',
    path: 'en',
  },
  {
    label: '中文',
    path: 'zh',
  },
]
const slogonWord = 'The Common Knowledge Base of the 7.6 Billion People.'
const slogonWordTimeout = 100

export default class extends React.Component {
  state = {
    loaded: false,
    localClickedItem: localeList[0].label,
    slogonWord: '',
  }
  componentDidMount () {
    const { autoRenderSlogonWord, } = this
    setTimeout(() => {
      this.setState(() => ({ loaded: true, }))
    }, 0)
    window.onload = autoRenderSlogonWord
  }

  t = null as any
  i18n = null as any

  autoRenderSlogonWord = () => {
    slogonWord.split('').forEach((char, i) => {
      setTimeout(() => {
        this.setState({
          slogonWord: this.state.slogonWord + char,
        })
      }, i * slogonWordTimeout)
    })
  }

  clickLocale = (event) => {
    const item = event.target.dataset.localeitem
    this.setState({
      localClickedItem: item,
    })
  }

  Locale = (props) => {
    const { localClickedItem, } = this.state
    const { t, i18n, } = props
    return (
      <div className={css.locale} onClick={this.clickLocale}>
        {localeList.map((item) => {
          const { path, label, } = item
          return (
            <div
              className={localClickedItem === label ? css.active : ''}
              data-localeitem={label}
              onClick={() => i18n.changeLanguage(path)}
            >
              {label}
            </div>
          )
        })}
      </div>
    )
  }

  SlogonWord = () => (
    <div className={`${css.slogonWord} fontBold`}>
      <img src={imgs.quo} alt="quotation mark" />
      {this.state.slogonWord}
    </div>
  )

  Description = (props) => {
    const { SlogonWord, } = this
    const { t, i18n, } = props
    return (
      <div className={css.description}>
        <div className={css.image}>
          <img src={imgs.logo} alt="logo" />
        </div>
        <SlogonWord />
        <div className={css.text}>{t('desc')}</div>
      </div>
    )
  }

  SloganImg = (props) => {
    let ddd
    //   需要添加动效
    return (
      <div className={css.sloganImg}>
        <img src={imgs.slogan} alt="" />
      </div>
    )
  }

  Subscribe = (props) => {
    const { t, i18n, } = props
    return (
      <div className={css.subscribe}>
        <div className={`${css.line} ${css.left}`} />
        <div className={css.buttonOuter}>
          <div className={css.buttonInner}>subscribe</div>
          <div className={css.diagonal} />
        </div>
        <div className={`${css.line} ${css.right}`} />
      </div>
    )
  }

  render () {
    const { props, Locale, Description, SloganImg, Subscribe, } = this
    const { loaded, } = this.state
    return (
      <I18n ns="slogan">
        {(t, { i18n, }) => {
          this.t = t
          this.i18n = i18n
          return (
            <div
              className={css.slogan}
              style={{ backgroundImage: `url(${imgs.bg}`, }}
            >
              <Locale t={t} i18n={i18n} />
              <Description t={t} i18n={i18n} />
              <SloganImg t={t} i18n={i18n} />
            </div>
          )
        }}
      </I18n>
    )
  }
}
