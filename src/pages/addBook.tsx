import BookForm from '@/components/bookForm'
import Loader from '@/components/loader'

import Layout from '@/layout/Layout'
import { usePostBooksMutation } from '@/redux/features/book/bookApi'


import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


export type IAddBookData = {
  title: string
  author: string
  genre: string
  publicationDate: string
  reviews: number
}

const AddBook = () => {
const navigate = useNavigate()


  const [addBookData, setAddBookData] = useState<IAddBookData>({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
    reviews: 0,
  })

const [addBooks, { isLoading, isError }] = usePostBooksMutation()

  const handleAddBook = async() => {
    const response:any = await addBooks(addBookData);
    if (!isLoading) {
      if (response?.data?.success == false || isError) {
        Swal.fire({
          icon: 'error',
          title: "Filed to add you book",
        })
      }
      if (response?.data) {
        Swal.fire({
          icon: 'success',
          title: 'Bok added successfully',
          showConfirmButton: false,
          timer: 1500,
        })
        navigate('/')
      }
    }
  }
if(isLoading){
  return <Loader/>
}
  return (
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
  )
}
export default AddBook
