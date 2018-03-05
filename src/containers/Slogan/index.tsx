import * as React from 'react'
import { createPortal } from 'react-dom'
import { Header, Logo, Navs, NavItem } from '../../styled/Common'
import { log } from '../../utils'

const css = require('../../styles/slogan')

const imgs = {
  bg: require('../../images/slogan/bg.png'),
  logo: require('../../images/slogan/logo.png'),
  slogan: require('../../images/slogan/slogan.png')
}
// const img_bg = require('../../images/slogan/bg.png')

export default class extends React.Component {
  localeList = ['english', '中文']
  state = {
    loaded: false,
    localClickedItem: this.localeList[0]
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState(() => ({ loaded: true }))
    }, 0)
  }

  clickLocale = event => {
    const item = event.target.dataset.localeitem
    this.setState({
      localClickedItem: item
    })
  }

  Locale = () => {
    const { localeList } = this
    const { localClickedItem } = this.state
    return (
      <div className={css.locale} onClick={this.clickLocale}>
        {localeList.map(item => (
          <div
            className={localClickedItem === item ? css.active : ''}
            // 有别的储存信息的方法么?
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

  AutoTalk = () => {}

  Description = () => {
    let ddd
    return (
      <div className={css.description}>
        <div>
          <img src={imgs.logo} />
        </div>
        {this.AutoTalk}
        <div />
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

  render () {
    const { props } = this
    const { loaded } = this.state
    return (
      <div className={css.slogan} style={{ backgroundImage: `url(${imgs.bg}` }}>
        {this.Locale()}
        {this.Description()}
        {this.SloganImg()}
      </div>
    )
  }
}
