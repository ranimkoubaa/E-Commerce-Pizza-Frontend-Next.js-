import { useContext, useState } from "react"
// icons
import { IoCloseOutline } from "react-icons/io5"
// components
import CheckoutDetails from "./CheckoutDetails"
// modal
import Modal from "react-modal"
// context
import { CartContext } from "../context/CartContext"

// modal styles
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}


// bind modal to body
Modal.setAppElement("body")

const CartBottom = () => {
  const { setIsOpen, cart, cartTotal } = useContext(CartContext)
  // modal state
  const [modal, setModal] = useState(false)

  // open modal
  const openModal = () => {
    setModal(true)
  }

  // close modal
  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      {cart.length >= 1 ? (
        <div className="px-6 py-3 sm:py-6 mt-auto">
          {/* total price */}
          <div className="flex items-center justify-between mb-6 text-lg font-semibold font-robotoCondensed">
            <div>Total:</div>
            <div>${parseFloat(cartTotal).toFixed(2)}</div>
          </div>
          {/* btn */}
          <div className="flex flex-col gap-y-3">
            <button
              onClick={() => {
                setIsOpen(false), openModal(true)
              }}
              className="btn btn-lg gradient font-semibold flex justify-center"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10">
          <div className="font-semibold">Your cart is empty</div>
        </div>
      )}
      {/* checkout modal */}
      {modal && (
        <Modal
          onClick={closeModal}
          className="bg-white w-full h-full sm:max-w-[900px] sm:max-h-[600px] sm:rounded-[30px] sm:fixed sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] outline-none"
          isOpen={modal}
          styles={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Checkout Modal"
        >
          {/* close modal icons */}
          <div className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer">
            <IoCloseOutline className="text-4xl text-orange" />
          </div>
          <CheckoutDetails setModal={setModal} />
        </Modal>
      )}
    </>
  )
}

export default CartBottom