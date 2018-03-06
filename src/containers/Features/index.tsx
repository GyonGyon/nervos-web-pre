import * as React from 'react'
import { createPortal, } from 'react-dom'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'

const css = require('../../styles/features')

const imgs = {
  bg: '',
  auto: '',
  re: '',
  pr: '',
}
imgs.bg = require('../../images/features/bg.png')
imgs.auto = require('../../images/features/auto.png')
imgs.re = require('../../images/features/re.png')
imgs.pr = require('../../images/features/pr.png')

const sectionList = [
  {
    image: imgs.auto,
    title: 'Autonomous',
    text: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  ',
    ],
  },
  {
    image: imgs.re,
    title: 'Autonomous',
    text: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  ',
    ],
  },
  {
    image: imgs.pr,
    title: 'Autonomous',
    text: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  ',
    ],
  },
]

export default class extends React.Component {
  state = {
    loaded: false,
  }
  componentDidMount () {}

  SectionLImg = (props) => {
    const { section, } = props
    const { image, title, text, } = section
    return (
      <section className={`${css.section} ${css.limg}`}>
        <div className={css.img}>
          <img src={image} alt="" />
        </div>
        <div className={css.desc}>
          <div>{title}</div>
          <div>{text.map((item) => <p>{item}</p>)}</div>
        </div>
      </section>
    )
  }

  SectionRImg = (props) => {
    const { section, } = props
    const { image, title, text, } = section
    return (
      <section className={`${css.section} ${css.rimg}`}>
        <div className={css.desc}>
          <div>{title}</div>
          <div>{text.map((item) => <p>{item}</p>)}</div>
        </div>
        <div className={css.img}>
          <img src={image} alt="" />
        </div>
      </section>
    )
  }

  SectionList = () => {
    const { SectionRImg, SectionLImg, } = this
    return (
      <div
        className={css.sectionList}
        style={{ backgroundImage: `url(${imgs.bg}`, }}
      >
        {sectionList.map(
          (section, i) =>
            i % 2 === 0 ? (
              <SectionLImg section={section} />
            ) : (
              <SectionRImg section={section} />
            )
        )}
      </div>
    )
  }

  render () {
    const { SectionList, } = this
    const { loaded, } = this.state
    return (
      <div className={css.main}>
        <div className={css.title}>Feature</div>
        <SectionList />
      </div>
    )
  }
}
