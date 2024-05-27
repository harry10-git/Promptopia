import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>

        <p className="desc text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa consequuntur, nostrum sit officia error facere praesentium sequi fugiat tenetur facilis voluptate expedita eum recusandae itaque laboriosam sunt hic iure rerum.
        </p>

        <Feed />
    </section>
  )
}

export default Home