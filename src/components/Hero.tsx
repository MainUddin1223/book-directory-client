import heroImage from '../assets/feature-brand-book.jpg'
const Hero = () => {
  return (
    <div className="md:flex md:flex-row-reverse ">
      <div className="flex flex-1 justify-center items-center">
        <h1 className="text-2xl">Welcome to Book Directory</h1>
      </div>
      <div className="flex-1">
        <img src={heroImage} alt="" />
      </div>
    </div>
  )
}
export default Hero
