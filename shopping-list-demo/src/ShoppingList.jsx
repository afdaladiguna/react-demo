import ShoppingListItem from './ShoppingListItem';

export default function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        // <ShoppingListItem
        //   key={i.id}
        //   item={i.item}
        //   qty={i.qty}
        //   completed={i.completed}
        // />
        <ShoppingListItem key={i.id} {...i} />
      ))}
    </ul>
  );
}
