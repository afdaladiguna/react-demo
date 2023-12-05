export default function ShoppingListItem({ item, qty, completed }) {
  const styles = {
    color: completed ? 'grey' : 'red',
    textDecoration: completed && 'line-through',
  };
  return (
    <li style={styles}>
      {item} - {qty}
    </li>
  );
}

/* <li
  key={i.id}
  style={{
    color: i.completed ? 'grey' : 'red',
    textDecoration: i.completed && 'line-through',
  }}
>
  {i.item} - {i.qty}
</li>; */
