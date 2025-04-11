import { FC } from "react"
import { LinkList } from "./LinkList"

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="custom-padding flex min-h-screen flex-col items-center p-4">
        <h1
          className="mb-10 text-3xl font-bold text-gray-900"
          aria-label="Website Title"
        >
          Jack Plowman
        </h1>
        <LinkList />
      </header>
    </div>
  )
}

export default App
