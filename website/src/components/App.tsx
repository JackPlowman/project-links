import { FC } from "react"
import { LinkList } from "./LinkList"

const App: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-red">
      <header
        className="flex min-h-screen flex-col items-center p-4 bg-stone-300"
        style={{ paddingTop: "25vh" }}
      >
        <h1
          className="mb-10 text-3xl font-bold text-gray-900"
          aria-label="Website Title"
        >
          Project Links
        </h1>
        <LinkList />
      </header>
    </div>
  )
}

export default App
