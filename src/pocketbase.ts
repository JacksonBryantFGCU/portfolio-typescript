import PocketBase from 'pocketbase'

const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_URL

if (!pocketbaseUrl) {
  throw new Error('❌ Missing PocketBase environment variable!')
}

const pb = new PocketBase(pocketbaseUrl)

export default pb
