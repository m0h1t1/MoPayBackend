//import { CustomRepository } from 'src/custom-repository/typeorm-ex.decorator'
import { Repository } from 'typeorm'
import { User } from './users.entity'

//@CustomRepository()
export class UsersRepository extends Repository<User> {}