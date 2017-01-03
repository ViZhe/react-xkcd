
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

// import * as actions from '../../actions'
import Comics from './presenter'


@inject('comicsStore')
@observer
class ComicsContainer extends Component {
  componentDidMount() {
    this.props.comicsStore.fetchComics()
  }
  render() {
    const {comicsStore} = this.props

    const comicsAll = comicsStore.entities.toJS()
    const comicsIds = Object.keys(comicsAll)
    const comics = []

    comicsIds.forEach((id) => {
      comics.push(comicsAll[id])
    })

    return (
      <Comics
        num={0}
        comics={comics}
      />
    )
  }
}


export default ComicsContainer
