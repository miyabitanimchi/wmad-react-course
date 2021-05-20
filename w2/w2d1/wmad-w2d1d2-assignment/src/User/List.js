const List = (props) => {
  const { id, name, username, email, list } = props;
  const deleteUser = (id) => {
    let newList = list.filter((user) => user.id !== id);
    props.getNewList(newList);
  };
  return (
    <>
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{username}</li>
        <li>{email}</li>
      </ul>
      <button onClick={() => deleteUser(props.id)}>Delete</button>
      <button>Edit</button>
    </>
  );
};

export default List;
