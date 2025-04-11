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
      <header className="custom-padding flex min-h-screen flex-col items-center p-4">
        <h1
          className="mb-10 text-3xl font-bold text-gray-900"
          aria-label="Website Title"
        >
          Jack Plowman
        </h1>
        <ul className="w-full max-w-md space-y-6" aria-label="List of Links">
          {links.map(({ id, title, url, imageUrl }) => (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-lg bg-gray-50 p-4 shadow transition-shadow duration-200 hover:shadow-md"
                aria-label={`Link to ${title}`}
              >
                <img
                  src={imageUrl}
                  alt={`${title} logo`}
                  className="mr-4 h-8 w-8"
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
