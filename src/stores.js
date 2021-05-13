import { writable } from "svelte/store";

export const gitHubStore = (cart) => {
  const { subscribe, update, set } = writable(cart);

  const addToStore = (index) => {
    update((cart) => (cart = [...cart, cart[index]]));
  };
  const removeItem = (index) => {
    //const item = cart.filter((item) => item.id === index);
    cart.slice(index, 1);
    return cart;
  };
  return { addToStore, removeItem, subscribe, update, set };
};
