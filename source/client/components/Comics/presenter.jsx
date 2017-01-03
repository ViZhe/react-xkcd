
import React from 'react'


const Comics = ({comics, num}) => {
  const currentComics = comics[num]

  if (!currentComics) {
    return null
  }

  return (
    <fieldset>
      <legend>Comics #{currentComics.num}</legend>
      <div>
        <div>{currentComics.locales.ru.title}</div>
        <img src={currentComics.locales.ru.image} alt={currentComics.locales.ru.title} />
        <div>{currentComics.locales.ru.url}</div>
        <div>{currentComics.locales.ru.transcription}</div>
        <div>{currentComics.locales.ru.comment}</div>
        <div>{currentComics.locales.ru.description}</div>
      </div>
      <div>
        <div>{currentComics.locales.en.title}</div>
        <img src={currentComics.locales.en.image} alt={currentComics.locales.en.title} />
        <div>{currentComics.locales.en.url}</div>
        <div>{currentComics.locales.en.transcription}</div>
        <div>{currentComics.locales.en.comment}</div>
        <div>{currentComics.locales.en.description}</div>
      </div>
    </fieldset>
  )
}


export default Comics
