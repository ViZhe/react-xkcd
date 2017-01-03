
import mongoose, {Schema} from 'mongoose'

import {hideProps} from '../utils/mongoose'


const comicsSchema = new Schema({
  num: {
    type: Number,
    required: true
  },
  locales: {
    type: Object,
    required: true
  }
  // locales: {
  //     "ru": {
  //         "url": "",
  //         "image": "",
  //         "transcription": "",
  //         "comment": "",
  //         "description": "",
  //         "title": ""
  //     },
  //     "en": {
  //         "url": "",
  //         "image": "",
  //         "transcription": "",
  //         "description": "",
  //         "title": ""
  //     }
  // }
}, {
  toJSON: {
    versionKey: false,
    virtuals: true,
    transform: hideProps
  }
})


export default mongoose.model('Comics', comicsSchema)
