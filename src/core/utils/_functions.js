import throttle  from 'lodash/throttle'
import debounce  from 'lodash/debounce'
import defaultTo from 'lodash/defaultTo'

const pipe = ( ...fns ) => ( x ) => fns.reduce(( v, f ) => f(v), x)
const chain = ( ...fns ) => fns.forEach(( f ) => f())

const noop = () => {
}

export { throttle, pipe, chain, debounce, noop, defaultTo }