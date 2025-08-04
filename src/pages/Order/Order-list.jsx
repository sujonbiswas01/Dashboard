import { CiEdit } from "react-icons/ci"
import { MdDeleteOutline } from "react-icons/md"

const headerItems=["Date","Customer","Payment","Total","Delivery","Action"]
const Header=()=>(
    <div className="flex gap-2 justify-between items-center p-2 bg-primary2/30 font-semibold text-center text-grayText shadow-md shadow-white/4 rounded-t-md overflow-x-scroll md:overflow-x-hidden ">
        <div className="flex justify-center gap-2 items-center">
            <input type="checkbox" className="size-3" name="" id="" />
            <span>order</span>
        </div>
           {
            headerItems.map((items,i)=>(
                <h6 key={i}>
                    {items} 
                </h6>
            ))

        }
       
       
    </div>
)
const OrderList = () => {
    const demoOrders = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    customerName: `Customer ${index + 1}`,
    date: new Date(
      2025,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    )
      .toISOString()
      .split("T")[0],
    paymentMessage: ["Success", "Pending"][Math.floor(Math.random() * 2)],
    total: (Math.random() * 150).toFixed(2),
    items: orderItems[Math.floor(Math.random() * 20)],
    delivery: [
      "Delivered",
      "In Transit",
      "Pending",
      "Out for Delivery",
      "Shipped",
    ][Math.floor(Math.random() * 5)],
  }));
  return (
    <section className='text-white bg-primary2'>
        <Header  />
        <div>
           {
            demoOrders.map((order)=>(
                 <div key={order.id} className="bg-primary1 flex justify-between md:overflow-x-hidden overflow-x-scroll items-center gap-5 border-y border-grayText/10 p-2 text-center">
                <div className="flex gap-2 items-center">
                    <input type="checkbox" className="size-3" />
                    <span>{order.id}</span>
                </div>
                <div className="flex-1">
                    {order.date}
                </div>
                <div className="flex-1">{order.customerName}</div>
                <div className={`text-center rounded-full px-2 py-1 ${order.paymentMessage==="Success"?"bg-green-600/20":"bg-red-500/20"}`}>{order.paymentMessage}</div>
                <div className="flex-1">{order.total}</div>
                <div className="flex-1">{order.delivery}</div>
                <div className="flex gap-5 text-xl">
                    <button className="cursor-pointer text-green-600">
                        <CiEdit/>
                    </button>
                    <button className="cursor-pointer text-red-500">
                        <MdDeleteOutline/>
                    </button>
                </div>
            </div>
            ))
           }
        </div>

    </section>
  )
}

export default OrderList

const orderItems = [
  "Coffee",
  "Bagel",
  "Latte",
  "Sandwich",
  "Espresso",
  "Croissant",
  "Cappuccino",
  "Muffin",
  "Mocha",
  "Brownie",
  "Tea",
  "Scone",
  "Macchiato",
  "Danish",
  "Flat White",
  "Toast",
  "Hot Chocolate",
  "Green Tea",
  "Cookies",
  "Iced Coffee",
];