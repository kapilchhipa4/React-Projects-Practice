import _ from 'lodash'

export function Paginate(items , pageNumber, pageSize){

    const startIndex  = (pageNumber - 1) * pageSize;
//converting to lodash raper, then taking all data from startindex , then taking pageSize element from that array then convert into js array
    return _(items).slice(startIndex).take(pageSize).value()
}