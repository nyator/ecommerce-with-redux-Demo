import { useSelector, useDispatch } from "react-redux";

export function useStore(storeItem) {
    const dispatch = useDispatch();
    const items = useSelector(state => storeItem ? state[storeItem] : state);

    return { items, dispatch };
}