import './App.css'
import Button from './components/Button'
import Main from './components/Main'
import Section from './components/section'
import Input from './components/Input'

function App() {
  const sectionData = {
    content:"세션에 전달 되는 데이터",
    bgcolor:"orange"
  }

  const handleChange=(value)=>{
    console.log("입력중: ", value)
  }

  return (
    <div>
      <Input 
      inputValue={"hello react"}
      title={"input title"}
      placeholder={"입력하세요"}
      onChange={handleChange}
      />
      <hr/>
      {/* <Section data={sectionData}/> */}
      <Section {...sectionData}/>
      <hr/>
      <Main content={"메인 영역입니다.1"} bgcolor={"lightblue"} />
      <Main content={"메인 영역입니다.2"} bgcolor={"lightblue"} />
      <Main bgcolor={"lightblue"}/>
      <hr/>
      <Button text={"메일"}  color={"red"}>
        <span>자식요소 red</span>
      </Button>
      <Button text={"카페"} color={"blue"}>
        <span>자식요소 blue</span>
      </Button>
      <Button text={"블로그"} color={"green"}>
        <span>자식요소 green</span>
      </Button>
      <Button text={"블로그"}/>
      <h1>Hello React</h1>
    </div>
  )
}

export default App