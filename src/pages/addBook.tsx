import BookForm from '@/components/bookForm'
import Layout from '@/layout/Layout'
import { usePostBooksMutation } from '@/redux/features/book/bookApi'
import { useAppDispatch } from '@/redux/hooks'

import { useState } from 'react'

export type IAddBookData = {
  title: string
  author: string
  genre: string
  publicationDate: string
  reviews: number
}

const AddBook = () => {

  const [addBookData, setAddBookData] = useState<IAddBookData>({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
    reviews: 0,
  })

  const [addBooks] = usePostBooksMutation()
  const handleAddBook = async() => {
    const response = await addBooks(addBookData);
    console.log(response)
  }

  return (
    <Layout>
      <div className="bg-primary py-8">
        <div className="p-8 lg:w-1/2 mx-auto bg-secondary  rounded shadow-md">
          <h1 className="text-2xl font-semibold text-center ml-4 uppercase mb-4 text-white">
            Fill the book form
          </h1>
          <BookForm bookData={addBookData} setBookData={setAddBookData} />
          <button
            onClick={handleAddBook}
            className="bg-button-color px-8 py-2 rounded text-white mx-auto block"
          >
            Submit
          </button>
        </div>
      </div>
    </Layout>
  )
}
export default AddBook
