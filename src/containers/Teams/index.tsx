import * as React from 'react'
import { createPortal, } from 'react-dom'
import { Header, Logo, Navs, NavItem, } from '../../styled/Common'
import { log, } from '../../utils'

const css = require('../../styles/teams')

/* eslint-disable no-restricted-globals */
const imgs = {
  people1: '',
  people2: '',
  people3: '',
  people4: '',
}
imgs.people1 = require('../../images/teams/1.jpg')
imgs.people2 = require('../../images/teams/2.jpg')
imgs.people3 = require('../../images/teams/3.jpg')
imgs.people4 = require('../../images/teams/4.jpg')

const peopleList = [
  {
    image: imgs.people1,
    name: 'dududu',
    desc:
      'determined price; rather price is set by market demand. This mimics mining without giving potential unfair advantages to large purchasers.',
  },
  {
    image: imgs.people2,
    name: 'dududu',
    desc:
      'determined price; rather price is set by market demand. This mimics mining without giving potential unfair advantages to large purchasers.',
  },
  {
    image: imgs.people3,
    name: 'dududu',
    desc:
      'determined price; rather price is set by market demand. This mimics mining without giving potential unfair advantages to large purchasers.',
  },
  {
    image: imgs.people4,
    name: 'dududu',
    desc:
      'determined price; rather price is set by market demand. This mimics mining without giving potential unfair advantages to large purchasers.',
  },
]

export default class extends React.Component {
  state = {
    loaded: false,
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState(() => ({ loaded: true, }))
    }, 0)
  }

  People = (props) => {
    const { people, } = props
    const { image, name, desc, } = people
    return (
      <div className={css.people}>
        <div className={css.image}>
          <img src={image} alt="" />
        </div>
        <div className={css.desc}>
          <div className={css.name}>{name}</div>
          <div className={css.text}>{desc}</div>
        </div>
      </div>
    )
  }

  PeopleList = (props) => {
    const { People, } = this
    const list = peopleList.map((people) => <People people={people} />)
    return <div>{list}</div>
  }

  render () {
    const { props, PeopleList, } = this
    const { loaded, } = this.state
    return (
      <div className={css.main}>
        <div className={css.container}>
          <div className={`${css.title} fontBold`}>Teams</div>
          <PeopleList />
        </div>
      </div>
    )
  }
}
