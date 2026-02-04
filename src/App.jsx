import './App.css'
import PostItem from './components/PostItem'
import MenuButton from './components/MenuButton'
import InputCard from './components/InputCard'

function App() {
  const menus = [
    {id:1, label:"everyday", color:"red"},
    {id:2, label:"cafe", color:"orange"},
    {id:3, label:"blog", color:"blue"},

  ]

  const input = {
    title:"name",
    placeholder:"입력하시오"
  }

  const posts = [
    { id: 1, title: "React 시작하기", author: "홍길동" },
    { id: 2, title: "JS 문법 정리", author: "김철수" },
    { id: 3, title: "CSS 레이아웃", author: "이영희" },
  ]

  return (
    <div>
      <h1>메뉴</h1>
      {menus.map((menu) => (
        <MenuButton key={menu.id} {...menu}/>
      ))}
      <InputCard {...input}/>
      <h1>게시글</h1>
      {posts.map((post) => (
        <PostItem key={post.id} {...post}/>
      ))}
    </div>
  )
}

export default App
