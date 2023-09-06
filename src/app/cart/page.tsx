import { CartEntry } from "@/components";
import { getCart } from "@/lib/db/cart"
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/util-functions";

export const metadata = {
  title: "Your Cart - eCommerce"
}

const CartPage = async () => {
  const cart = await getCart();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      { cart?.items.map(cardItem => (
        <CartEntry
          setProductQuantity={setProductQuantity}
          cartItem={cardItem}
          key={cardItem.id}
        />
      )) }
      {!cart?.items.length && <p>Your cart is empty</p>}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="btn btn-primary sm:w-[200px]">Checkout</button>
      </div>
    </div>
  )
  
}

export default CartPage;
