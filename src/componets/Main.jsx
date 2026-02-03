import React from 'react'
import "./style/Main.css"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"

const Main = () => {
  const techList = [
    {
        id: 1,
      title: "HTML",
      desc: "웹 구조를 만드는 마크업 언어",
      icon: icon1,
    },
    {
      id: 2,
      title: "CSS",
      desc: "화면을 꾸미는 스타일 언어",
      icon: icon2,
    },
    {
      id: 3,
      title: "JavaScript",
      desc: "웹에 동작을 추가하는 언어",
      icon: icon3,
    },
  ];

  return (
    <main>
        <h1>Main</h1>
        <div className="big-icon-wrap">

          <ul className="mini-icon-wrap">
            {techList.map((img, i) => (
              <li className="mini-icon-item" key={i}>
                <img src={img.icon} alt="이미지"/>
                <span>{img.id}</span>
                <span>{img.title}</span>
                <span>{img.desc}</span>
              </li>
            ))}
          </ul>
        </div>
    </main>
  )
}

export default Main