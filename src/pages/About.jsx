function About() {
  return (
    <div className="max-w-[90%] lg:max-w-3xl mx-auto my-10 font-jost">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-2">
        <div>
          <img className="rounded-md w-full h-full" src="./about.png" alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Our Story</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            tenetur dolorem nostrum corrupti sequi minus ut provident nam error
            quo quisquam sit unde doloribus mollitia officia, ad itaque eaque ex
            eum, eius accusamus quasi fuga quisquam, voluptatem recusandae ipsam
            vitae nam possimus neque minus assumenda accusamus aut? Tenetur
            exercitationem autem eaque, dolorum excepturi aliquam vel sed
            quibusdam. Rerum numquam eius, maiores alias dolor minus illum
            possimus, temporibus, fugiat eos veniam iure iste quidem!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
