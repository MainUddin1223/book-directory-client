// import BookForm from '@/components/bookForm'
import Layout from '@/layout/Layout'

const UpdateBook = () => {
  return (
    <Layout>
      <div className="p-8 lg:w-1/2 mx-auto bg-gray-200 my-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold text-center ml-4 uppercase mb-4">
          Update the require field
        </h1>
        {/* <BookForm /> */}
        <button className="bg-button-color px-8 py-2 rounded text-white mx-auto block">
          Update
        </button>
      </div>
    </Layout>
  )
}
export default UpdateBook
