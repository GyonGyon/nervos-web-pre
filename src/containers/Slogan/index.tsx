import * as React from 'react'
import { createPortal, } from 'react-dom'
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

const localeList = ['english', '中文', ]
const slogonWord = 'The Common Knowledge Base of the 7.6 Billion People.'
const slogonWordTimeout = 100

export default class extends React.Component {
  state = {
    loaded: false,
    localClickedItem: localeList[0],
    slogonWord: '',
    slogonDesc:
      'NERVOS facilitates human collaboration on the global scale, and serves as the protocol of the new digital commonwealth. It employs an on-chain protocol governance model so that the network can evolve to maximize the welfare of all participants.',
  }
  componentDidMount () {
    const { autoRenderSlogonWord, } = this
    setTimeout(() => {
      this.setState(() => ({ loaded: true, }))
    }, 0)
    window.onload = autoRenderSlogonWord
  }

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

  Locale = () => {
    const { localClickedItem, } = this.state
    return (
      <div className={css.locale} onClick={this.clickLocale}>
        {localeList.map((item) => (
          <div
            className={localClickedItem === item ? css.active : ''}
            // data 后的似乎会自动转为小写?
            data-localeitem={item}
          >
            {item}
          </div>
        ))}
      </div>
    )
  }

  Logo = () => {}

  SlogonWord = () => (
    <div className={css.slogonWord}>
      <img src={imgs.quo} alt="quotation mark" />
      {this.state.slogonWord}
    </div>
  )

  Description = () => {
    const { SlogonWord, } = this
    return (
      <div className={css.description}>
        <div className={css.image}>
          <img src={imgs.logo} alt="logo" />
        </div>
        <SlogonWord />
        <div className={css.text}>{this.state.slogonDesc}</div>
      </div>
    )
  }

  SloganImg = () => {
    let ddd
    //   需要添加动效
    return (
      <div className={css.sloganImg}>
        <img src={imgs.slogan} alt="" />
      </div>
    )
  }

  // Subscribe = () => {
  //   let ddd
  //   return (
  //     <div className={css.subscribe}>
  //       <div className={css.buttonOuter}>
  //         <div className={css.buttonInner}>
  //           <input type="text" placeholder="Enter your email address" />
  //           <a className={css.label}>subscribe</a>
  //         </div>
  //         <div className={css.diagonal} />
  //       </div>
  //     </div>
  //   )
  // }

  Subscribe = () => {
    let ddd
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
      <div className={css.slogan} style={{ backgroundImage: `url(${imgs.bg}`, }}>
        <Locale />
        <Description />
        <SloganImg />
        <Subscribe />
      </div>
    )
  }
}
