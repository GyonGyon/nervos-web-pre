import * as React from 'react'
import { createPortal, } from 'react-dom'
import { I18n, } from 'react-i18next'
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

  t = null as any
  lang = null as any

  Subscribe = () => {
    let ddd
    return (
      <div className={css.subscribe}>
        <div className={`${css.line} ${css.left}`} />
        <div className={css.buttonOuter}>
          <div className={`${css.buttonInner} fontBold`}>subscribe</div>
          <div className={css.diagonal} />
        </div>
        <div className={`${css.line} ${css.right}`} />
      </div>
    )
  }

  Title = (props) => {
    const { Subscribe, } = this
    return (
      <div className={css.titleContainer}>
        <div className={`${css.title} fontBold`}>
          <Subscribe />
          <div>Features</div>
        </div>
        {/* <div className={css.verticalLine} /> */}
      </div>
    )
  }

  SectionLImg = (props) => {
    const { section, } = props
    const { image, title, text, } = section
    return (
      <section className={`${css.section} ${css.limg}`}>
        <div className={css.img}>
          <img src={image} alt="" />
        </div>
        <div className={css.desc}>
          <div className={`${css.title} fontBold`}>{title}</div>
          <div className={css.text}>{text.map((item) => <p>{item}</p>)}</div>
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
          <div className={`${css.title} fontBold`}>{title}</div>
          <div className={css.text}>{text.map((item) => <p>{item}</p>)}</div>
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
      <div className={css.sectionList}>
        <div className={`${css.verticalLine} ${css.top1}`} />
        <div className={`${css.verticalLine} ${css.top2}`} />
        <div className={css.border} />
        {sectionList.map(
          (section, i) =>
            i % 2 === 0 ? (
              <SectionLImg section={section} />
            ) : (
              <SectionRImg section={section} />
            )
        )}
        <div className={`${css.verticalLine} ${css.bottom1}`} />
        <div className={`${css.verticalLine} ${css.bottom2}`} />
      </div>
    )
  }

  render () {
    const { SectionList, Title, } = this
    const { loaded, } = this.state
    return (
      <I18n ns="slogan">
        {(t, { i18n, }) => {
          this.t = t
          this.lang = i18n
          return (
            <div className={css.main}>
              <div className={css.container}>
                <Title />
                <SectionList />
              </div>
            </div>
          )
        }}
      </I18n>
    )
  }
}
