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

export const LinkList: FC = () => {
  return (
    <ul className="w-full max-w-md space-y-6" aria-label="List of Links">
      {links.map(({ id, title, url, imageUrl }) => (
        <li key={id}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-lg bg-stone-100 p-4 shadow transition-shadow duration-200 hover:shadow-md"
            aria-label={`Link to ${title}`}
          >
            <img
              src={imageUrl}
              alt={`${title} logo`}
              className="mr-4 h-8 w-8"
            />
            <span className="text-lg text-stone-800">{title}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
