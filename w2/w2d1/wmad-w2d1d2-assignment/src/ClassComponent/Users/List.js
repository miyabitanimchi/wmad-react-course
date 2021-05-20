const List = (props) => {
  const {
    id,
    name,
    username,
    email,
    list,
    getNewList,
    toggleEditStatus,
  } = props;

  const deleteUser = (id) => {
    let newList = list.filter((user) => user.id !== id);
    getNewList(newList);
  };

  const editList = () => {
    toggleEditStatus();
  };

  return (
    <div className="list">
      <ul>
        <li>ID: {id}</li>
        <li>Name: {name}</li>
        <li>Username: {username}</li>
        <li>E-mail: {email}</li>
      </ul>
      <button onClick={() => deleteUser(id)}>Delete</button>
      <button onClick={() => editList()}>Edit</button>
    </div>
  );
};

export default List;
