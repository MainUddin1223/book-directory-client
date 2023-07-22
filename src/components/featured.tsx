import featured1 from '../assets/featured-1.jpg'
import featured2 from '../assets/featured-2.jpg'
import featured3 from '../assets/featured-3.jpg'
import featured4 from '../assets/featured-4.jpg'
const Featured = () => {
  return (
    <div className="mx-4 py-4">
      <h1 className="text-3xl md:text-5xl text-heading-color font-bold my-8">
        FEATURED BOOKS
      </h1>
      <p className="text-white font-semibold">
        Wattpad Paid Stories from members of the WCX Community! Support your
        favourite Wattpad Authors
      </p>
      <div className=" grid grid-cols-4 md:gap-24 gap-8 my-4 bg-secondary p-4 shadow">
        <img src={featured1} alt="" className="shadow-md" />
        <img src={featured2} alt="" className="shadow-md" />
        <img src={featured3} alt="" className="shadow-md" />
        <img src={featured4} alt="" className="shadow-md" />
      </div>
    </div>
  )
}
export default Featured
