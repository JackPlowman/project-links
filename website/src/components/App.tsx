import { FC } from "react"
import { LinkList } from "./LinkList"

const App: FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      <div className="relative z-10 flex min-h-screen w-full flex-col place-items-center justify-center">
        <h1
          className="mb-10 text-3xl font-bold text-gray-900"
          aria-label="Website Title"
        >
          Project Links
        </h1>
        <LinkList />
      </div>
    </div>
  )
}

export default App
