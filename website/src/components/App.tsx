import { FC } from "react"

interface LinkItem {
  id: string
  title: string
  url: string
  imageUrl: string
}

const links: LinkItem[] = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/JackPlowman",
    imageUrl: "/github-mark.svg",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://linkedin.com/in/jackplowman",
    imageUrl: "/linkedin.svg",
  },
  {
    id: "twitter",
    title: "Twitter",
    url: "https://twitter.com/jack_plowman",
    imageUrl: "/twitter.svg",
  },
]

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex flex-col items-center custom-padding min-h-screen p-4">
        <h1 className="mb-10 text-3xl font-bold text-gray-900" aria-label="Website Title">Jack Plowman</h1>
        <ul className="space-y-6 w-full max-w-md" aria-label="List of Links">
          {links.map(({ id, title, url, imageUrl }) => (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
                aria-label={`Link to ${title}`}
              >
                <img
                  src={imageUrl}
                  alt={`${title} logo`}
                  className="w-8 h-8 mr-4"
                />
                <span className="text-lg text-gray-800">{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
