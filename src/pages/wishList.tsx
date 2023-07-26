import { useGetWishListQuery } from '@/redux/features/book/bookApi'
import { IAddBookData } from './addBook'
import Loader from '@/components/loader'

const WishList = () => {
  const { data, isLoading, error } = useGetWishListQuery(undefined)
  if (isLoading) {
    return <Loader />
  }
  return (
    <div className=" bg-secondary my-4 text-white shadow-md p-4 overflow-x-scroll">
      <h1 className="text-2xl font-bold p-4 text-center">My Wish list</h1>
      <div className="overflow-x-auto ">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Genre</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((book: IAddBookData) => (
                <tr>
                  <td className="border px-4 py-2">{book.title}</td>
                  <td className="border px-4 py-2">{book.author}</td>
                  <td className="border px-4 py-2">{book.genre}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default WishList
