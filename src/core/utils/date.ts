import format from 'date-fns/format'
import add    from 'date-fns/addDays'

const formatDate = ( date ) => format(new Date(date), 'dd/MM/yyyy')
const addDays = ( date, amount ) =>  add(new Date(date), amount)

export { formatDate, addDays }