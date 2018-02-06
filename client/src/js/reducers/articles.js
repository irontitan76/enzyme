import { ARTICLES_LOAD, ARTICLES_UNLOAD } from '../actions';
import { createReducer } from './utils';

const initialState = {
  featured: {
    category: 'Politics',
    link: '',
    title: 'Steve Bannon Leaving Breitbart News Amid Criticism From Trump',
    media: 'https://source.unsplash.com/800x700?politics',
    text: 'Breitbart News chairman Steve Bannon is leaving his publication following sharp criticism from President Donald Trump about Bannon bashing the president\'s son while talking with a controversial author.',
    _author: {
      _id: '903ur09ewf',
      name: 'Ross Sheppard',
      url: '/rshep'
    },
    createdAt: 'Sep 23, 2018'
  },
  items: [{
    category: 'Politics',
    link: '',
    title: 'Steve Bannon Leaving Breitbart News Amid Criticism From Trump',
    media: 'https://source.unsplash.com/800x520?culture',
    text: 'Breitbart News chairman Steve Bannon is leaving his publication following sharp criticism from President Donald Trump about Bannon bashing the president\'s son while talking with a controversial author.',
    _author: {
      _id: '903ur09ewf',
      name: 'Ross Sheppard',
      url: '/rshep'
    },
    createdAt: 'Sep 23, 2018'
  }, {
    category: 'Culture',
    link: '',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    media: 'https://source.unsplash.com/800x520?government',
    text: 'Breitbart News chairman Steve Bannon is leaving his publication following sharp criticism from President Donald Trump about Bannon bashing the president\'s son while talking with a controversial author.',
    _author: {
      _id: '903ur09ewf',
      name: 'Ross Sheppard',
      url: '/rshep'
    },
    createdAt: '20138423'
  }, {
    category: 'Economy',
    link: '',
    title: 'Steve Bannon Leaving Breitbart News Amid Criticism From Trump',
    media: 'https://source.unsplash.com/800x520?defense',
    text: 'Breitbart News chairman Steve Bannon is leaving his publication following sharp criticism from President Donald Trump about Bannon bashing the president\'s son while talking with a controversial author.',
    _author: {
      _id: '903ur09ewf',
      name: 'Ross Sheppard',
      url: '/rshep'
    },
    createdAt: '20138423'
  }, {
    category: 'Religion',
    link: '',
    title: 'Steve Bannon Leaving Breitbart News Amid Criticism From Trump',
    media: 'https://source.unsplash.com/800x520?religion',
    text: 'Breitbart News chairman Steve Bannon is leaving his publication following sharp criticism from President Donald Trump about Bannon bashing the president\'s son while talking with a controversial author.',
    _author: {
      _id: '903ur09ewf',
      name: 'Ross Sheppard',
      url: '/rshep'
    },
    createdAt: 'Sep 23, 2018'
  }, {
    category: 'Religion',
    link: '',
    title: 'Steve Bannon Leaving Breitbart News Amid Criticism From Trump',
    media: 'https://source.unsplash.com/800x520?podcasts',
    text: 'Breitbart News chairman Steve Bannon is leaving his publication following sharp criticism from President Donald Trump about Bannon bashing the president\'s son while talking with a controversial author.',
    _author: {
      _id: '903ur09ewf',
      name: 'Ross Sheppard',
      url: '/rshep'
    },
    createdAt: 'Sep 23, 2018'
  }]
};

const handlers = {
  [ARTICLES_LOAD]: (state, action) => {
    if (!action.error) {
      action.payload.error = undefined;
      return action.payload;
    }
    return { error: action.payload };
  },
  [ARTICLES_UNLOAD]: () => initialState
};

export default createReducer(initialState, handlers);
