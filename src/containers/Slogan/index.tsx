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
const sloganWord = 'The Common Knowledge Base of the 7.6 Billion People.'
const sloganWordTimeout = 100

export default class extends React.Component {
  state = {
    loaded: false,
    localClickedItem: localeList[0].path,
    sloganWord: '',
    sloganWordLoaded: false,
  }

  componentDidMount () {
    const { autoRenderSloganWord, lang, } = this
    setTimeout(() => {
      this.setState(() => ({ loaded: true, }))
    }, 0)
    window.onload = autoRenderSloganWord
  }

  t = null as any
  lang = null as any

  clickLocale = (event) => {
    const item = event.target.dataset.localeitem
    this.setState({
      localClickedItem: item,
    })
  }

  Locale = (props) => {
    const { localClickedItem, } = this.state
    const { t, lang, } = this
    return (
      <div className={css.locale} onClick={this.clickLocale}>
        {localeList.map((item) => {
          const { path, label, } = item
          return (
            <div
              className={localClickedItem === path ? css.active : ''}
              data-localeitem={path}
              onClick={() => lang.changeLanguage(path)}
            >
              {label}
            </div>
          )
        })}
      </div>
    )
  }

  autoRenderSloganWord = () => {
    const { t, } = this

    const promise = new Promise((resolve, reject) => {
      t('word')
        .split('')
        .forEach((char, i) => {
          setTimeout(() => {
            this.setState({
              sloganWord: this.state.sloganWord + char,
            })
          }, i * sloganWordTimeout)
        })
      const endTime = (t('word').length + 1) * sloganWordTimeout
      setTimeout(() => {
        resolve()
      }, endTime)
    })

    promise.then(() => {
      this.setState({
        sloganWordLoaded: true,
      })
    })
  }

  SloganWord = () => {
    const { t, } = this
    const { sloganWordLoaded, } = this.state
    return (
      <div className={`${css.sloganWord} fontBold`}>
        <img src={imgs.quo} alt="quotation mark" />
        <span className={sloganWordLoaded ? css.hidden : ''}>
          {this.state.sloganWord}
        </span>
        <span className={sloganWordLoaded ? '' : css.hidden}>{t('word')}</span>
      </div>
    )
  }

  Description = (props) => {
    const { SloganWord, } = this
    const { t, lang, } = this
    return (
      <div className={css.description}>
        <div className={css.image}>
          <img src={imgs.logo} alt="logo" />
        </div>
        <SloganWord />
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
    const { t, lang, } = this
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
          this.lang = i18n
          this.setState({
            localClickedItem: i18n.language,
          })
          return (
            <div
              className={css.slogan}
              style={{ backgroundImage: `url(${imgs.bg}`, }}
            >
              <Locale />
              <Description />
              <SloganImg />
            </div>
          )
        }}
      </I18n>
    )
  }
}
