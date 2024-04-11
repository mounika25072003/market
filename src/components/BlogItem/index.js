// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="blog-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-data">{publishedDate}</p>
      </div>
      <p className="blog-para">{description}</p>
    </li>
  )
}
export default BlogItem
