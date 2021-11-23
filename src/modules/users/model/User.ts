import { v4 as uuidV4 } from 'uuid'

class User {
  id = uuidV4()
  name = ''
  email = ''
  admin = false
  created_at = new Date()
  updated_at = new Date()
}

export { User }
