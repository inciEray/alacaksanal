import { Link } from "react-router-dom";
import banner2 from "../assets/images/banners/banner-2.jpg"
import banner3 from "../assets/images/banners/banner-3.jpg"
import banner4 from "../assets/images/banners/banner-4.jpg"

const posts = [
  {
    id: 1,
    image: banner2,
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    link: "/post/1"
  },
  {
    id: 2,
    image: banner3,
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    link: "/post/2"
  },
  {
    id: 3,
    image: banner4,
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    link: "/post/3"
  }
];

export default function FeaturedPosts() {
  return (
    <section className="py-10 px-5">
      <h2 className="text-center text-3xl font-bold">Featured Posts</h2>
      <p className="text-center text-gray-500 mt-2">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6 md:px-10">
        {posts.map((post) => (
          <div key={post.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-full max-w-[348px] h-[606px] mx-auto">
            <div className="relative w-full h-[300px]">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500">
                <span className="text-blue-600">Google</span> Trending New
              </p>
              <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{post.description}</p>
              <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                <span className="flex items-center gap-1">📅 {post.date}</span>
                <span className="flex items-center gap-1">📊 {post.comments} comments</span>
              </div>
              <Link to={post.link} className="block text-blue-600 font-semibold mt-4 hover:underline">
                Learn More &gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}