import setLocalStorage from './useLocalstorage'

export function addCart(value) {
    setLocalStorage(cartItems, value)
}