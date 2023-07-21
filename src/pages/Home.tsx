import BookList from '@/components/BookList'
import Hero from '@/components/Hero'
import FeaturedAuthor from '@/components/Intro'
import Featured from '@/components/featured'


const Home = () => {
  return (
    <div>
      <Hero /><Featured />
      <BookList />
      <FeaturedAuthor />
    </div>
  )
}
export default Home
