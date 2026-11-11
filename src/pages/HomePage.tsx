import { useState } from "react"
import homeTemplate from "../templates/home.html?raw"
import { renderTemplate } from "../utils/renderTemplate"


export default function HomePage() {
  const [name, setName] = useState("유성")

  const html = renderTemplate(homeTemplate, {
    title : "home",
    name : name || "visitor",
  })

  return (
    <main>
      <label htmlFor="home-name">표시할 이름</label>

      <input
        id="home-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  )
}