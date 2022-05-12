import { defineStore, Store, StateTree, StoreGetters, StoreActions } from 'pinia'
import localForage                                                   from 'localforage'
import { cloneDeep }                                                 from '@utils/objects'

type WebStorage = {
  instance: any
  getItem: ( key: string ) => any
  setItem: ( key: string, value: any ) => void
}

interface IModule<I extends string, S, G, A> {
  id: I
  store: Store<I, S, G>
  actions: A
  storage: WebStorage
}

interface IModuleWithStorage<I extends string, S, G, A, W> extends IModule<I, S, G, A>{}

type ModuleWithStorage<I extends string, S, G, A, W> = W extends WebStorage ?
  IModuleWithStorage<I, S, G, A, W> : IModule<I, S, G, A>

export function defineModule<Id extends string,
  State extends StateTree,
  Actions extends StoreActions<State>,
  Getters extends StoreGetters<State>>( config: { id: Id, state: State, actions: Actions, getters?: Getters, webStorage?: boolean } ) {

  const { id, state, actions, getters, webStorage } = config

  const store: Store<Id, State, Getters> = defineStore( {
    id     : `${ id }-store`,
    state  : () => state,
    getters: getters,
  } )() as Store<Id, State, Getters>

  function wrapActions( actions: Actions, service ) {

    const wrappedActions: StoreActions<State> = {} as StoreActions<State>

    for ( const actionName in actions ) {
      wrappedActions[ actionName ] = function boundAction( ...args: any[] ) {
        return config.actions?.[ actionName ]?.apply( service, args )
      } as StoreActions<State>[typeof actionName]
    }

    return wrappedActions

  }

  if ( webStorage ) {

    const module: ModuleWithStorage<Id, State, Getters, Actions, WebStorage> = {
      id,
      store  : store,
      actions: actions,
      storage: {
        instance: localForage.createInstance( { name: id } ),
        setItem : async ( key, value, clone = true ) => {
          module.storage.instance.setItem( key, clone ? cloneDeep( value ) : value )
        },
        getItem : async ( key ) => {
          return module.storage.instance.getItem( key )
        },
      }
    } as ModuleWithStorage<Id, State, Getters, Actions, WebStorage>

    module.actions = wrapActions( actions, module )

    return module as ModuleWithStorage<Id, State, Getters, Actions, true>

  } else {

    const module: ModuleWithStorage<Id, State, Getters, Actions, false> = {
      id,
      store  : store,
      actions: actions
    } as ModuleWithStorage<Id, State, Getters, Actions, false>

    module.actions = wrapActions( actions, module )

    return module
  }

}
