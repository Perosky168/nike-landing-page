import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex
    justify-between items-center max:lg:flex-col
    gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize
         font-bold lg:max-w-lg">
            We Provide you
          <span
          className="text-coral-red">
          Super
          </span>
          <span 
          className="text-coral-red">
           Quality
          </span>
            Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously
          crafted footwear is designed to elevate your experience,
          providing you with unmatched quality, innovation, and
          a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to details
          and execellence ensures your
          satisfaction
        </p>
         <Button label="view details"/>
      </div>
    </section>
  )
}

export default SuperQuality