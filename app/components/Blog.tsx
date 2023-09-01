"use client"
import { DarkThemeToggle, Flowbite } from "flowbite-react"
const posts = [
  {
    id: 1,
    title: "Highlight: sani's reflection",
    href: "#",
    description:
      "this past week ive felt pretty stable in regards to my emotions but i also feel like ive been letting work overtake me which is fine because i want to make overtime but i also need to remember that work life balance is super important. And if I’m gonna do multiple shifts I need to prepare to feel better ",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Reflection", href: "#" },
    author: {
      name: "Samantha Harrigan",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://www.okayplayer.com/media-library/canary-from-hunter-x-hunter.jpg?id=33627119&width=787&quality=80",
    },
  },
  // More posts...
]

export default function Example() {
  return (
    <Flowbite>
      <div className=" items-center">
        <div className="bg-white dark:bg-slate-800 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 ">
            <div className="mx-auto max-w-4xl lg:mx-0 ">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl ">
                Calmness amidst the chaos 🧃
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 ">
                Thoughts and feelings go here.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Flowbite>
  )
}
