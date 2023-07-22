import { IAddBookData } from '@/pages/addBook'

type IBookForm = {
  bookData: IAddBookData
  setBookData: React.Dispatch<React.SetStateAction<IAddBookData>>
}

const BookForm = ({ bookData, setBookData }: IBookForm) => {
  return (
    <div className="">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Book title *
        </label>
        <input
          type="name"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-3/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Book title"
          onChange={(event) => {
            setBookData((prev) => ({
              ...prev,
              title: event.target.value,
            }))
          }}
          value={bookData?.title ?? ''}
          required
        />
      </div>
      <div className="flex gap-4 my-4">
        <div className="flex-auto">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author *
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Author"
            onChange={(event) => {
              setBookData((prev) => ({
                ...prev,
                author: event.target.value,
              }))
            }}
            value={bookData?.author ?? ''}
            required
          />
        </div>
        <div className="flex-auto">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Genre *
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Genre"
            onChange={(event) => {
              setBookData((prev) => ({
                ...prev,
                genre: event.target.value,
              }))
            }}
            value={bookData?.genre ?? ''}
            required
          />
        </div>
      </div>
      <div className="flex gap-4 my-4">
        <div className="flex-auto">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Reviews *
          </label>
          <input
            type="number"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Rent aount"
            onChange={(event) => {
              setBookData((prev) => ({
                ...prev,
                reviews: Number(event.target.value),
              }))
            }}
            value={bookData.reviews ?? ''}
            required
          />
        </div>
      </div>
      <div className="my-4">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Publication date *
        </label>
        <input
          type="date"
          id="start"
          name="trip-start"
          className="p-2 rounded"
          value={new Date().toISOString().slice(0, 10)}
          min={100 - 12 - 31}
          max={new Date().toISOString().slice(0, 10)}
          onChange={(event) =>
            setBookData((prev) => ({
              ...prev,
              publicationDate: event.target.value,
            }))
          }
        />
      </div>
    </div>
  )
}
export default BookForm
