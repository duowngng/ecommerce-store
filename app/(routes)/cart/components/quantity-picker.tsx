"use client"

import { JSX, SVGProps, useState } from "react"
import { Button } from "@/components/ui/button-shadcn"
import { CartItem } from "@/types"
import useCart from "@/hooks/use-cart"

interface QuantityPickerProps {
  data: CartItem
}

const QuantityPicker: React.FC<QuantityPickerProps> = ({
  data
}) => {
  const cart = useCart();
  const [quantity, setQuantity] = useState(data.quantity);
  const min = 1
  const max = data.product.quantity
  
  const handleIncrement = () => {
    cart.updateItemQuantity(data.product.id, quantity + 1);
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      cart.updateItemQuantity(data.product.id, quantity - 1);
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="grid gap-4">
      <div className="flex items-center border-y rounded-lg overflow-hidden w-fit h-fit">
        <Button variant="outline" className="h-9 w-9 p-0" onClick={handleDecrement} disabled={quantity === min}>
          <MinusIcon className="h-3 w-3" />
          <span className="sr-only">Decrease quantity</span>
        </Button>
        <div className="h-9 w-fit text-md font-medium px-4 py-1.5 align-middle">{quantity}</div>
        <Button variant="outline" className="h-9 w-9 p-0" onClick={handleIncrement} disabled={quantity === max}>
          <PlusIcon className="h-3 w-3" />
          <span className="sr-only">Increase quantity</span>
        </Button>
      </div>
    </div>
  )
}

export default QuantityPicker

function MinusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}