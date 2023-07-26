import {
  useDeleteBookByIdMutation,
  useGetMyBooksQuery,
} from '@/redux/features/book/bookApi'
import { MdDelete } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'
import { IAddBookData } from './addBook'
import Loader from '@/components/loader'
import { useNavigate } from 'react-router-dom'

type IBookData = {
  _id: string
} & IAddBookData

const MyBookList = () => {
  const { data, isLoading } = useGetMyBooksQuery(undefined)
  const [deleteBookById, { isLoading: isDeleteLoading }] =
    useDeleteBookByIdMutation()
  const navigate = useNavigate()

  const handleDeleteBook = async (id: string) => {
    const response = await deleteBookById(id)
    if (response) {
      console.log(response)
    }
  }

  if (isLoading || isDeleteLoading) {
    return <Loader />
  }
  return (
    <div className=" bg-secondary my-4 text-white shadow-md p-4 overflow-x-scroll">
      <h1 className="text-2xl font-bold p-4 text-center">My book list</h1>
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
            {data?.data &&
              data.data.map((book: IBookData) => (
                <tr>
                  <td className="border px-4 py-2">{book.title}</td>
                  <td className="border px-4 py-2">{book.author}</td>
                  <td className="border px-4 py-2">{book.genre}</td>
                  <td className="border px-4 py-2 ">
                    <MdDelete
                      onClick={() => handleDeleteBook(book._id)}
                      className="mx-auto text-2xl text-red-500 cursor-pointer"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <BiEdit
                      onClick={() => navigate(`/book/${book._id}`)}
                      className="mx-auto text-2xl text-black cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default MyBookList
