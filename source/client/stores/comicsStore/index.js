
import {observable, action, runInAction, map} from 'mobx'
import {arrayOf, normalize, Schema} from 'normalizr'


const comicsSchema = new Schema('comics')

class ComicsStore {
  @observable entities = map({})

  @action fetchComics = async () => {
    const res = await fetch('/api/v1/comics')
    const data = await res.json()

    const normalizedData = normalize(data, arrayOf(comicsSchema)).entities.comics

    runInAction(() => {
      Object.keys(normalizedData).forEach((key) => {
        this.entities.set(key, normalizedData[key])
      })
    })
  }

  getEntitiesByKey(key) {
    const comics = this.entities.get(key)
    return comics ? comics.toJS() : {}
  }
}

const comicsStore = new ComicsStore()


export default comicsStore
