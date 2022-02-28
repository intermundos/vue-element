import * as DOM         from './_dom'
import * as Timers      from './_timers'
import * as Dates       from './_date-time.js'
import * as Objects     from './_objects'
import * as Collections from './_collections'
import * as Crypto      from './_crypto'
import * as Strings     from './_strings'
import * as Functions   from './_functions'
import * as Numbers     from './_numbers'
import * as Values      from './_booleans.js'

const Utils = {}

Utils.DOM = DOM
Utils.TIMERS = Timers
Utils.DATE_TIME = Dates
Utils.COLLECTIONS = Collections
Utils.OBJECTS = Objects
Utils.CRYPTO = Crypto
Utils.STRINGS = Strings
Utils.FUNCTIONS = Functions
Utils.NUMBERS = Numbers
Utils.VALUES = Values

export { Utils }

