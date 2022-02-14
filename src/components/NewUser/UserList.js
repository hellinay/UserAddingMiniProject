import Card from "../UI/Card";
import  "./UserList.css";

function UserList(params) {
    
    return(<ul>
          {params.user.map((user) => (
          <Card><li key={user.id}>
            {user.name}  {user.age} years old
          </li></Card>
        ))}
    </ul>)
    }

export default UserList;