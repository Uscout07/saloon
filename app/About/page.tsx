export default function About() {
    return (
      <div className="bg-neutral-50 font-light text-neutral-800">
        {/* Hero Section */}
        <section
          className="relative w-full sm:h-[65vh] md:h-[85vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2017/11/06/09/53/interior-2927714_1280.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center max-w-4xl px-8 text-white">
            <h1 className="font-bodoni text-6xl font-semibold mb-6 tracking-wide">
              Our Journey of Elegance
            </h1>
            <p className="font-light text-xl opacity-90 mb-10 tracking-wider">
              Where artistry, passion, and innovation converge to redefine beauty.
            </p>
            <button className="mt-6 px-8 py-3 bg-white text-neutral-800 text-lg font-medium rounded hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </section>
  
        {/* About Section */}
        <section className="py-24 px-8 container mx-auto">
          <div className="md:flex md:space-x-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/08/44/architecture-1868661_1280.jpg"
                alt="About Us"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <h2 className="font-bodoni text-5xl font-semibold text-neutral-800 mb-6 tracking-wide">
                About Us
              </h2>
              <p className="font-inter text-xl text-neutral-600 leading-relaxed mb-6">
                Founded on a passion for extraordinary beauty experiences, we blend timeless artistry with modern innovation. Every project is a narrative of personal transformation and curated sophistication.
              </p>
              <p className="font-inter text-xl text-neutral-600 leading-relaxed mb-6">
                Our team of internationally trained specialists, visionary artisans, and beauty connoisseurs work together to craft experiences that reveal your unique essence. We believe that every detail matters as much as the story behind it.
              </p>
              <p className="font-inter text-xl text-neutral-600 leading-relaxed">
                Rooted in a profound respect for individuality and design, our journey began with a simple idea: to redefine beauty not as a mere appearance, but as a living art form that evolves with every moment. Our commitment extends to every client, ensuring a personalized narrative of transformation and inspiration.
              </p>
            </div>
          </div>
        </section>
  
        {/* Mission & Vision Section */}
        <section className="py-24 bg-neutral-100 px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8">
                <h3 className="font-bodoni text-4xl font-semibold text-neutral-800 mb-4 tracking-wide">
                  Our Mission
                </h3>
                <p className="font-inter text-xl text-neutral-600 leading-relaxed">
                  To empower every individual through bespoke beauty experiences that enhance self-confidence and celebrate uniqueness.
                </p>
                <p className="font-inter text-xl text-neutral-600 leading-relaxed mt-4">
                  Our approach is infused with a commitment to authenticity and innovation, ensuring that every service is as unique as the individual we serve.
                </p>
              </div>
              <div className="p-8">
                <h3 className="font-bodoni text-4xl font-semibold text-neutral-800 mb-4 tracking-wide">
                  Our Vision
                </h3>
                <p className="font-inter text-xl text-neutral-600 leading-relaxed">
                  To revolutionize the aesthetics industry by merging cutting-edge technology with timeless craftsmanship, creating a sanctuary where personal expression thrives.
                </p>
                <p className="font-inter text-xl text-neutral-600 leading-relaxed mt-4">
                  We envision a future where innovative techniques meet enduring elegance, paving the way for transformative experiences that celebrate the beauty in every nuance.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-24 px-8 container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bodoni text-5xl font-semibold text-neutral-800 mb-6 tracking-wide">
              Meet Our Team
            </h2>
            <p className="font-inter text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Our team is a blend of creative visionaries and dedicated professionals, each contributing to an experience that promises beauty and bespoke artistry.
            </p>
            <p className="font-inter text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We cherish diversity in talent and vision, creating an environment where innovation and tradition unite to elevate every encounter.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {/* Team Member 1 */}
            <div className="bg-white border border-neutral-100 rounded-2xl p-8 text-center transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-neutral-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/30/10/17/woman-2698858_1280.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="font-bodoni text-3xl font-semibold text-neutral-800 mb-2 tracking-wide">
                Alexandra
              </h3>
              <p className="font-inter text-neutral-600">Creative Director</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white border border-neutral-100 rounded-2xl p-8 text-center transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-neutral-200">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/04/17/office-1868727_1280.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="font-bodoni text-3xl font-semibold text-neutral-800 mb-2 tracking-wide">
                Benjamin
              </h3>
              <p className="font-inter text-neutral-600">Lead Stylist</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white border border-neutral-100 rounded-2xl p-8 text-center transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-neutral-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/06/20/59/model-2597985_1280.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="font-bodoni text-3xl font-semibold text-neutral-800 mb-2 tracking-wide">
                Isabella
              </h3>
              <p className="font-inter text-neutral-600">Beauty Consultant</p>
            </div>
          </div>
        </section>
  
        {/* Closing Statement */}
        <section className="py-12 px-8 bg-neutral-50">
          <div className="container mx-auto text-center font-inter text-neutral-500">
            Committed to excellence, our legacy is built on transforming everyday beauty into an enduring art.
          </div>
        </section>
      </div>
    );
  }
  