import { FC } from "react"
import { IconType } from "react-icons";
import { IoFolderSharp } from "react-icons/io5";
interface LinkItem {
  id: string
  title: string
  url: string
  Icon: IconType
}

const links: LinkItem[] = [
  {
    id: "github-stats",
    title: "github-stats",
    url: "https://github.com/JackPlowman/github-stats",
    Icon : IoFolderSharp,
  }
]

export const LinkList: FC = () => {
  return (
    <ul className="w-full max-w-md space-y-6" aria-label="List of Links">
      {links.map(({ id, title, url, Icon }) => (
        <li key={id}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-lg bg-stone-100 p-4 shadow transition-shadow duration-200 hover:shadow-md"
            aria-label={`Link to ${title}`}
          >
            <Icon className="mr-4 h-8 w-8"/>
            <span className="text-lg text-stone-800">{title}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
