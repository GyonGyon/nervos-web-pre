import * as React from 'react'
import { createPortal } from 'react-dom'
import { Header, Logo, Navs, NavItem } from '../../styled/Common'
import { log } from '../../utils'

const css = require('../../styles/features')

const imgs = {
  bg: require('../../images/features/bg.png'),
  auto: require('../../images/features/auto.png'),
  re: require('../../images/features/re.png'),
  pr: require('../../images/features/pr.png')

  // logo: require('../../images/feature/logo.png'),
  // feature: require('../../images/feature/feature.png')
}

export default class extends React.Component {
  sectionList = [
    {
      image: imgs.auto,
      title: '',
      text: ''
    },
    {
      image: imgs.re,
      title: '',
      text: ''
    },
    {
      image: imgs.pr,
      title: '',
      text: ''
    }
  ]
  state = {
    loaded: false
  }
  componentDidMount () {}

  SectionLImg = section => {
    const { image, title, text } = section
    return (
      <section className={`${css.section} ${css.limg}`}>
        <img src={image} alt="" />
        <div className={css.desc}>
          <div>{title}</div>
          <div>{text}</div>
        </div>
      </section>
    )
  }

  SectionRImg = section => {
    const { image, title, text } = section
    return (
      <section className={`${css.section} ${css.rimg}`}>
        <div className={css.desc}>
          <div>{title}</div>
          <div>{text}</div>
        </div>
        <div className={css.img}>
          <img src={image} alt="" />
        </div>
      </section>
    )
  }

  render () {
    const { sectionList } = this
    const { loaded } = this.state
    return (
      <div className={css.main} style={{ backgroundImage: `url(${imgs.bg}` }}>
        {sectionList.map(
          (section, i) =>
            i % 2 === 0 ? this.SectionLImg(section) : this.SectionRImg(section)
        )}
      </div>
    )
  }
}
