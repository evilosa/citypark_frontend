import feedback from 'feedback'
import * as api from '../apiConst'
import * as types from '../actionTypes'

export const getNews = () =>
  feedback.get(api.NEWS, types.NEWS_INDEX)