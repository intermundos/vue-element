import { isEqual }                                                    from 'lodash'

function sumObjectsByKey( ...objs ) {
  return objs.reduce( ( a, b ) => {
    for ( let k in b ) {
      if ( Object.prototype.hasOwnProperty.call( b, k ) )
        a[ k ] = ( a[ k ] || 0 ) + b[ k ]
    }
    return a
  }, {} )
}

function sortObject( o: Record<string, any> ) {
  return Object.keys( o ).sort().reduce( ( r, k ) => ( r[ k ] = o[ k ] ) as any, {} )
}

function getObjectDiff( obj1, obj2 ) {
  return Object.keys( obj1 ).reduce( ( result, key ) => {
    if ( !Object.prototype.hasOwnProperty.call( obj2, key ) ) {
      result.push( key )
    } else if ( isEqual( obj1[ key ], obj2[ key ] ) ) {
      const resultKeyIndex = result.indexOf( key )
      result.splice( resultKeyIndex, 1 )
    }
    return result
  }, Object.keys( obj2 ) )
}

function isAllValuesZero( obj ) {
  return !Object.values( obj ).some( ( p ) => parseFloat( String( p as number ) ) !== 0 )
}

function flattenObject( obj ) {
  let flattenKeys = {}
  for ( let i in obj ) {
    if ( !Object.prototype.hasOwnProperty.call( obj, i ) ) continue
    if ( ( typeof obj[ i ] ) === 'object' ) {
      // flattenKeys[i] = obj[i];
      let flatObject = flattenObject( obj[ i ] )
      for ( let j in flatObject ) {
        if ( !Object.prototype.hasOwnProperty.call( flatObject, j ) ) continue
        flattenKeys[ i + '.' + j ] = flatObject[ j ]
      }
    } else {
      flattenKeys[ i ] = obj[ i ]
    }
  }
  return flattenKeys
}

export { flattenObject, isAllValuesZero, sortObject, sumObjectsByKey, getObjectDiff }
export { pick, omit, isEqual, forIn, mapValues, cloneDeep, get, set } from 'lodash'
