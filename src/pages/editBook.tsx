import BookForm from '@/components/bookForm'
import {
  useGetBookByIdQuery,
  useUpdateBookByIdMutation,
} from '@/redux/features/book/bookApi'
import { useNavigate, useParams } from 'react-router-dom'
import { IAddBookData } from './addBook'
import { useState, useEffect } from 'react'
import Loader from '@/components/loader'

const EditBook = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useGetBookByIdQuery(id)
  const [updateBookById] = useUpdateBookByIdMutation()
  const [bookData, setBookData] = useState<IAddBookData>({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
    reviews: 0,
  })
  useEffect(() => {
    if (!isLoading) {
      setBookData({
        title: data?.title,
        author: data?.author,
        genre: data?.genre,
        publicationDate: data?.publicationDate,
        reviews: data?.reviews,
      })
    }
  }, [isLoading])

  const handleUpdateBook = async () => {
    const options = { id, data: bookData }
    const response: any = await updateBookById(options)
    if (response) {
      navigate('/my-books')
    }
  }
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="bg-primary py-8">
      <div className="p-8 lg:w-1/2 mx-auto bg-secondary  rounded shadow-md">
        <h1 className="text-2xl font-semibold text-center ml-4 uppercase mb-4 text-white">
          Fill the book form
        </h1>
        <BookForm bookData={bookData} setBookData={setBookData} />
        <button
          onClick={handleUpdateBook}
          className="bg-button-color px-8 py-2 rounded text-white mx-auto block"
        >
          Update
        </button>
      </div>
    </div>
  )
}
export default EditBook
