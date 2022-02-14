import Card from "../UI/Card";

function UserList(params) {
    
    return(<Card><ul>
          {params.user.map((user) => (
          <li key={user.id}>
            {user.name}  {user.age} years old
          </li>
        ))}
    </ul></Card>)
    }

export default UserList;