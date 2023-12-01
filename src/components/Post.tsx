type postProps = {
  title: string;
  content: string;
  image: string
}

const Post = ({title, content, image}: postProps) => {
  return (
    <div className="w-[317px] h-[20rem] border mb-6 md:mr-6">
      <img src={image} alt="postImage" />
      <div className="flex
      flex-col items-center px-4 text-start py-8">
        <h1 className="font-semibold pb-4">{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Post