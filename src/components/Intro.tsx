import featuredAuthor from '../assets/author.jpg'
import author from '../assets/AvaViolet.128.481223.jpg'
import recomanded from '../assets/recomanded.jpg'
const FeaturedAuthor = () => {
  return (<div className='text-white py-8'>
  <div className="grid grid-cols-2 justify-center items-center bg-secondary p-4 md:p-8 rounded-2xl">
    <div>
      <img src={featuredAuthor} alt="" className="w-64 mx-auto" />
    </div>
    <div className=" p-2 md:p-0 ">
      <img
        src={author}
        alt=""
        className="rounded-full my-4 w-16 md:w-32 mx-auto md:mx-0"
      /><h1 className="text-md md:text-2xl my-2 font-semibold text-heading-color ">
  Featured Author
</h1>

      <p className="text-sm md:text-lg">
        King Nebuchadnezzar was a beast of war, ripping through nation after
        nation and carrying home spoils to great Babylon.
      </p>
    </div>
  </div>
  <div className=''><h1 className="text-xl md:text-4xl  mt-8 font-bold text-heading-color">
  Most recomanded book
</h1>

      <p className='text-lg mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas totam in incidunt aperiam, quo dolores nesciunt nulla molestiae vero repellendus quos, doloribus iste asperiores velit!</p>
      <img src={recomanded} alt="" className='md:w-1/2 lg:w-1/4 my-8 mx-auto'/>
    </div>
</div>

  )
}
export default FeaturedAuthor

