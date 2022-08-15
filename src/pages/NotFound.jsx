import NotFoundImage from '../assets/images/NotFound.webp'

const NotFound = () => {
  return (
    <div className='container mx-auto h-full mb-10'>
      <img className='overflow-hidden w-3/4 mx-auto rounded-lg' src={NotFoundImage} alt="404" />
    </div>
  )
}

export default NotFound