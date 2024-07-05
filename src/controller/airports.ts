import NodeCache from 'node-cache';
import { sleep } from '../utils/util';

const cache = new NodeCache();

export const getAirports = async () => {
  const cacheAirportsData = await getAirportsCache()
  console.log('cacheAirportsData', cacheAirportsData);
  
  if (cacheAirportsData) return cacheAirportsData

  const airports = await getDataAirports()
  if (airports) {
   await setAirports(airports)
  }

  return airports
}

const getAirportsCache = () => {
  const airports = cache.get('airports')

  return airports
}

const setAirports = (airports) => {
  return cache.set('airports', airports , 10000)
}

const getDataAirports = async () => {
  await sleep(2000);
    return [
      { name: 'Ha Noi', code: 'HAN' },
      { name: 'Ha Noi', code: 'HAN' },
      { name: 'Ha Noi', code: 'HAN' },
      { name: 'Ha Noi', code: 'HAN' },
      { name: 'Ha Noi', code: 'HAN' },
      { name: 'Ha Noi', code: 'HAN' },
      { name: 'Ha Noi', code: 'HAN' },
      { name: 'Ho Chi Minh City', code: 'SGN' },
    ]
}
