import { FC } from "react"
import { LinkList } from "./LinkList"

const App: FC = () => {
  return (
    <div className="bg-gradient-red min-h-screen">
      <header
        className="flex min-h-screen flex-col items-center bg-stone-300 p-4"
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
