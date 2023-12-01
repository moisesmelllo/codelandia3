import Post from "./Post"
import axios from "axios"
import { useState, useEffect } from "react"

interface post {
  id: number;
  title: string;
  content: string;
  image: string
}

const Body = () => {
  const [data, setData] = useState<post[]>([])
  useEffect(() => {
    axios.get('http://localhost:3000/posts')
    .then(response => {
      setData(response.data)
    })
  }, [])


  return (
    <div className="flex flex-col justify-start px-20 max-w-[1265px] mx-auto">
      <h1 className="text-center lg:text-start py-8 font-semibold
      text-2xl lg:ml-10">
        Artigos recomendados
      </h1>
      <div className="flex flex-wrap justify-center">
      
        {data && data.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            image={post.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Body